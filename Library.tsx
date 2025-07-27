import  { Link } from 'react-router-dom';
import { Film, History, Clock, ThumbsUp, Play } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import { videos } from '../data/videos';

function Library() {
  return (
    <div className="py-4 px-4 md:px-6">
      <h1 className="text-2xl font-bold mb-6">Library</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-yt-light-black rounded-lg p-4">
          <div className="flex items-center mb-4">
            <History size={24} className="mr-3" />
            <h2 className="text-lg font-semibold">History</h2>
          </div>
          <div className="space-y-4">
            {videos.slice(0, 3).map((video) => (
              <VideoCard key={video.id} video={video} horizontal />
            ))}
          </div>
          <Link to="/history" className="block text-blue-400 mt-4 text-sm font-medium">See all</Link>
        </div>
        
        <div className="bg-yt-light-black rounded-lg p-4">
          <div className="flex items-center mb-4">
            <Clock size={24} className="mr-3" />
            <h2 className="text-lg font-semibold">Watch Later</h2>
          </div>
          <div className="space-y-4">
            {videos.slice(2, 5).map((video) => (
              <VideoCard key={video.id} video={video} horizontal />
            ))}
          </div>
          <Link to="/playlist?list=WL" className="block text-blue-400 mt-4 text-sm font-medium">See all</Link>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <ThumbsUp size={24} className="mr-3" />
          <h2 className="text-lg font-semibold">Liked Videos</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videos.slice(1, 5).map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
        <Link to="/playlist/liked" className="block text-blue-400 mt-4 text-sm font-medium">See all</Link>
      </div>
      
      <div>
        <div className="flex items-center mb-4">
          <Play size={24} className="mr-3" />
          <h2 className="text-lg font-semibold">Playlists</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-yt-light-black rounded-lg overflow-hidden">
            <div className="aspect-video relative flex items-center justify-center">
              <Film size={48} className="text-white opacity-50" />
            </div>
            <div className="p-3">
              <h3 className="font-semibold">Create new playlist</h3>
              <p className="text-sm text-yt-gray mt-1">Make a playlist of your favorite videos</p>
            </div>
          </div>
          
          {videos.slice(0, 3).map((video, index) => (
            <div key={index} className="bg-yt-light-black rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src={video.thumbnail} 
                  alt="Playlist cover" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-black/80 px-2 py-1 text-sm">
                  {index + 3} videos
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-semibold">Playlist {index + 1}</h3>
                <p className="text-sm text-yt-gray mt-1">Created 2 weeks ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Library;
 