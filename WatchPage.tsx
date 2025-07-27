import  { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle, ThumbsUp, ThumbsDown, Share, Download, Clock, Flag } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import VideoCard from '../components/VideoCard';
import CommentSection from '../components/CommentSection';
import { videos } from '../data/videos';

function WatchPage() {
  const [showDescription, setShowDescription] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const videoId = searchParams.get('v') || '1';
  
  const video = videos.find(v => v.id === videoId) || videos[0];
  const relatedVideos = videos.filter(v => v.id !== videoId);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [videoId]);
  
  return (
    <div className="py-4 px-4 md:px-6 lg:grid lg:grid-cols-3 lg:gap-6">
      <div className="lg:col-span-2">
        <VideoPlayer />
        
        <div className="mt-4">
          <h1 className="text-xl font-bold">{video.title}</h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img 
                  src={video.channel.avatar} 
                  alt={video.channel.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="ml-3">
                <div className="flex items-center">
                  <h3 className="font-semibold">{video.channel.name}</h3>
                  {video.channel.verified && (
                    <CheckCircle size={14} className="ml-1 text-yt-gray" />
                  )}
                </div>
                <p className="text-sm text-yt-gray">8.5M subscribers</p>
              </div>
              
              <button 
                className={`ml-4 px-4 py-2 rounded-full text-sm font-semibold ${
                  isSubscribed 
                    ? 'bg-yt-light-black text-white hover:bg-yt-light-black/80'
                    : 'bg-white text-black hover:bg-white/90'
                }`}
                onClick={() => setIsSubscribed(!isSubscribed)}
              >
                {isSubscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>
            
            <div className="flex items-center space-x-2 mt-3 sm:mt-0">
              <div className="flex items-center bg-yt-light-black rounded-full overflow-hidden">
                <button className="flex items-center px-4 py-2 hover:bg-yt-black/20">
                  <ThumbsUp size={18} className="mr-2" />
                  <span>25K</span>
                </button>
                <div className="h-6 w-[1px] bg-yt-black"></div>
                <button className="px-4 py-2 hover:bg-yt-black/20">
                  <ThumbsDown size={18} />
                </button>
              </div>
              
              <button className="flex items-center bg-yt-light-black rounded-full px-4 py-2 hover:bg-yt-black/20">
                <Share size={18} className="mr-2" />
                <span>Share</span>
              </button>
              
              <button className="flex items-center bg-yt-light-black rounded-full px-4 py-2 hover:bg-yt-black/20">
                <Download size={18} className="mr-2" />
                <span>Download</span>
              </button>
              
              <button className="flex items-center bg-yt-light-black rounded-full p-2 hover:bg-yt-black/20">
                <Flag size={18} />
              </button>
            </div>
          </div>
          
          <div 
            className="mt-4 bg-yt-light-black rounded-lg p-3 cursor-pointer"
            onClick={() => setShowDescription(!showDescription)}
          >
            <div className="flex items-center text-sm text-yt-gray">
              <span>{video.views} views</span>
              <span className="mx-1">•</span>
              <span>{video.uploadedAt}</span>
            </div>
            
            <div className={`mt-2 text-sm ${showDescription ? '' : 'line-clamp-2'}`}>
              {video.description}
            </div>
            
            {!showDescription && (
              <button className="mt-1 text-sm font-semibold">Show more</button>
            )}
            {showDescription && (
              <button className="mt-1 text-sm font-semibold">Show less</button>
            )}
          </div>
          
          <CommentSection />
        </div>
      </div>
      
      <div className="mt-6 lg:mt-0">
        <div className="flex items-center justify-between mb-2">
          <div className="flex space-x-2">
            <button className="px-3 py-1.5 bg-yt-light-black rounded-lg text-sm font-semibold">All</button>
            <button className="px-3 py-1.5 bg-yt-light-black rounded-lg text-sm">Related</button>
            <button className="px-3 py-1.5 bg-yt-light-black rounded-lg text-sm">From {video.channel.name}</button>
          </div>
          
          <button className="flex items-center text-sm hover:bg-yt-light-black p-2 rounded-full">
            <Clock size={18} />
          </button>
        </div>
        
        <div className="space-y-4">
          {relatedVideos.slice(0, 8).map((video) => (
            <VideoCard key={video.id} video={video} horizontal />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WatchPage;
 