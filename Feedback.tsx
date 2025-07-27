import  { useState } from 'react';
import { Flag, Check } from 'lucide-react';

function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [category, setCategory] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  
  const categories = [
    'Video player', 'Comments', 'Recommendations', 'Search', 
    'Notifications', 'Account settings', 'Mobile app', 'Other'
  ];
  
  return (
    <div className="py-4 px-4 md:px-6">
      <div className="flex items-center mb-6">
        <div className="bg-purple-500 p-3 rounded-full mr-4">
          <Flag size={24} color="white" />
        </div>
        <h1 className="text-2xl font-bold">Send Feedback</h1>
      </div>
      
      <div className="max-w-3xl">
        {isSubmitted ? (
          <div className="bg-yt-light-black rounded-lg p-8 flex flex-col items-center justify-center text-center">
            <div className="bg-green-500 p-4 rounded-full mb-4">
              <Check size={32} color="white" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Thanks for your feedback!</h2>
            <p className="text-yt-gray mb-6">Your feedback helps us improve MayTube for everyone.</p>
            <button 
              className="px-6 py-2 bg-blue-500 rounded-full text-sm font-semibold"
              onClick={() => setIsSubmitted(false)}
            >
              Send more feedback
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-yt-light-black rounded-lg p-6">
            <div className="mb-6">
              <label className="block mb-2 font-medium">Feedback category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 bg-yt-black rounded-lg outline-none"
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 font-medium">
                Describe your feedback or issue
              </label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full p-3 bg-yt-black rounded-lg outline-none min-h-[150px]"
                placeholder="Please provide as much detail as possible..."
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 font-medium">Include screenshot (optional)</label>
              <div className="border-2 border-dashed border-yt-gray/50 rounded-lg p-8 text-center">
                <p className="text-yt-gray mb-4">Drag and drop files here or click to upload</p>
                <button 
                  type="button" 
                  className="px-4 py-2 bg-yt-black rounded-full text-sm"
                >
                  Choose file
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Include system info</span>
              </label>
              
              <div>
                <button 
                  type="button" 
                  className="px-4 py-2 mr-2 text-sm"
                  onClick={() => {
                    setFeedback('');
                    setCategory('');
                  }}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-6 py-2 bg-blue-500 rounded-full text-sm font-semibold"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Feedback;
 