import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title='CatPowered Ltd'
        description='Building software that scales.'
        canonical='https://catpowered.xyz'
        themeColor='#748B75'
        twitter={{
          site: '@catpowered_',
          cardType: 'summary_large_image',
          handle: '@catpowered_',
        }}
        openGraph={{
          type: 'website',
          url: 'https://catpowered.xyz',
          title: 'CatPowered Ltd',
          description: 'Building software that scales.',
          images: [
            {
              url: 'https://catpowered.xyz/og-image.png',
              width: 800,
              height: 600,
              alt: 'CatPowered Ltd OG Image',
            },
          ],
        }}
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
