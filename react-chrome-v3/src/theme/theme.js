// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// const accessibleColorMap = {
//   yellow: {
//     bg: 'yellow.400',
//     color: 'black',
//     hoverBg: 'yellow.500',
//     activeBg: 'yellow.600',
//   },
//   cyan: {
//     bg: 'cyan.400',
//     color: 'black',
//     hoverBg: 'cyan.500',
//     activeBg: 'cyan.600',
//   },
// };

// const variantdarkSolidDark = (props) => {
//   const { colorScheme: c } = props;

//   if (c === 'gray') {
//     const bg = mode(`gray.100`, `whiteAlpha.200`)(props);

//     return {
//       bg,
//       _hover: {
//         bg: mode(`gray.200`, `whiteAlpha.300`)(props),
//         _disabled: {
//           bg,
//         },
//       },
//       _active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) },
//     };
//   }

//   const {
//     bg = `${c}.800`,
//     color = 'white',
//     hoverBg = `${c}.700`,
//     activeBg = `${c}.700`,
//   } = accessibleColorMap[c] ?? {};

//   const background = mode(bg, `${c}.200`)(props);

//   return {
//     bg: background,
//     color: mode(color, `gray.800`)(props),
//     _hover: {
//       bg: mode(hoverBg, `${c}.300`)(props),
//       _disabled: {
//         bg: background,
//       },
//     },
//     _active: { bg: mode(activeBg, `${c}.400`)(props) },
//   };
// };

const theme = extendTheme({
  // components: {
  //   Button: {
  //     variants: {
  //       'solid-dark': variantdarkSolidDark,
  //     },
  //   },
  // },
  styles: {
    global: {
      'html, body': {
        fontSize: '16px',
      },
    },
  },
  colors: {
    darkpurple: {
      50: '#efedfc',
      100: '#cfcbe7',
      200: '#afa8d4',
      300: '#8f85c3',
      400: '#7064b2',
      500: '#574a98',
      600: '#443a77',
      700: '#302955',
      800: '#1d1834',
      900: '#0b0715',
    },
  },
  // fonts: {
  //   body: 'Roboto',
  //   heading: 'Ubuntu',
  // },
  config,
});

export default theme;
