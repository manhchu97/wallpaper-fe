import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Home, Grid, Play, Heart } from 'lucide-react'

const Footer: React.FC = () => {
  const router = useRouter()
  const tabs = [
    { name: 'Explorer', icon: Home, href: '/' },
    { name: 'Categories', icon: Grid, href: '/categories' },
    { name: 'Live', icon: Play, href: '/live' },
    { name: 'Favorites', icon: Heart, href: '/favorites' },
  ]

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around">
        {tabs.map((tab) => (
          <li key={tab.name}>
            <Link href={tab.href}>
              <div className={`flex flex-col items-center ${router.pathname === tab.href ? 'text-yellow-500' : 'text-gray-400'}`}>
                <tab.icon size={24} />
                <span className="text-xs mt-1">{tab.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Footer