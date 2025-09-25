# Calculator

This project is a calculator that evaluates mathematical expressions. It is structured around a three-stage pipeline

## The Pipeline

### Tokenization
The input string is broken down into a sequence of tokens, such as numbers and operators.

### Parsing
The tokens are converted into an Abstract Syntax Tree (AST), which represents the expression's structure and operator precedence.

### Evaluation
The AST is traversed to compute the final result of the expression.

The current implementation supports addition, subtraction, multiplication, and division, and is designed to handle common error cases.

## Installation and usage

### Install deps
```
yarn && yarn install
```

### Run tests in the console
```
yarn test
```

### Run tests in the UI
```
yarn test:ui
```
