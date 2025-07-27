import  { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  'All', 'Gaming', 'Music', 'Live', 'Mixes', 'News', 'Comedy', 'React', 'JavaScript',
  'Programming', 'Design', 'Algorithms', 'Podcasts', 'Recently uploaded', 'Watched',
  'New to you'
];

function CategoryBar() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollAmount = 200;

  const scrollLeft = () => {
    const newPosition = Math.max(0, scrollPosition - scrollAmount);
    setScrollPosition(newPosition);
    document.getElementById('category-scroll')!.scrollLeft = newPosition;
  };

  const scrollRight = () => {
    const container = document.getElementById('category-scroll')!;
    const newPosition = Math.min(
      container.scrollWidth - container.clientWidth,
      scrollPosition + scrollAmount
    );
    setScrollPosition(newPosition);
    container.scrollLeft = newPosition;
  };

  return (
    <div className="flex items-center mb-4 relative">
      <button 
        className="absolute left-0 z-10 bg-yt-black p-1.5 rounded-full hover:bg-yt-light-black"
        onClick={scrollLeft}
      >
        <ChevronLeft size={20} />
      </button>
      
      <div 
        id="category-scroll"
        className="flex overflow-x-auto py-2 px-10 hide-scrollbar"
        style={{ scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        <div className="flex space-x-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap text-sm ${
                activeCategory === category 
                  ? 'bg-white text-black' 
                  : 'bg-yt-light-black text-white'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <button 
        className="absolute right-0 z-10 bg-yt-black p-1.5 rounded-full hover:bg-yt-light-black"
        onClick={scrollRight}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

export default CategoryBar;
 