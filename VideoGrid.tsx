import  VideoCard from './VideoCard';
import { Video } from '../data/videos';

interface VideoGridProps {
  videos: Video[];
  title?: string;
}

function VideoGrid({ videos, title }: VideoGridProps) {
  return (
    <div className="pb-8">
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default VideoGrid;
 