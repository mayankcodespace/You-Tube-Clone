import  VideoCard from '../components/VideoCard';
import { Newspaper } from 'lucide-react';
import { newsVideos } from '../data/videos';

function News() {
  return (
    <div className="py-4 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <div className="bg-yellow-500 p-3 rounded-full mr-4">
          <Newspaper size={24} color="white" />
        </div>
        <h1 className="text-2xl font-bold">News</h1>
      </div>
      
      <div className="space-y-4">
        {newsVideos.map((video) => (
          <div key={video.id} className="border-b border-yt-light-black pb-4 last:border-0">
            <VideoCard video={video} horizontal />
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
 