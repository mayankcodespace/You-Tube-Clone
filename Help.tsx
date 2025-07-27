import  { HelpCircle, Search, MessageCircle, Flag, Settings } from 'lucide-react';

const helpCategories = [
  {
    title: 'Getting started',
    icon: <Settings size={24} />,
    items: ['Creating an account', 'Navigating MayTube', 'Watching videos', 'Managing recommendations']
  },
  {
    title: 'Fix a problem',
    icon: <Flag size={24} />,
    items: ['Video playback issues', 'Account access', 'Troubleshoot connection problems', 'Report abuse or policy violations']
  },
  {
    title: 'Manage your account',
    icon: <Settings size={24} />,
    items: ['Update your account settings', 'Manage privacy settings', 'Manage notifications', 'Linked accounts']
  }
];

function Help() {
  return (
    <div className="py-4 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <div className="bg-blue-500 p-3 rounded-full mr-4">
          <HelpCircle size={24} color="white" />
        </div>
        <h1 className="text-2xl font-bold">Help</h1>
      </div>
      
      <div className="max-w-5xl">
        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Search for help topics"
            className="w-full py-3 px-4 pl-12 bg-yt-light-black rounded-full outline-none"
          />
          <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yt-gray" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {helpCategories.map((category, index) => (
            <div key={index} className="bg-yt-light-black rounded-lg p-4">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-yt-black rounded-full mr-3">
                  {category.icon}
                </div>
                <h2 className="text-lg font-semibold">{category.title}</h2>
              </div>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <button className="text-left hover:text-blue-400 w-full">{item}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-yt-light-black rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Need more help?</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="flex items-center bg-yt-black rounded-lg p-4 flex-1 hover:bg-yt-black/70">
              <MessageCircle size={24} className="mr-3" />
              <div className="text-left">
                <h3 className="font-medium">Contact us</h3>
                <p className="text-sm text-yt-gray">Get support from our team</p>
              </div>
            </button>
            
            <button className="flex items-center bg-yt-black rounded-lg p-4 flex-1 hover:bg-yt-black/70">
              <HelpCircle size={24} className="mr-3" />
              <div className="text-left">
                <h3 className="font-medium">Community help</h3>
                <p className="text-sm text-yt-gray">Ask the MayTube community</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help;
 