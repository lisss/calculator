import { parse, tokenize, type ASTNode } from './calculator.js';

function printAST(node: ASTNode): string {
  if (node.type === 'number') {
    return `${node.value}`;
  }

  if (node.type === 'binaryOp') {
    return `(${node.operator} ${printAST(node.left)} ${printAST(node.right)})`;
  }

  return 'unknown';
}

export function debugAST(expression: string) {
  const tokens = tokenize(expression);
  const ast = parse(tokens);
  return printAST(ast);
}
