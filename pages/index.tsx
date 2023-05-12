import { Inter, JetBrains_Mono } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })
const jetbrains = JetBrains_Mono({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>CatPowered</title>
      </Head>
      <main
        className={`w-full h-full flex flex-col justify-between p-12 ${inter.className}`}
      >
        <div>
          <h1 className={`text-4xl font-bold text-gray-800 ${jetbrains.className}`}>CatPowered LLC</h1>
          <p className='text-gray-600'>Building software that scales.</p>
        </div>
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-row space-x-4">
            <a className='text-gray-700 hover:text-gray-800 hover:underline' href="mailto:contact@catpowered.xyz">Email</a>
            <a className='text-gray-700 hover:text-gray-800 hover:underline' href="https://twitter.com/catpowered_">Twitter</a>
            <a className='text-gray-700 hover:text-gray-800 hover:underline' href="https://github.com/catpowered">Github</a>
          </div>
          <p className='text-gray-600'>&copy; 2023 CatPowered LLC</p>
        </div>
      </main>
    </>
  )
}
