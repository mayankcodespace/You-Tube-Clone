import  { ThumbsUp } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import { likedVideos } from '../data/videos';

function LikedVideos() {
  return (
    <div className="py-4 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <div className="bg-blue-500 p-3 rounded-full mr-4">
          <ThumbsUp size={24} color="white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Liked Videos</h1>
          <p className="text-yt-gray">{likedVideos.length} videos</p>
        </div>
      </div>
      
      <div className="space-y-4">
        {likedVideos.map((video) => (
          <div key={video.id} className="border-b border-yt-light-black pb-4 last:border-0">
            <VideoCard video={video} horizontal />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LikedVideos;
 