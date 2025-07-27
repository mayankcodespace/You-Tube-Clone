import  { Filter } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import { videos } from '../data/videos';

interface SearchResultsProps {
  searchQuery: string;
}

function SearchResults({ searchQuery }: SearchResultsProps) {
  // In a real app, we would filter videos based on searchQuery
  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.channel.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="py-4 px-4 md:px-6">
      <div className="flex items-center mb-4">
        <button className="flex items-center p-2 rounded-lg hover:bg-yt-light-black text-sm">
          <Filter size={18} className="mr-2" />
          <span>Filters</span>
        </button>
      </div>
      
      {filteredVideos.length > 0 ? (
        <div className="space-y-4">
          {filteredVideos.map((video) => (
            <div key={video.id} className="border-b border-yt-light-black pb-4 last:border-0">
              <VideoCard video={video} horizontal />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No results found for "{searchQuery}"</h2>
          <p className="text-yt-gray">Try different keywords or check the spelling</p>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
 