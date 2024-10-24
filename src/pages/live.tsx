import React from 'react'
import Head from 'next/head'

const Categories: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Categories - Anime Wallpaper</title>
        <meta name="description" content="Browse anime wallpaper categories" />
      </Head>
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      {/* Add your categories content here */}
    </div>
  )
}

export default Categories