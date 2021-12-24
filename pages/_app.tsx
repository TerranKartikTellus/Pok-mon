
import type { AppProps } from 'next/app'
import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
  <div className='bg-neutral-900 text-neutral-50 min-w-full min-h-screen m-0 p-0'>
      <Component {...pageProps} />
      <footer className=""></footer>
  </div>
  )
}

export default MyApp
 