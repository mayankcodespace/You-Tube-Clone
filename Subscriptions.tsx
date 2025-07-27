import  CategoryBar from '../components/CategoryBar';
import VideoGrid from '../components/VideoGrid';
import { videos } from '../data/videos';

function Subscriptions() {
  return (
    <div className="py-4 px-4 md:px-6">
      <div className="flex overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex space-x-4">
          {videos.map((video, index) => (
            <div key={index} className="flex flex-col items-center w-20 flex-shrink-0">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-1 p-0.5 ring-2 ring-red-500">
                <img 
                  src={video.channel.avatar} 
                  alt={video.channel.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <p className="text-xs text-center truncate w-full">{video.channel.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="border-t border-yt-light-black pt-4">
        <CategoryBar />
        <VideoGrid videos={videos} title="Today" />
      </div>
      
      <div className="mt-8">
        <VideoGrid videos={videos.slice(3, 7)} title="Yesterday" />
      </div>
      
      <div className="mt-8">
        <VideoGrid videos={videos.slice(1, 5)} title="This week" />
      </div>
    </div>
  );
}

export default Subscriptions;
 