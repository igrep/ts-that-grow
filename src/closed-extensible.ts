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

type ExtendExpression = {
  plain: unknown;
  location: unknown;
  namespace: unknown;
};

type ExtendLiteral = {
  plain: object;
  location: { row: number; column: number };
  namespace: object;
};

type ExtendVariable = {
  plain: object;
  location: { row: number; column: number };
  namespace: { qualifier: string };
};

type ExtendSetVariable = ExtendVariable;

type ExtendFunc = ExtendLiteral;

type ExtendCallFunc = ExtendFunc;
