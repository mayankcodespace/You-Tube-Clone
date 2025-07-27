import  { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import WatchPage from './pages/WatchPage';
import SearchResults from './pages/SearchResults';
import Shorts from './pages/Shorts';
import Subscriptions from './pages/Subscriptions';
import Library from './pages/Library';
import History from './pages/History';
import WatchLater from './pages/WatchLater';
import LikedVideos from './pages/LikedVideos';
import Trending from './pages/Trending';
import Music from './pages/Music';
import Movies from './pages/Movies';
import Gaming from './pages/Gaming';
import News from './pages/News';
import Sports from './pages/Sports';
import Settings from './pages/Settings';
import ReportHistory from './pages/ReportHistory';
import Help from './pages/Help';
import Feedback from './pages/Feedback';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Header 
          toggleSidebar={toggleSidebar} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <div className="flex flex-1 overflow-hidden">
          <Sidebar showSidebar={showSidebar} />
          
          <main className={`flex-1 overflow-y-auto pt-[57px] ${
            showSidebar ? 'ml-56' : 'ml-20'
          } transition-all duration-300`}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/watch" element={<WatchPage />} />
              <Route path="/results" element={<SearchResults searchQuery={searchQuery} />} />
              <Route path="/shorts" element={<Shorts />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/library" element={<Library />} />
              <Route path="/history" element={<History />} />
              <Route path="/playlist" element={<WatchLater />} />
              <Route path="/playlist/liked" element={<LikedVideos />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="/music" element={<Music />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/gaming" element={<Gaming />} />
              <Route path="/news" element={<News />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/reporthistory" element={<ReportHistory />} />
              <Route path="/help" element={<Help />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
 