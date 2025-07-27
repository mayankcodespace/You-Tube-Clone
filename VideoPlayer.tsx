import  { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Settings, SkipBack, SkipForward, Maximize, Minimize } from 'lucide-react';

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const updateTime = () => {
      setCurrentTime(video.currentTime);
      setDuration(video.duration);
    };
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleVolumeChange = () => setVolume(video.volume);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    
    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('volumechange', handleVolumeChange);
    video.addEventListener('ended', handleEnded);
    
    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('volumechange', handleVolumeChange);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);
  
  useEffect(() => {
    if (showControls) {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      
      controlsTimeoutRef.current = setTimeout(() => {
        if (isPlaying) {
          setShowControls(false);
        }
      }, 3000);
    }
    
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [showControls, isPlaying]);
  
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };
  
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    
    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };
  
  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    
    const newTime = parseFloat(e.target.value);
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };
  
  const skipBackward = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.currentTime = Math.max(0, video.currentTime - 10);
  };
  
  const skipForward = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.currentTime = Math.min(video.duration, video.currentTime + 10);
  };
  
  const toggleFullScreen = () => {
    if (!videoContainerRef.current) return;
    
    if (!document.fullscreenElement) {
      videoContainerRef.current.requestFullscreen().catch(err => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    } else {
      document.exitFullscreen();
    }
    
    setIsFullScreen(!isFullScreen);
  };
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  return (
    <div 
      ref={videoContainerRef}
      className="relative bg-black w-full aspect-video rounded-lg overflow-hidden"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      onMouseMove={() => setShowControls(true)}
    >
      <video
        ref={videoRef}
        className="w-full h-full"
        poster="https://images.unsplash.com/photo-1521302200778-33500795e128?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHx5b3V0dWJlJTIwdHJlbmRpbmclMjB2aWRlb3N8ZW58MHx8fHwxNzQ5NDUzMzUxfDA&ixlib=rb-4.1.0&fit=fillmax&h=450&w=800"
        onClick={togglePlay}
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {!isPlaying && !currentTime && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
            className="bg-yt-red text-white rounded-full p-4 opacity-90 hover:opacity-100"
            onClick={togglePlay}
          >
            <Play size={24} fill="white" />
          </button>
        </div>
      )}
      
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-2">
          <div className="flex items-center mb-1">
            <input
              type="range"
              className="w-full h-1 bg-gray-600 rounded appearance-none cursor-pointer"
              min="0"
              max={duration || 100}
              value={currentTime}
              onChange={handleTimeChange}
              style={{
                background: `linear-gradient(to right, red ${(currentTime / (duration || 1)) * 100}%, gray ${(currentTime / (duration || 1)) * 100}%)`,
              }}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button 
                className="p-1 rounded-full hover:bg-yt-light-black"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              
              <button 
                className="p-1 rounded-full hover:bg-yt-light-black"
                onClick={skipBackward}
              >
                <SkipBack size={20} />
              </button>
              
              <button 
                className="p-1 rounded-full hover:bg-yt-light-black"
                onClick={skipForward}
              >
                <SkipForward size={20} />
              </button>
              
              <div className="flex items-center space-x-1">
                <button 
                  className="p-1 rounded-full hover:bg-yt-light-black"
                  onClick={toggleMute}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                
                <input
                  type="range"
                  className="w-16 h-1 bg-gray-600 rounded appearance-none cursor-pointer"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </div>
              
              <div className="text-xs text-white">
                {formatTime(currentTime)} / {formatTime(duration || 0)}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                className="p-1 rounded-full hover:bg-yt-light-black"
                onClick={() => {}}
              >
                <Settings size={20} />
              </button>
              
              <button 
                className="p-1 rounded-full hover:bg-yt-light-black"
                onClick={toggleFullScreen}
              >
                {isFullScreen ? <Minimize size={20} /> : <Maximize size={20} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
 