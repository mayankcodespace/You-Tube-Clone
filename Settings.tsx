import  { useState } from 'react';
import { Settings as SettingsIcon, User, Bell, Play, Globe, Shield, Monitor } from 'lucide-react';

function Settings() {
  const [activeTab, setActiveTab] = useState('appearance');

  const tabs = [
    { id: 'appearance', label: 'Appearance', icon: <Monitor size={20} /> },
    { id: 'account', label: 'Account', icon: <User size={20} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={20} /> },
    { id: 'playback', label: 'Playback and performance', icon: <Play size={20} /> },
    { id: 'language', label: 'Language', icon: <Globe size={20} /> },
    { id: 'privacy', label: 'Privacy', icon: <Shield size={20} /> },
  ];

  return (
    <div className="py-4 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <div className="bg-gray-500 p-3 rounded-full mr-4">
          <SettingsIcon size={24} color="white" />
        </div>
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <ul className="space-y-1">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  className={`w-full flex items-center p-3 rounded-lg text-left ${
                    activeTab === tab.id 
                      ? 'bg-yt-light-black' 
                      : 'hover:bg-yt-light-black'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="mr-3">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="md:w-3/4">
          {activeTab === 'appearance' && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Appearance</h2>
              
              <div className="mb-6">
                <h3 className="text-base font-medium mb-2">Theme</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="theme" className="mr-3" defaultChecked />
                    <span>Dark theme</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="theme" className="mr-3" />
                    <span>Light theme</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="theme" className="mr-3" />
                    <span>Use device theme</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="text-base font-medium mb-2">Sidebar</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="sidebar" className="mr-3" />
                    <span>Expanded</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="sidebar" className="mr-3" defaultChecked />
                    <span>Collapse when browsing</span>
                  </label>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'account' && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Account</h2>
              
              <div className="flex items-center mb-6 p-4 bg-yt-light-black rounded-lg">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 text-white">
                  <User size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">Your Account</h3>
                  <p className="text-sm text-yt-gray">example@email.com</p>
                </div>
                <button className="ml-auto px-4 py-2 bg-blue-500 rounded-full text-sm font-semibold">
                  Manage your Google Account
                </button>
              </div>
              
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-yt-light-black text-left">
                  <span>Account details and privacy</span>
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-yt-light-black text-left">
                  <span>Your data in MayTube</span>
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-yt-light-black text-left">
                  <span>Advanced settings</span>
                </button>
              </div>
            </div>
          )}
          
          {activeTab !== 'appearance' && activeTab !== 'account' && (
            <div>
              <h2 className="text-lg font-semibold mb-4">{tabs.find(t => t.id === activeTab)?.label}</h2>
              <div className="bg-yt-light-black rounded-lg p-6 flex flex-col items-center justify-center">
                <div className="text-5xl mb-4">🚧</div>
                <p className="text-center">This settings page is under construction</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;
 