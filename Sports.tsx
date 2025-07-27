import  VideoCard from '../components/VideoCard';
import { Radio } from 'lucide-react';
import { sportsVideos } from '../data/videos';

function Sports() {
  return (
    <div className="py-4 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <div className="bg-purple-500 p-3 rounded-full mr-4">
          <Radio size={24} color="white" />
        </div>
        <h1 className="text-2xl font-bold">Sports</h1>
      </div>
      
      <div className="space-y-4">
        {sportsVideos.map((video) => (
          <div key={video.id} className="border-b border-yt-light-black pb-4 last:border-0">
            <VideoCard video={video} horizontal />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sports;
 