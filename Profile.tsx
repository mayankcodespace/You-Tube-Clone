import  { User, Settings, CheckCircle, Video, ThumbsUp, Film } from 'lucide-react';
import { videos } from '../data/videos';
import VideoCard from '../components/VideoCard';

function Profile() {
  return (
    <div className="py-4 px-4 md:px-6">
      <div className="mb-8">
        <div className="h-32 bg-gradient-to-r from-purple-600 to-blue-500 rounded-t-lg"></div>
        <div className="flex flex-col md:flex-row items-center md:items-end -mt-12 px-6 pb-4">
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-purple-500 text-white border-4 border-yt-black">
            <User size={48} />
          </div>
          
          <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <h1 className="text-2xl font-bold">Your Channel</h1>
              <CheckCircle size={16} className="ml-1 text-yt-gray" />
            </div>
            <p className="text-yt-gray">@yourchannel • 1.2M subscribers</p>
          </div>
          
          <div className="mt-4 md:mt-0 md:ml-auto">
            <button className="px-4 py-2 bg-yt-red rounded-full text-sm font-semibold">
              Create
            </button>
            <button className="ml-2 p-2 rounded-full bg-yt-light-black">
              <Settings size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex overflow-x-auto pb-2 hide-scrollbar">
          <button className="px-6 py-2 text-white border-b-2 border-white font-medium whitespace-nowrap">
            Home
          </button>
          <button className="px-6 py-2 text-yt-gray hover:text-white whitespace-nowrap">
            Videos
          </button>
          <button className="px-6 py-2 text-yt-gray hover:text-white whitespace-nowrap">
            Shorts
          </button>
          <button className="px-6 py-2 text-yt-gray hover:text-white whitespace-nowrap">
            Live
          </button>
          <button className="px-6 py-2 text-yt-gray hover:text-white whitespace-nowrap">
            Playlists
          </button>
          <button className="px-6 py-2 text-yt-gray hover:text-white whitespace-nowrap">
            Community
          </button>
          <button className="px-6 py-2 text-yt-gray hover:text-white whitespace-nowrap">
            Channels
          </button>
          <button className="px-6 py-2 text-yt-gray hover:text-white whitespace-nowrap">
            About
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="flex items-center mb-4">
            <Video size={24} className="mr-3" />
            <h2 className="text-lg font-semibold">Your videos</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {videos.slice(0, 4).map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
        
        <div>
          <div className="bg-yt-light-black rounded-lg p-4 mb-4">
            <h2 className="text-lg font-semibold mb-3">About</h2>
            <p className="text-sm text-yt-gray mb-3">
              Welcome to my channel! I create content about technology, programming, and digital creativity.
            </p>
            <div className="flex items-center text-sm text-yt-gray">
              <Film size={16} className="mr-2" />
              <span>Joined Aug 2018</span>
            </div>
            <div className="flex items-center text-sm text-yt-gray mt-1">
              <ThumbsUp size={16} className="mr-2" />
              <span>5.2M total likes</span>
            </div>
          </div>
          
          <div className="bg-yt-light-black rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3">Featured channels</h2>
            <div className="space-y-3">
              {videos.slice(0, 3).map((video, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src={video.channel.avatar} 
                      alt={video.channel.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{video.channel.name}</p>
                    <p className="text-xs text-yt-gray">{index + 1}M subscribers</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
 