# Calculator Challenge

`calculator.ts` contains a scaled down programming language that currently supports simple math expressions (addition and subtraction).

It uses a 3-stage pipeline:

- **Tokenize**: String → Tokens
- **Parse**: Tokens → Abstract Syntax Tree
- **Evaluate**: AST → Number

It's purposefully kept simple to focus on the core concepts, so the tokenizer for example does not support negative or float point numbers.

We'd like you to extend the language with multiplication and division as well as handle errors gracefully. See the tests for a few examples. Feel free to change the code as you see fit but keep the overall structure and approach.

The aim of the exercise is for us to get to know how you think and prioritize, not to create a perfect parser. We think it's reasonable to spend ~2 hours and it's likely you'll not finish solving every edge case or improvement, but we'd like you to think about them and explain your choices as well as outline what you would do if you had more time.

When you feel finished, you can fork this stack blitz and share it with us via the "secret, accessible via link" option or use the GitHub integration to create a private repository and invite `oskardamkjaer` as a collaborator.

Please reach out if anything about the exercise is unclear, we hope you enjoy the challenge and best of luck!
