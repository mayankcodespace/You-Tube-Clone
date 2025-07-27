import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, MoreVertical, ThumbsDown, Trash } from 'lucide-react';
import { Video } from '../data/videos';

interface VideoCardProps {
  video: Video;
  horizontal?: boolean;
}

function VideoCard({ video, horizontal = false }: VideoCardProps) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/watch?v=${video.id}`);
  };

  return (
    <div 
      className={`group cursor-pointer ${horizontal ? 'flex space-x-4' : ''}`}
      onClick={handleClick}
    >
      <div className={`relative rounded-xl overflow-hidden ${horizontal ? 'w-40 h-24 flex-shrink-0' : 'aspect-video w-full'}`}>
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="video-time">{video.duration}</div>
      </div>
      
      <div className={`mt-3 flex ${horizontal ? 'mt-0' : ''}`}>
        {!horizontal && (
          <div className="w-9 h-9 rounded-full overflow-hidden mr-3 flex-shrink-0">
            <img 
              src={video.channel.avatar} 
              alt={video.channel.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold ${horizontal ? 'text-sm' : 'text-base'} line-clamp-2`}>
            {video.title}
          </h3>
          
          <div className="flex items-center mt-1">
            <p className="text-sm text-yt-gray">{video.channel.name}</p>
            {video.channel.verified && (
              <CheckCircle size={14} className="ml-1 text-yt-gray" />
            )}
          </div>
          
          <div className="text-sm text-yt-gray mt-0.5">
            <span>{video.views} views</span>
            <span className="mx-1">•</span>
            <span>{video.uploadedAt}</span>
          </div>
        </div>
        
        <div className="relative ml-1">
          <button 
            className="p-1 rounded-full opacity-0 group-hover:opacity-100"
            onClick={(e) => {
              e.stopPropagation();
              setShowMenu(!showMenu);
            }}
          >
            <MoreVertical size={16} />
          </button>
          
          {showMenu && (
            <div className="absolute right-0 top-6 w-48 bg-yt-light-black rounded-lg shadow-lg py-2 z-20">
              <button className="flex items-center w-full px-3 py-2 hover:bg-yt-black text-left text-sm">
                <Clock size={16} className="mr-2" />
                Save to Watch later
              </button>
              <button className="flex items-center w-full px-3 py-2 hover:bg-yt-black text-left text-sm">
                <ThumbsDown size={16} className="mr-2" />
                Not interested
              </button>
              <button className="flex items-center w-full px-3 py-2 hover:bg-yt-black text-left text-sm">
                <Trash size={16} className="mr-2" />
                Remove from history
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
 