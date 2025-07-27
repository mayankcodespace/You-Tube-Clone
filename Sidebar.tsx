import  { useNavigate } from 'react-router-dom';
import { Home, Flame, Clock, ThumbsUp, Play, History, Film, HelpCircle, Settings, Flag, User, Video, Music, Gamepad2, Newspaper, Radio } from 'lucide-react';

interface SidebarProps {
  showSidebar: boolean;
}

interface MenuItem {
  icon: JSX.Element;
  label: string;
  path: string;
}

function Sidebar({ showSidebar }: SidebarProps) {
  const navigate = useNavigate();

  const mainMenuItems: MenuItem[] = [
    { icon: <Home size={20} />, label: 'Home', path: '/' },
    { icon: <Play size={20} />, label: 'Shorts', path: '/shorts' },
    { icon: <User size={20} />, label: 'Subscriptions', path: '/subscriptions' },
  ];

  const secondaryMenuItems: MenuItem[] = [
    { icon: <Film size={20} />, label: 'Library', path: '/library' },
    { icon: <History size={20} />, label: 'History', path: '/history' },
    { icon: <Clock size={20} />, label: 'Watch later', path: '/playlist?list=WL' },
    { icon: <ThumbsUp size={20} />, label: 'Liked videos', path: '/playlist/liked' },
  ];

  const exploreMenuItems: MenuItem[] = [
    { icon: <Flame size={20} />, label: 'Trending', path: '/trending' },
    { icon: <Music size={20} />, label: 'Music', path: '/music' },
    { icon: <Film size={20} />, label: 'Movies & TV', path: '/movies' },
    { icon: <Gamepad2 size={20} />, label: 'Gaming', path: '/gaming' },
    { icon: <Newspaper size={20} />, label: 'News', path: '/news' },
    { icon: <Radio size={20} />, label: 'Sports', path: '/sports' },
  ];

  const moreMenuItems: MenuItem[] = [
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
    { icon: <Flag size={20} />, label: 'Report history', path: '/reporthistory' },
    { icon: <HelpCircle size={20} />, label: 'Help', path: '/help' },
    { icon: <Flag size={20} />, label: 'Send feedback', path: '/feedback' },
  ];

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => (
      <li key={index}>
        <button
          className={`w-full flex items-center p-2 rounded-lg hover:bg-yt-light-black ${showSidebar ? 'justify-start' : 'justify-center'}`}
          onClick={() => navigate(item.path)}
        >
          <span className="flex-shrink-0">{item.icon}</span>
          {showSidebar && <span className="ml-5">{item.label}</span>}
        </button>
      </li>
    ));
  };

  return (
    <aside 
      className={`fixed top-[57px] left-0 h-[calc(100vh-57px)] overflow-y-auto bg-yt-black transition-all duration-300 z-10 ${
        showSidebar ? 'w-56' : 'w-20'
      }`}
    >
      <nav className="py-2">
        <ul className="space-y-1 px-2">
          {renderMenuItems(mainMenuItems)}
        </ul>

        {showSidebar && (
          <>
            <hr className="my-2 border-yt-light-black" />
            <ul className="space-y-1 px-2">
              {renderMenuItems(secondaryMenuItems)}
            </ul>

            <hr className="my-2 border-yt-light-black" />
            <h3 className="px-4 py-2 text-sm font-semibold">Explore</h3>
            <ul className="space-y-1 px-2">
              {renderMenuItems(exploreMenuItems)}
            </ul>

            <hr className="my-2 border-yt-light-black" />
            <h3 className="px-4 py-2 text-sm font-semibold">More from MayTube</h3>
            <ul className="space-y-1 px-2">
              {renderMenuItems(moreMenuItems)}
            </ul>
          </>
        )}
      </nav>
    </aside>
  );
}

export default Sidebar;
 