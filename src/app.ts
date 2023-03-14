import { Expression } from "./extensible.js";

type MyExpression = Expression<{
  Literal: object;
  Variable: { qualifier: string };
  SetVariable: { qualifier: string };
  Func: object;
  CallFunc: object;
}>;

// A trivial example transformation of an Expression to a MyExpression
function setNamespaceFoo(expression: Expression): MyExpression {
  switch (expression.type) {
    case "Literal":
      return expression;
    case "Variable":
      return {
        ...expression,
        qualifier: "foo",
      };
    case "SetVariable":
      return {
        ...expression,
        value: setNamespaceFoo(expression.value),
        qualifier: "foo",
      };
    case "Func":
      return {
        ...expression,
        body: setNamespaceFoo(expression.body),
      };
    case "CallFunc":
      return {
        ...expression,
        function: setNamespaceFoo(expression.function),
        argument: setNamespaceFoo(expression.argument),
      };
  }
}

// In this fictious language, a program is just a sequence of expressions.
type Program = Expression[];

type MyProgram = MyExpression[];

function setNamespaceFooToProgram(statements: Program): MyProgram {
  return statements.map((statement) => setNamespaceFoo(statement));
}

// In pseudocode:
//   func = (arg) => 42;
//   x = func(y);
const statements: Program = [
  {
    type: "SetVariable",
    name: "func",
    value: {
      type: "Func",
      argumentName: "arg",
      body: {
        type: "Literal",
        value: 42,
      },
    },
  },
  {
    type: "SetVariable",
    name: "x",
    value: {
      type: "CallFunc",
      function: {
        type: "Variable",
        name: "func",
      },
      argument: {
        type: "Variable",
        name: "y",
      },
    },
  },
];

console.log(JSON.stringify(setNamespaceFooToProgram(statements), undefined, 4));
