import { Expression } from "./extensible-global-interface.js";

declare global {
  interface ExtendExpression {
    namespace: unknown;
  }
  interface ExtendLiteral {
    namespace: object;
  }
  interface ExtendVariable {
    namespace: { qualifier: string };
  }
  interface ExtendSetVariable {
    namespace: { qualifier: string };
  }
  interface ExtendFunc {
    namespace: object;
  }
  interface ExtendCallFunc {
    namespace: object;
  }
}

type MyExpression = Expression<"namespace">;

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

console.log(
  setNamespaceFoo(
    // 例として用意した値はChatGPTに作ってもらいました。
    // JavaScript風の擬似コードで表すとこんな感じらしい:
    //   x = ((y) => 42)(z);
    {
      type: "SetVariable",
      name: "x",
      value: {
        type: "CallFunc",
        function: {
          type: "Func",
          argumentName: "y",
          body: {
            type: "Literal",
            value: 42,
          },
        },
        argument: {
          type: "Variable",
          name: "z",
        },
      },
    },
  ),
);
