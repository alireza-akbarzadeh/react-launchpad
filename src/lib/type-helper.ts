declare const brand: unique symbol;

export type Brand<T, TBrand> = T & { [brand]: TBrand };

export type Expect<T extends true> = T;
export type IsTrue<T extends true> = T;
export type IsFalse<T extends false> = T;
