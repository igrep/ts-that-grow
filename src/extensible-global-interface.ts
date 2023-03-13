export type Expression<Descriptor extends keyof ExtendExpression = "plain"> =
  | Literal<Descriptor>
  | Variable<Descriptor>
  | SetVariable<Descriptor>
  | Func<Descriptor>
  | CallFunc<Descriptor>;

export type Literal<Descriptor extends keyof ExtendLiteral = "plain"> = {
  type: "Literal";
  value: number;
} & ExtendLiteral[Descriptor];

export type Variable<Descriptor extends keyof ExtendVariable = "plain"> = {
  type: "Variable";
  name: string;
} & ExtendVariable[Descriptor];

export type SetVariable<Descriptor extends keyof ExtendSetVariable = "plain"> =
  {
    type: "SetVariable";
    name: string;
    value: Expression<Descriptor>;
  } & ExtendSetVariable[Descriptor];

export type Func<Descriptor extends keyof ExtendFunc = "plain"> = {
  type: "Func";
  argumentName: string;
  body: Expression<Descriptor>;
} & ExtendFunc[Descriptor];

export type CallFunc<Descriptor extends keyof ExtendCallFunc = "plain"> = {
  type: "CallFunc";
  function: Expression<Descriptor>;
  argument: Expression<Descriptor>;
} & ExtendCallFunc[Descriptor];

declare global {
  interface ExtendExpression {
    plain: object;
  }
  interface ExtendLiteral {
    plain: object;
  }
  interface ExtendVariable {
    plain: object;
  }
  interface ExtendSetVariable {
    plain: object;
  }
  interface ExtendFunc {
    plain: object;
  }
  interface ExtendCallFunc {
    plain: object;
  }
}
