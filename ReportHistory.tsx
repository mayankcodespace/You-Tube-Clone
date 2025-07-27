import  { Flag } from 'lucide-react';

function ReportHistory() {
  return (
    <div className="py-4 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <div className="bg-red-500 p-3 rounded-full mr-4">
          <Flag size={24} color="white" />
        </div>
        <h1 className="text-2xl font-bold">Report History</h1>
      </div>
      
      <div className="max-w-3xl">
        <p className="mb-6 text-yt-gray">Videos or comments that you've reported for review will appear here.</p>
        
        <div className="bg-yt-light-black rounded-lg p-8 flex flex-col items-center justify-center text-center">
          <Flag size={64} className="mb-4 text-yt-gray" />
          <h2 className="text-xl font-semibold mb-2">No reports yet</h2>
          <p className="text-yt-gray">Reports that you make will show up here to help you track them.</p>
        </div>
      </div>
    </div>
  );
}

export default ReportHistory;
 