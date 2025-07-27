import  { useState } from 'react';
import { ArrowDown, ArrowUp, ThumbsUp, ThumbsDown, MoreVertical } from 'lucide-react';

const COMMENTS = [
  {
    id: 1,
    user: 'User One',
    text: 'This is an amazing video! I learned so much from this content, thanks for sharing.',
    likes: 243,
    time: '2 days ago',
    replies: [
      {
        id: 11,
        user: 'User Two',
        text: 'I agree completely!',
        likes: 12,
        time: '1 day ago'
      }
    ]
  },
  {
    id: 2,
    user: 'User Three',
    text: 'Could you make a follow-up video on this topic? I have so many questions!',
    likes: 189,
    time: '1 week ago',
    replies: []
  },
  {
    id: 3,
    user: 'User Four',
    text: "I've been subscribed for years and your content keeps getting better and better!",
    likes: 542,
    time: '3 days ago',
    replies: [
      {
        id: 31,
        user: 'User Five',
        text: 'Same here! Been following since the beginning.',
        likes: 89,
        time: '2 days ago'
      },
      {
        id: 32,
        user: 'User Six',
        text: 'The quality is definitely improving with each video.',
        likes: 45,
        time: '1 day ago'
      }
    ]
  }
];

function CommentSection() {
  const [commentText, setCommentText] = useState('');
  const [showReplies, setShowReplies] = useState<Record<number, boolean>>({});
  const [sortBy, setSortBy] = useState('top');
  const commentCount = COMMENTS.reduce((acc, comment) => acc + 1 + comment.replies.length, 0);

  const toggleReplies = (commentId: number) => {
    setShowReplies(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  };

  return (
    <div className="mt-6">
      <div className="flex items-center mb-6">
        <h3 className="font-semibold">{commentCount} Comments</h3>
        <button 
          className="flex items-center ml-6 text-sm"
          onClick={() => setSortBy(sortBy === 'top' ? 'newest' : 'top')}
        >
          <ArrowDown size={16} className="mr-2" />
          Sort by: {sortBy === 'top' ? 'Top comments' : 'Newest first'}
        </button>
      </div>

      <div className="flex items-start mb-8">
        <div className="w-10 h-10 rounded-full bg-yt-light-black"></div>
        <div className="ml-3 flex-1">
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full bg-transparent border-b border-yt-light-black pb-1 focus:outline-none focus:border-blue-500"
          />
          {commentText && (
            <div className="flex justify-end mt-2 space-x-2">
              <button 
                className="px-3 py-1.5 text-sm"
                onClick={() => setCommentText('')}
              >
                Cancel
              </button>
              <button className="px-3 py-1.5 text-sm bg-blue-500 rounded-full">
                Comment
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-6">
        {COMMENTS.map(comment => (
          <div key={comment.id} className="group">
            <div className="flex">
              <div className="w-10 h-10 rounded-full bg-yt-light-black"></div>
              <div className="ml-3 flex-1">
                <div className="flex items-center">
                  <h4 className="font-semibold text-sm">{comment.user}</h4>
                  <span className="ml-2 text-xs text-yt-gray">{comment.time}</span>
                </div>
                <p className="mt-1 text-sm">{comment.text}</p>
                <div className="flex items-center mt-2">
                  <button className="p-1.5 rounded-full hover:bg-yt-light-black">
                    <ThumbsUp size={16} />
                  </button>
                  <span className="text-xs mx-1">{comment.likes}</span>
                  <button className="p-1.5 rounded-full hover:bg-yt-light-black">
                    <ThumbsDown size={16} />
                  </button>
                  <button className="ml-2 px-2 py-1 text-xs">Reply</button>
                  <button className="p-1.5 rounded-full hover:bg-yt-light-black opacity-0 group-hover:opacity-100 ml-auto">
                    <MoreVertical size={16} />
                  </button>
                </div>

                {comment.replies.length > 0 && (
                  <div className="mt-2">
                    <button 
                      className="flex items-center text-blue-500 text-sm font-medium"
                      onClick={() => toggleReplies(comment.id)}
                    >
                      {showReplies[comment.id] ? <ArrowUp size={16} className="mr-1" /> : <ArrowDown size={16} className="mr-1" />}
                      {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
                    </button>

                    {showReplies[comment.id] && (
                      <div className="mt-3 space-y-4">
                        {comment.replies.map(reply => (
                          <div key={reply.id} className="flex group">
                            <div className="w-8 h-8 rounded-full bg-yt-light-black"></div>
                            <div className="ml-3 flex-1">
                              <div className="flex items-center">
                                <h4 className="font-semibold text-sm">{reply.user}</h4>
                                <span className="ml-2 text-xs text-yt-gray">{reply.time}</span>
                              </div>
                              <p className="mt-1 text-sm">{reply.text}</p>
                              <div className="flex items-center mt-2">
                                <button className="p-1.5 rounded-full hover:bg-yt-light-black">
                                  <ThumbsUp size={16} />
                                </button>
                                <span className="text-xs mx-1">{reply.likes}</span>
                                <button className="p-1.5 rounded-full hover:bg-yt-light-black">
                                  <ThumbsDown size={16} />
                                </button>
                                <button className="ml-2 px-2 py-1 text-xs">Reply</button>
                                <button className="p-1.5 rounded-full hover:bg-yt-light-black opacity-0 group-hover:opacity-100 ml-auto">
                                  <MoreVertical size={16} />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentSection;
 