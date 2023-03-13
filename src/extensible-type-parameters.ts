export type Expression<
  ExtendLiteral,
  ExtendVariable,
  ExtendSetVariable,
  ExtendFunc,
  ExtendCallFunc,
> =
  | Literal<ExtendLiteral>
  | Variable<ExtendVariable>
  | SetVariable<
      ExtendLiteral,
      ExtendVariable,
      ExtendSetVariable,
      ExtendFunc,
      ExtendCallFunc
    >
  | Func<
      ExtendLiteral,
      ExtendVariable,
      ExtendSetVariable,
      ExtendFunc,
      ExtendCallFunc
    >
  | CallFunc<
      ExtendLiteral,
      ExtendVariable,
      ExtendSetVariable,
      ExtendFunc,
      ExtendCallFunc
    >;

export type Literal<ExtendLiteral> = {
  type: "Literal";
  value: number;
} & ExtendLiteral;

export type Variable<ExtendVariable> = {
  type: "Variable";
  name: string;
} & ExtendVariable;

export type SetVariable<
  ExtendLiteral,
  ExtendVariable,
  ExtendSetVariable,
  ExtendFunc,
  ExtendCallFunc,
> = {
  type: "SetVariable";
  name: string;
  value: Expression<
    ExtendLiteral,
    ExtendVariable,
    ExtendSetVariable,
    ExtendFunc,
    ExtendCallFunc
  >;
} & ExtendSetVariable;

export type Func<
  ExtendLiteral,
  ExtendVariable,
  ExtendSetVariable,
  ExtendFunc,
  ExtendCallFunc,
> = {
  type: "Func";
  argumentName: string;
  body: Expression<
    ExtendLiteral,
    ExtendVariable,
    ExtendSetVariable,
    ExtendFunc,
    ExtendCallFunc
  >;
} & ExtendFunc;

export type CallFunc<
  ExtendLiteral,
  ExtendVariable,
  ExtendSetVariable,
  ExtendFunc,
  ExtendCallFunc,
> = {
  type: "CallFunc";
  function: Expression<
    ExtendLiteral,
    ExtendVariable,
    ExtendSetVariable,
    ExtendFunc,
    ExtendCallFunc
  >;
  argument: Expression<
    ExtendLiteral,
    ExtendVariable,
    ExtendSetVariable,
    ExtendFunc,
    ExtendCallFunc
  >;
} & ExtendCallFunc;
