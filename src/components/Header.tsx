import React from 'react'
import { Menu, Search } from 'lucide-react'

type HeaderProps = {
  title: string
  onMenuClick: () => void
  onSearchClick: () => void
}

const Header: React.FC<HeaderProps> = ({ title, onMenuClick, onSearchClick }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800">
      <button onClick={onMenuClick}>
        <Menu />
      </button>
      <h1 className="text-xl font-bold">{title}</h1>
      <button onClick={onSearchClick}>
        <Search />
      </button>
    </header>
  )
}

export default Header