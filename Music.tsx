import  VideoCard from '../components/VideoCard';
import { Music as MusicIcon } from 'lucide-react';
import { musicVideos } from '../data/videos';

function Music() {
  return (
    <div className="py-4 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <div className="bg-red-500 p-3 rounded-full mr-4">
          <MusicIcon size={24} color="white" />
        </div>
        <h1 className="text-2xl font-bold">Music</h1>
      </div>
      
      <div className="space-y-4">
        {musicVideos.map((video) => (
          <div key={video.id} className="border-b border-yt-light-black pb-4 last:border-0">
            <VideoCard video={video} horizontal />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Music;
 