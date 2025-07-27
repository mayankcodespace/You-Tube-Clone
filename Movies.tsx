import  VideoCard from '../components/VideoCard';
import { Film } from 'lucide-react';
import { videos } from '../data/videos';

function Movies() {
  return (
    <div className="py-4 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <div className="bg-blue-500 p-3 rounded-full mr-4">
          <Film size={24} color="white" />
        </div>
        <h1 className="text-2xl font-bold">Movies & TV</h1>
      </div>
      
      <div className="space-y-4">
        {videos.slice(2, 6).map((video) => (
          <div key={video.id} className="border-b border-yt-light-black pb-4 last:border-0">
            <VideoCard video={video} horizontal />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
 