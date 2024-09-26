import { css } from '@emotion/react'

const text = {
  title: {
    largeM: css`
      font-size: 2rem;
      font-weight: 600;
      line-height: 2.4rem;
    `,
    mediumB: css`
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.8rem;
    `,
    mediumR: css`
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.8rem;
    `,
    smallB: css`
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.5rem;
    `,
    smallR: css`
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 1.5rem;
    `,
  },
  body: {
    largeB: css`
      font-size: 1.125rem;
      font-weight: 600;
      line-height: 1.35rem;
    `,
    largeR: css`
      font-size: 1.125rem;
      font-weight: 400;
      line-height: 1.35rem;
    `,
    mediumB: css`
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.2rem;
    `,
    mediumR: css`
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.2rem;
    `,
  },
  caption1: {
    mediumB: css`
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 1.225rem;
    `,
    mediumR: css`
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.225rem;
    `,
  },
  caption2: {
    mediumB: css`
      font-size: 0.75rem;
      font-weight: 600;
      line-height: 1.05rem;
    `,
    mediumR: css`
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1.05rem;
    `,
  },
} as const

const color = {
  main: {
    100: '#F9AA38',
    200: '#FAB859',
    300: '#FBC67A',
    400: '#FCD59C',
    500: '#FDE3BD',
    600: '#FDE3BD',
    700: '#FEF1DE',
    800: '#FFF8EF',
    900: '#FFFFFF',
  },
  main2: {
    100: '#AEE0E1',
    200: '#B7E3E4',
    300: '#C0E7E8',
    400: '#C9EAEB',
    500: '#D2EEEE',
    600: '#DBF1F2',
    700: '#E4F5F5',
    800: '#EDF8F8',
    900: '#FFFFFF',
  },
  gray: {
    100: '#434343',
    200: '#474747',
    300: '#7B7B7B',
    400: '#A7A7A7',
    500: '#ABABAB',
    600: '#BDBDBD',
    700: '#D5D5D5',
    800: '#ECECEC',
    900: '#F9F9F9',
  },
  system: {
    100: '#d62828',
    200: '#DE5353',
    300: '#E67E7E',
    400: '#EFA9A9',
    500: '#F7D4D4',
    600: '#FBEAEA',
    700: '#FFFFFF',
  },
  system2: {
    100: '#4AB519',
    200: '#68C13F',
    300: '#86CE66',
    400: '#A5DA8C',
    500: '#C3E6B2',
    600: '#E1F3D9',
    700: '#FFFFFF',
  },
  white: '#FFFFFF',
  black: '#121212',
} as const

const theme = {
  text,
  color,
} as const

export default theme
