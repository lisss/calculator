type Operator = '+' | '-' | '*' | '/';
type Token =
  | { type: 'number'; value: string }
  | { type: 'operator'; value: Operator };
export type ASTNode = NumberNode | BinaryOpNode;
type NumberNode = { type: 'number'; value: number };
type BinaryOpNode = {
  type: 'binaryOp';
  operator: Operator;
  left: ASTNode;
  right: ASTNode;
};

export function tokenize(input: string): Token[] {
  return input
    .trim()
    .split(/\s+/)
    .map((token) => {
      if (token === '+' || token === '-' || token === '*' || token === '/') {
        return { type: 'operator' as const, value: token };
      } else if (/^\d+$/.test(token)) {
        return { type: 'number' as const, value: token };
      } else {
        throw new Error(`Expected number got '${token}'`);
      }
    });
}

export function parse(tokens: Token[]): ASTNode {
  let position = 0;

  function parseExpression(): ASTNode {
    let node = parseTerm();

    // This loop handles addition and subtraction
    while (
      position < tokens.length &&
      (tokens[position].value === '+' || tokens[position].value === '-')
    ) {
      const operator = tokens[position].value as '+' | '-';
      position++;
      const right = parseTerm();
      node = { type: 'binaryOp', operator, left: node, right };
    }
    return node;
  }

  function parseTerm(): ASTNode {
    let node = parseFactor();

    // This loop handles multiplication and division
    while (
      position < tokens.length &&
      (tokens[position].value === '*' || tokens[position].value === '/')
    ) {
      const operator = tokens[position].value as '*' | '/';
      position++;
      const right = parseFactor();
      node = { type: 'binaryOp', operator, left: node, right };
    }
    return node;
  }

  function parseFactor(): ASTNode {
    const token = tokens[position];
    if (!token) {
      throw new Error('Unexpected end of line');
    }

    if (token.type === 'number') {
      const value = parseInt(token.value, 10);
      position++;
      return { type: 'number', value };
    }

    throw new Error(
      `Expected number at position ${position}, got '${token.value}'`
    );
  }

  const ast = parseExpression();
  if (position < tokens.length) {
    throw new Error(
      `Unexpected token at end of input: ${tokens[position].value}`
    );
  }
  return ast;
}

export function evaluate(ast: ASTNode): number {
  if (ast.type === 'number') {
    return ast.value;
  }

  if (ast.type === 'binaryOp') {
    const leftValue = evaluate(ast.left);
    const rightValue = evaluate(ast.right);

    switch (ast.operator) {
      case '+':
        return leftValue + rightValue;
      case '-':
        return leftValue - rightValue;
      case '*':
        return leftValue * rightValue;
      case '/':
        return leftValue / rightValue;
    }
  }

  throw new Error(`Unknown AST node: ${JSON.stringify(ast)}`);
}

export function calculate(expression: string): number {
  const tokens = tokenize(expression);
  const ast = parse(tokens);
  return evaluate(ast);
}
