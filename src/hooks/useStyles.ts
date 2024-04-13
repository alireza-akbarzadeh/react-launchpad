import { CSSProperties } from 'react';

const makeUseStyled = <TTheme = {}>() => {
  const useStyled = (func: (theme: TTheme) => CSSProperties) => ({} as CSSProperties);

  return useStyled;
};

interface MyTheme {
  color: {
    primary: string;
  };
  fontSize: {
    small: string;
  };
}

export const useStyled = makeUseStyled<MyTheme>();

