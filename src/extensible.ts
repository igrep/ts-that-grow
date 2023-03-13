export interface ExtendExpression {
  Literal: unknown;
  Variable: unknown;
  SetVariable: unknown;
  Func: unknown;
  CallFunc: unknown;
}

export type Expression<Extend extends ExtendExpression = ExtendExpression> =
  | Literal<Extend>
  | Variable<Extend>
  | SetVariable<Extend>
  | Func<Extend>
  | CallFunc<Extend>;

export type Literal<Extend extends ExtendExpression = ExtendExpression> = {
  type: "Literal";
  value: number;
} & Extend["Literal"];

export type Variable<Extend extends ExtendExpression = ExtendExpression> = {
  type: "Variable";
  name: string;
} & Extend["Variable"];

export type SetVariable<Extend extends ExtendExpression = ExtendExpression> = {
  type: "SetVariable";
  name: string;
  value: Expression<Extend>;
} & Extend["SetVariable"];

export type Func<Extend extends ExtendExpression = ExtendExpression> = {
  type: "Func";
  argumentName: string;
  body: Expression<Extend>;
} & Extend["Func"];

export type CallFunc<Extend extends ExtendExpression = ExtendExpression> = {
  type: "CallFunc";
  function: Expression<Extend>;
  argument: Expression<Extend>;
} & Extend["CallFunc"];
