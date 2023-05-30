import { Inter, JetBrains_Mono } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })
const jetbrains = JetBrains_Mono({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main
        className={`w-full h-full flex flex-col justify-between p-12 ${inter.className}`}
      >
        <div className={"flex flex-row items-center space-x-4"}>
          <img className='h-16 w-auto' src='/logo.svg' alt='CatPowered Ltd Logo made of 3 overlapping hexagons with varying opacity to create 3D effect' />
          <div>
            <h1 className={`text-4xl font-bold text-gray-800 ${jetbrains.className}`}>CatPowered Ltd</h1>
            <h2 className='text-gray-600'>Building software that scales.</h2>
          </div>
        </div>
        <div className="flex flex-col w-full space-y-2 sm:space-y-0 sm:flex-row sm:justify-between">
          <div className="flex flex-row space-x-4">
            <a className='text-gray-700 hover:text-gray-800 hover:underline' href="mailto:contact@catpowered.xyz">Email</a>
            <a className='text-gray-700 hover:text-gray-800 hover:underline' href="https://twitter.com/catpowered_">Twitter</a>
            <a className='text-gray-700 hover:text-gray-800 hover:underline' href="https://github.com/catpowered">Github</a>
          </div>
          <p className='text-gray-600'>&copy; 2023 CatPowered Ltd</p>
        </div>
      </main>
    </>
  )
}
