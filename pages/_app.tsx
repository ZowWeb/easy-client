import '../styles/globals.css'

import type { AppProps } from 'next/app'
import styled, { DefaultTheme, ThemeProvider } from 'styled-components'
import { ConfigProvider, ThemeConfig } from 'antd'

import theme from 'styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ConfigProvider theme={theme as ThemeConfig}>
        <Component {...pageProps} />
      </ConfigProvider>
    </ThemeProvider>
  )
}
