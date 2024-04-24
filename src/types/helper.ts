export type OverrideProps<T, TOverridden> = Omit<T, keyof TOverridden> &
  TOverridden;
