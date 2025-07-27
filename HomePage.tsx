import  CategoryBar from '../components/CategoryBar';
import VideoGrid from '../components/VideoGrid';
import { videos } from '../data/videos';

function HomePage() {
  return (
    <div className="py-4 px-4 md:px-6">
      <CategoryBar />
      <VideoGrid videos={videos} />
    </div>
  );
}

export default HomePage;
 