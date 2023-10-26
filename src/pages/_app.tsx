import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import "../styles/styles.css"
import SmallCentered from '@/components/footer'
import WithSubnavigation from '@/components/navigation'

export default function App({ Component, pageProps }: AppProps) {
  return <><ChakraProvider>
    <WithSubnavigation />
  <Component {...pageProps} />
  <SmallCentered />
</ChakraProvider></>
}