import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, Mic, Video, Bell, User, Upload, X, ArrowLeft } from 'lucide-react';
import MayTubeLogo from './MayTubeLogo';

interface HeaderProps {
  toggleSidebar: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

function Header({ toggleSidebar, searchQuery, setSearchQuery }: HeaderProps) {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/results?search_query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-yt-black flex items-center justify-between h-14 px-4 z-20">
      {showMobileSearch ? (
        <div className="flex items-center w-full">
          <button 
            className="p-2 mr-2 rounded-full hover:bg-yt-light-black"
            onClick={() => setShowMobileSearch(false)}
          >
            <ArrowLeft size={24} />
          </button>
          <form onSubmit={handleSearch} className="flex flex-1">
            <div className="flex flex-1 items-center border border-yt-light-black rounded-l-full overflow-hidden bg-yt-black">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 px-4 bg-transparent outline-none"
                autoFocus
              />
              {searchQuery && (
                <button 
                  type="button"
                  className="px-2"
                  onClick={() => setSearchQuery('')}
                >
                  <X size={20} />
                </button>
              )}
            </div>
            <button 
              type="submit"
              className="bg-yt-light-black px-5 rounded-r-full"
            >
              <Search size={20} />
            </button>
          </form>
        </div>
      ) : (
        <>
          <div className="flex items-center">
            <button 
              onClick={toggleSidebar}
              className="p-2 mr-2 rounded-full hover:bg-yt-light-black"
            >
              <Menu size={24} />
            </button>
            <Link to="/">
              <MayTubeLogo />
            </Link>
          </div>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-4 hidden md:flex">
            <div className="flex flex-1 items-center border border-yt-light-black rounded-l-full overflow-hidden bg-yt-black">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 px-4 bg-transparent outline-none"
              />
              {searchQuery && (
                <button 
                  type="button"
                  className="px-2"
                  onClick={() => setSearchQuery('')}
                >
                  <X size={20} />
                </button>
              )}
            </div>
            <button 
              type="submit"
              className="bg-yt-light-black px-5 rounded-r-full"
            >
              <Search size={20} />
            </button>
            <button 
              type="button"
              className="p-2 ml-2 rounded-full bg-yt-light-black"
            >
              <Mic size={20} />
            </button>
          </form>

          <div className="flex items-center">
            {/* Mobile Search Button */}
            <button 
              className="p-2 mr-2 rounded-full hover:bg-yt-light-black md:hidden"
              onClick={() => setShowMobileSearch(true)}
            >
              <Search size={24} />
            </button>
            
            <Link to="/studio/upload" className="p-2 mr-2 rounded-full hover:bg-yt-light-black">
              <Video size={24} />
            </Link>
            
            <Link to="/notifications" className="p-2 mr-2 rounded-full hover:bg-yt-light-black">
              <Bell size={24} />
            </Link>
            
            <Link to="/profile" className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white">
              <User size={20} />
            </Link>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
 