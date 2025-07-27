import  { useState } from 'react';
import { Play, ThumbsUp, ThumbsDown, MessageCircle, Share, MoreVertical } from 'lucide-react';
import { videos } from '../data/videos';

function Shorts() {
  const [currentShort, setCurrentShort] = useState(0);
  
  const handleNext = () => {
    setCurrentShort((prev) => (prev + 1) % videos.length);
  };
  
  const handlePrev = () => {
    setCurrentShort((prev) => (prev - 1 + videos.length) % videos.length);
  };
  
  return (
    <div className="py-4 px-4 md:px-0 flex justify-center h-[calc(100vh-57px)]">
      <div className="relative max-w-sm w-full">
        <div 
          className="absolute inset-0 flex justify-between items-center z-10 px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center"
            onClick={handlePrev}
          >
            <Play size={20} className="transform rotate-180" />
          </button>
          
          <button 
            className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center"
            onClick={handleNext}
          >
            <Play size={20} />
          </button>
        </div>
        
        <div className="relative h-full aspect-[9/16] bg-black rounded-xl overflow-hidden">
          <img 
            src={videos[currentShort].thumbnail} 
            alt={videos[currentShort].title}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <h2 className="font-semibold mb-1">{videos[currentShort].title}</h2>
            <p className="text-sm text-yt-gray">{videos[currentShort].channel.name}</p>
          </div>
          
          <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-6">
            <button className="flex flex-col items-center">
              <div className="w-10 h-10 bg-yt-light-black rounded-full flex items-center justify-center mb-1">
                <ThumbsUp size={20} />
              </div>
              <span className="text-xs">24K</span>
            </button>
            
            <button className="flex flex-col items-center">
              <div className="w-10 h-10 bg-yt-light-black rounded-full flex items-center justify-center mb-1">
                <ThumbsDown size={20} />
              </div>
              <span className="text-xs">Dislike</span>
            </button>
            
            <button className="flex flex-col items-center">
              <div className="w-10 h-10 bg-yt-light-black rounded-full flex items-center justify-center mb-1">
                <MessageCircle size={20} />
              </div>
              <span className="text-xs">420</span>
            </button>
            
            <button className="flex flex-col items-center">
              <div className="w-10 h-10 bg-yt-light-black rounded-full flex items-center justify-center mb-1">
                <Share size={20} />
              </div>
              <span className="text-xs">Share</span>
            </button>
            
            <button className="flex flex-col items-center">
              <div className="w-10 h-10 bg-yt-light-black rounded-full flex items-center justify-center mb-1">
                <MoreVertical size={20} />
              </div>
              <span className="text-xs">More</span>
            </button>
            
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img 
                src={videos[currentShort].thumbnail} 
                alt="Audio source"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shorts;
 