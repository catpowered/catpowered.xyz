import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title='CatPowered Ltd'
        description='Building software that scales.'
        additionalLinkTags={[
          {
            rel: 'icon',
            type: "image/png",
            href: '/favicon.png',
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  )
}
