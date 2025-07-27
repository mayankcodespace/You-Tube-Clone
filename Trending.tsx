import  VideoCard from '../components/VideoCard';
import { Flame } from 'lucide-react';
import { trendingVideos } from '../data/videos';

function Trending() {
  return (
    <div className="py-4 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <div className="bg-yt-red p-3 rounded-full mr-4">
          <Flame size={24} color="white" />
        </div>
        <h1 className="text-2xl font-bold">Trending</h1>
      </div>
      
      <div className="space-y-4">
        {trendingVideos.map((video) => (
          <div key={video.id} className="border-b border-yt-light-black pb-4 last:border-0">
            <VideoCard video={video} horizontal />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
 