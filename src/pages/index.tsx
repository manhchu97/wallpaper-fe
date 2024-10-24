import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  const categories = [
    { name: 'Baryon Mode', image: 'https://testXPull.b-cdn.net/o_Ae_Y7jw_G_84c05cbec7.webp' },
    { name: 'Soul Eater', image: 'https://testXPull.b-cdn.net/o_Ae_Y7jw_G_84c05cbec7.webp' },
    { name: "Miss Kobayashi's Dragon Maid", image: 'https://testXPull.b-cdn.net/o_Ae_Y7jw_G_84c05cbec7.webp' },
    { name: 'Touken Ranbu', image: 'https://testXPull.b-cdn.net/o_Ae_Y7jw_G_84c05cbec7.webp' },
    { name: 'Unknown Anime 1', image: 'https://testXPull.b-cdn.net/thumbnail_o_Ae_Y7jw_G_84c05cbec7.webp' },
    { name: 'Unknown Anime 2', image: 'https://testXPull.b-cdn.net/thumbnail_o_Ae_Y7jw_G_84c05cbec7.webp' },
  ]

  return (
    <div>
      <Head>
        <title>Anime Wallpaper</title>
        <meta name="description" content="Explore anime wallpapers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
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