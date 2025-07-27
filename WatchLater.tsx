import  { Clock } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import { watchLaterVideos } from '../data/videos';

function WatchLater() {
  return (
    <div className="py-4 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <div className="bg-gray-500 p-3 rounded-full mr-4">
          <Clock size={24} color="white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Watch Later</h1>
          <p className="text-yt-gray">{watchLaterVideos.length} videos</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {watchLaterVideos.map((video) => (
          <div key={video.id} className="border-b border-yt-light-black pb-4 last:border-0">
            <VideoCard video={video} horizontal />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchLater;
 