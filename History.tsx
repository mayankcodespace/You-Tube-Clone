import  { History as HistoryIcon, Clock, ThumbsUp } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import { videos } from '../data/videos';

function History() {
  return (
    <div className="py-4 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <div className="bg-blue-500 p-3 rounded-full mr-4">
          <HistoryIcon size={24} color="white" />
        </div>
        <h1 className="text-2xl font-bold">History</h1>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Today</h2>
            <button className="text-sm text-blue-400">Clear all watch history</button>
          </div>
          <div className="space-y-4">
            {videos.slice(0, 4).map((video) => (
              <div key={video.id} className="border-b border-yt-light-black pb-4 last:border-0">
                <VideoCard video={video} horizontal />
              </div>
            ))}
          </div>
          
          <div className="mt-6 mb-4">
            <h2 className="text-lg font-semibold">Yesterday</h2>
          </div>
          <div className="space-y-4">
            {videos.slice(4, 7).map((video) => (
              <div key={video.id} className="border-b border-yt-light-black pb-4 last:border-0">
                <VideoCard video={video} horizontal />
              </div>
            ))}
          </div>
        </div>
        
        <div className="md:w-1/4">
          <h2 className="text-lg font-semibold mb-4">History type</h2>
          <div className="space-y-2 mb-6">
            <button className="w-full flex items-center p-2 rounded-lg bg-yt-light-black hover:bg-yt-black/20">
              <HistoryIcon size={20} className="mr-3" />
              <span>Watch history</span>
            </button>
            <button className="w-full flex items-center p-2 rounded-lg hover:bg-yt-light-black">
              <Clock size={20} className="mr-3" />
              <span>Community</span>
            </button>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-base font-medium mb-2">Watch history</h3>
            <button className="w-full text-left p-2 text-sm text-blue-400 hover:bg-yt-light-black rounded-lg">Manage all history</button>
            <button className="w-full text-left p-2 text-sm text-blue-400 hover:bg-yt-light-black rounded-lg">Clear all watch history</button>
            <button className="w-full text-left p-2 text-sm text-blue-400 hover:bg-yt-light-black rounded-lg">Pause watch history</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
 