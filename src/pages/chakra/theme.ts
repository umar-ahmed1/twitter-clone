// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/700.css'

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#1D9BF0",
      700: "#71767B",
      800: "##2F3336",
      900: "#E7E9EA",
    },
  },
  fonts: {
    body: 'Open Sans, sans-serif'
  },
  styles:{
    global: () => ({
        body: {
            bg: 'black'
        }
    })
  },
  components: {

  }
})

