import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  const categories = [
    { name: 'Baryon Mode', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Soul Eater', image: '/placeholder.svg?height=300&width=300' },
    { name: "Miss Kobayashi's Dragon Maid", image: '/placeholder.svg?height=300&width=300' },
    { name: 'Touken Ranbu', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Unknown Anime 1', image: '/placeholder.svg?height=300&width=300' },
    { name: 'Unknown Anime 2', image: '/placeholder.svg?height=300&width=300' },
  ]

  return (
    <div>
      <Head>
        <title>Anime Wallpaper</title>
        <meta name="description" content="Explore anime wallpapers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-2 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={category.image}
              alt={category.name}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2">
              <p className="text-sm">{category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home