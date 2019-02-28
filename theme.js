import { notes as theme } from 'mdx-deck/themes';

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  font: 'Roboto, sans-serif',
  // custom colors
  colors: {
    ...theme.colors,
    // text: '#f0f',
    // background: 'black',
    // link: '#0ff',
  },
  css: {
    ...theme.css,
    li: {
      textAlign: 'left',
      '@media screen and (min-width:64em)': {
        fontSize: '40px',
      }
    },
  },
}