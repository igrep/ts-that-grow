export type Expression = Literal | Variable | SetVariable | Func | CallFunc;

export type Literal = {
  type: "Literal";
  value: number;
};

export type Variable = {
  type: "Variable";
  name: string;
};

export type SetVariable = {
  type: "SetVariable";
  name: string;
  value: Expression;
};

export type Func = {
  type: "Func";
  argumentName: string;
  body: Expression;
};

export type CallFunc = {
  type: "CallFunc";
  function: Expression;
  argument: Expression;
};
