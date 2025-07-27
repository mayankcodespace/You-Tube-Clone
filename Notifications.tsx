import  { Bell, ThumbsUp, User, Video, MessageCircle } from 'lucide-react';
import { videos } from '../data/videos';

function NotificationItem({ 
  icon, 
  channel, 
  message, 
  time, 
  thumbnail 
}: { 
  icon: JSX.Element; 
  channel: string; 
  message: string; 
  time: string; 
  thumbnail: string;
}) {
  return (
    <div className="flex p-3 hover:bg-yt-light-black rounded-lg cursor-pointer">
      <div className="flex-shrink-0 mr-3">
        {icon}
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="font-medium">{channel}</p>
        <p className="text-sm text-yt-gray">{message}</p>
        <p className="text-xs text-yt-gray mt-1">{time}</p>
      </div>
      
      <div className="ml-3 w-20 h-12 bg-yt-light-black rounded overflow-hidden">
        <img 
          src={thumbnail} 
          alt="Thumbnail" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function Notifications() {
  return (
    <div className="py-4 px-4 md:px-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="bg-blue-500 p-3 rounded-full mr-4">
            <Bell size={24} color="white" />
          </div>
          <h1 className="text-2xl font-bold">Notifications</h1>
        </div>
        
        <button className="text-blue-400 text-sm font-medium">
          Mark all as read
        </button>
      </div>
      
      <div className="max-w-3xl">
        <div className="flex overflow-x-auto pb-2 mb-4 hide-scrollbar">
          <button className="px-4 py-1.5 bg-white text-black rounded-full text-sm mr-2 whitespace-nowrap">
            All
          </button>
          <button className="px-4 py-1.5 bg-yt-light-black hover:bg-yt-light-black/80 rounded-full text-sm mr-2 whitespace-nowrap">
            Mentions
          </button>
          <button className="px-4 py-1.5 bg-yt-light-black hover:bg-yt-light-black/80 rounded-full text-sm mr-2 whitespace-nowrap">
            Subscriptions
          </button>
          <button className="px-4 py-1.5 bg-yt-light-black hover:bg-yt-light-black/80 rounded-full text-sm whitespace-nowrap">
            Recommended
          </button>
        </div>
        
        <div className="bg-yt-light-black/50 rounded-lg">
          <h2 className="p-3 text-sm font-medium">Today</h2>
          
          <div className="space-y-1">
            <NotificationItem 
              icon={<Video size={24} className="text-red-500" />}
              channel={videos[0].channel.name}
              message="Uploaded a new video: How to Build a MayTube"
              time="2 hours ago"
              thumbnail={videos[0].thumbnail}
            />
            
            <NotificationItem 
              icon={<ThumbsUp size={24} className="text-blue-500" />}
              channel={videos[1].channel.name}
              message="Liked your comment: This is really helpful!"
              time="4 hours ago"
              thumbnail={videos[1].thumbnail}
            />
            
            <NotificationItem 
              icon={<User size={24} className="text-purple-500" />}
              channel={videos[2].channel.name}
              message="Started following you"
              time="5 hours ago"
              thumbnail={videos[2].thumbnail}
            />
          </div>
          
          <h2 className="p-3 text-sm font-medium">This week</h2>
          
          <div className="space-y-1">
            <NotificationItem 
              icon={<MessageCircle size={24} className="text-green-500" />}
              channel={videos[3].channel.name}
              message="Replied to your comment: Thanks for the feedback!"
              time="1 day ago"
              thumbnail={videos[3].thumbnail}
            />
            
            <NotificationItem 
              icon={<Video size={24} className="text-red-500" />}
              channel={videos[4].channel.name}
              message="Uploaded a new video: Advanced CSS Techniques"
              time="2 days ago"
              thumbnail={videos[4].thumbnail}
            />
            
            <NotificationItem 
              icon={<Video size={24} className="text-red-500" />}
              channel={videos[5].channel.name}
              message="Uploaded a new video: JavaScript Tips and Tricks"
              time="3 days ago"
              thumbnail={videos[5].thumbnail}
            />
            
            <NotificationItem 
              icon={<ThumbsUp size={24} className="text-blue-500" />}
              channel={videos[6].channel.name}
              message="Liked your video: React State Management"
              time="5 days ago"
              thumbnail={videos[6].thumbnail}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
 