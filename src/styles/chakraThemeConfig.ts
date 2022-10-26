import { extendTheme } from "@chakra-ui/react";


export const ChakraThemeConfig = extendTheme({
  styles: {

    global: {
      body: {
        bg: '$gray900',
        color: '$gray100'
      }
    }
  },
})