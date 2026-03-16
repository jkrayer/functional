type Nil = undefined | null;

export const isNil = (x: unknown): x is Nil => x === null || x === undefined;
