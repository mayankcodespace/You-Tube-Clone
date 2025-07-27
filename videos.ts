export  interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  views: string;
  uploadedAt: string;
  duration: string;
  description: string;
}

export const videos: Video[] = [
  {
    id: '1',
    title: 'How to Build a MayTube with React and Tailwind',
    thumbnail: 'https://images.unsplash.com/photo-1521302200778-33500795e128?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHx5b3V0dWJlJTIwdHJlbmRpbmclMjB2aWRlb3N8ZW58MHx8fHwxNzQ5NDUzMzUxfDA&ixlib=rb-4.1.0&fit=fillmax&h=450&w=800',
    channel: {
      name: 'ReactMaster',
      avatar: 'https://i.pravatar.cc/100?img=1',
      verified: true,
    },
    views: '2.4M',
    uploadedAt: '2 weeks ago',
    duration: '18:24',
    description: 'Learn how to build a MayTube using React and Tailwind CSS. This tutorial covers everything from the sidebar navigation to the video player.'
  },
  {
    id: '2',
    title: 'Top 10 Mobile App Trends in 2023',
    thumbnail: 'https://images.unsplash.com/photo-1541877944-ac82a091518a?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHx5b3V0dWJlJTIwdHJlbmRpbmclMjB2aWRlb3N8ZW58MHx8fHwxNzQ5NDUzMzUxfDA&ixlib=rb-4.1.0&fit=fillmax&h=450&w=800',
    channel: {
      name: 'TechInsider',
      avatar: 'https://i.pravatar.cc/100?img=2',
      verified: true,
    },
    views: '1.2M',
    uploadedAt: '3 days ago',
    duration: '12:45',
    description: 'Explore the top mobile app development trends that will dominate 2023. From AI integration to cross-platform development frameworks.'
  },
  {
    id: '3',
    title: 'A Day in the Life of a Software Engineer',
    thumbnail: 'https://images.unsplash.com/photo-1523474438810-b04a2480633c?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHx5b3V0dWJlJTIwdHJlbmRpbmclMjB2aWRlb3N8ZW58MHx8fHwxNzQ5NDUzMzUxfDA&ixlib=rb-4.1.0&fit=fillmax&h=450&w=800',
    channel: {
      name: 'CodeLife',
      avatar: 'https://i.pravatar.cc/100?img=3',
      verified: false,
    },
    views: '3.7M',
    uploadedAt: '1 month ago',
    duration: '24:15',
    description: 'Follow me through a typical day as a software engineer at a tech startup. From morning standup to coding sessions and team collaboration.'
  },
  {
    id: '4',
    title: 'Building Responsive UIs with Modern CSS',
    thumbnail: 'https://images.unsplash.com/photo-1548328928-34db1c5fcc1f?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHx5b3V0dWJlJTIwdHJlbmRpbmclMjB2aWRlb3N8ZW58MHx8fHwxNzQ5NDUzMzUxfDA&ixlib=rb-4.1.0&fit=fillmax&h=450&w=800',
    channel: {
      name: 'CSSNinja',
      avatar: 'https://i.pravatar.cc/100?img=4',
      verified: true,
    },
    views: '982K',
    uploadedAt: '2 months ago',
    duration: '15:38',
    description: 'Learn how to create responsive user interfaces using modern CSS techniques like Grid, Flexbox, and Custom Properties.'
  },
  {
    id: '5',
    title: 'The Complete Guide to Web Animations',
    thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHx5b3V0dWJlJTIwdHJlbmRpbmclMjB2aWRlb3N8ZW58MHx8fHwxNzQ5NDUzMzUxfDA&ixlib=rb-4.1.0&fit=fillmax&h=450&w=800',
    channel: {
      name: 'AnimationPro',
      avatar: 'https://i.pravatar.cc/100?img=5',
      verified: true,
    },
    views: '1.8M',
    uploadedAt: '5 days ago',
    duration: '22:09',
    description: 'Master web animations with this comprehensive guide covering CSS animations, keyframes, and the Web Animations API.'
  },
  {
    id: '6',
    title: 'JavaScript Tips and Tricks You Need to Know',
    thumbnail: 'https://images.unsplash.com/photo-1523474438810-b04a2480633c?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHx5b3V0dWJlJTIwdHJlbmRpbmclMjB2aWRlb3N8ZW58MHx8fHwxNzQ5NDUzMzUxfDA&ixlib=rb-4.1.0&fit=fillmax&h=450&w=800',
    channel: {
      name: 'JSWizard',
      avatar: 'https://i.pravatar.cc/100?img=6',
      verified: false,
    },
    views: '2.1M',
    uploadedAt: '3 weeks ago',
    duration: '14:27',
    description: 'Discover advanced JavaScript tips and tricks that will make you a more efficient developer. Includes practical code examples.'
  },
  {
    id: '7',
    title: 'The Rise of AI in Modern Web Development',
    thumbnail: 'https://images.unsplash.com/photo-1548328928-34db1c5fcc1f?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHx5b3V0dWJlJTIwdHJlbmRpbmclMjB2aWRlb3N8ZW58MHx8fHwxNzQ5NDUzMzUxfDA&ixlib=rb-4.1.0&fit=fillmax&h=450&w=800',
    channel: {
      name: 'TechFuturist',
      avatar: 'https://i.pravatar.cc/100?img=7',
      verified: true,
    },
    views: '1.5M',
    uploadedAt: '4 days ago',
    duration: '19:52',
    description: 'Explore how artificial intelligence is transforming web development through intelligent interfaces, chatbots, and personalization.'
  },
  {
    id: '8',
    title: 'TypeScript Fundamentals for React Developers',
    thumbnail: 'https://images.unsplash.com/photo-1541877944-ac82a091518a?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHx5b3V0dWJlJTIwdHJlbmRpbmclMjB2aWRlb3N8ZW58MHx8fHwxNzQ5NDUzMzUxfDA&ixlib=rb-4.1.0&fit=fillmax&h=450&w=800',
    channel: {
      name: 'ReactTypeScript',
      avatar: 'https://i.pravatar.cc/100?img=8',
      verified: true,
    },
    views: '872K',
    uploadedAt: '1 week ago',
    duration: '27:15',
    description: 'Learn the fundamentals of TypeScript specifically tailored for React developers. Covers types, interfaces, generics, and more.'
  }
];

export const trendingVideos = videos.slice(0, 4);
export const musicVideos = videos.slice(2, 6);
export const gamingVideos = videos.slice(1, 5);
export const newsVideos = videos.slice(3, 7);
export const sportsVideos = videos.slice(0, 4);
export const likedVideos = videos.slice(1, 6);
export const watchLaterVideos = videos.slice(2, 5);
 