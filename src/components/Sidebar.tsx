import React from 'react'
import { Home, Crown, Info, Shield, FileText } from 'lucide-react'

type SidebarProps = {
  isOpen: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const animeList = [
    'AI', 'Akami Ga Kill', 'Akatsuki No Yona', 'Aldnoah Zero', 'Angel Beats', 
    'Angel Of Death', 'Anime Kawaii', 'Another', 'Ao No Exorcist', 'Asobi Asobase'
  ]

  return (
    <div 
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 space-y-4">
          <div className="flex items-center space-x-4 text-yellow-500">
            <Home />
            <span className="font-bold">Home</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-400">
            <Crown />
            <span>Remove Ads and more</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-400">
            <Info />
            <span>About us</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-400">
            <Shield />
            <span>Privacy policy</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-400">
            <FileText />
            <span>Terms & Conditions</span>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {animeList.map((anime, index) => (
            <div key={index} className="flex items-center space-x-4 mb-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              <span>{anime}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar