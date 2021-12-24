
import type { AppProps } from 'next/app'
import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
  <div>
      <Component {...pageProps} />
      <footer className=""></footer>
  </div>
  )
}

export default MyApp
 