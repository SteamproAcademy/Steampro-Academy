import { useEffect, useState, useRef } from 'react';

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT: any;
  }
}

interface VideoPlayerProps {
  videoUrl: string;
  onVideoComplete: () => void;
  disabled?: boolean;
  startTime?: string; // Format: 'HH:MM:SS' or 'MM:SS' or 'SS'
  endTime?: string;   // Format: 'HH:MM:SS' or 'MM:SS' or 'SS'
}

export default function VideoPlayer({ 
  videoUrl, 
  onVideoComplete, 
  disabled = false, 
  startTime = '', 
  endTime = '' 
}: VideoPlayerProps) {
  const [isVideoCompleted, setIsVideoCompleted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const playerRef = useRef<any>(null);
  
  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    const match = url.match(/(?:embed\/|v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : '';
  };

  const videoId = getVideoId(videoUrl);
  
  const handleStartVideo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Starting video...', { disabled, showVideo });
    if (!disabled) {
      setShowVideo(true);
    }
  };

  const handleVideoComplete = () => {
    setIsVideoCompleted(true);
    onVideoComplete();
  };

  // Convert time string (HH:MM:SS, MM:SS, or SS) to seconds
  const timeToSeconds = (timeStr: string): number => {
    if (!timeStr) return 0;
    const parts = timeStr.split(':').map(Number).reverse();
    return parts.reduce((total, part, index) => {
      return total + (part * Math.pow(60, index));
    }, 0);
  };

  const startSeconds = startTime ? timeToSeconds(startTime) : 0;
  const endSeconds = endTime ? timeToSeconds(endTime) : 0;
  const duration = endSeconds > startSeconds ? endSeconds - startSeconds : 0;

  // Create embed URL with start time
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0&enablejsapi=1&start=${startSeconds}`;



  // Initialize YouTube API
  useEffect(() => {
    // Load YouTube IFrame API script if not already loaded
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Setup player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      if (playerRef.current) {
        playerRef.current = new window.YT.Player('ytplayer', {
          events: {
            onReady: (event: any) => {
              // Start playing from the specified start time
              if (startSeconds > 0) {
                event.target.seekTo(startSeconds);
              }
            },
            onStateChange: (event: any) => {
              // Check if video reached the end time
              if (event.data === window.YT.PlayerState.PLAYING && endSeconds > 0) {
                const checkTime = () => {
                  const currentTime = playerRef.current?.getCurrentTime();
                  if (currentTime >= endSeconds) {
                    playerRef.current?.pauseVideo();
                    if (!isVideoCompleted) {
                      handleVideoComplete();
                    }
                  } else {
                    requestAnimationFrame(checkTime);
                  }
                };
                checkTime();
              }
            }
          }
        });
      }
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [startSeconds, endSeconds, isVideoCompleted]);

  const handleRewatch = () => {
    setShowVideo(false);
    setIsVideoCompleted(false);
  };

  return (
    <div className="relative bg-black rounded-lg overflow-hidden aspect-video mb-4">
      {!showVideo ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
          <div className="text-center text-white">
            <button
              onClick={handleStartVideo}
              className="block w-full h-full p-8 transition-all hover:bg-gray-800 cursor-pointer"
            >
              <div className={`text-6xl mb-4 transition-all transform ${
                isVideoCompleted 
                  ? 'text-green-500' 
                  : 'text-red-500 animate-pulse hover:scale-110'
              }`}>
                {isVideoCompleted ? '✓' : '▶'}
              </div>
              <p className="text-lg font-semibold">
                {startTime && endTime 
                  ? `Video Segment (${startTime} - ${endTime})` 
                  : 'Training Video'}
              </p>
              <p className="text-sm opacity-70">
                {isVideoCompleted ? 'Click to rewatch' : 'Click to start watching'}
              </p>
              {isVideoCompleted && (
                <div className="mt-2 text-xs text-green-400">
                  ✓ Video completed!
                </div>
              )}
            </button>
          </div>
        </div>
      ) : (
        <>
          <iframe
            id="ytplayer"
            src={embedUrl}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="Training Video"
            onLoad={() => {
              // Player will be initialized by the YouTube API
            }}
          />

          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            {!isVideoCompleted && (
              <button
                onClick={handleVideoComplete}
                className="flex-1 bg-steampro-blue text-white py-2 px-4 rounded-lg hover:bg-steampro-blue/90 transition-all"
              >
                Mark as Watched & Continue
              </button>
            )}
            <button
              onClick={handleRewatch}
              className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-all"
            >
              ↻ Rewatch
            </button>
          </div>
        </>
      )}
    </div>
  );
}
