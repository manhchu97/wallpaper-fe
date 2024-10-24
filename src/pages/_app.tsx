import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import SearchModal from '../components/SearchModal'

function MyApp({ Component, pageProps }: AppProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const router = useRouter()

  const handleSearch = (query: string) => {
    console.log('Searching for:', query)
    // Implement your search logic here
    setIsSearchOpen(false)
  }

  const activeTab = router.pathname === '/' ? 'Explorer' : router.pathname.slice(1)

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          title={activeTab}
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
          onSearchClick={() => setIsSearchOpen(true)}
        />
        <main className="flex-1 overflow-y-auto p-4">
          <Component {...pageProps} />
        </main>
        <Footer activeTab={activeTab} />
      </div>
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSearch={handleSearch}
      />
    </div>
  )
}

export default MyApp