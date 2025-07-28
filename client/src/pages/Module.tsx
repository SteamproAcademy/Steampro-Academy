import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import Navigation from '../components/Navigation';
import VideoPlayer from '../components/VideoPlayer';
import Quiz from '../components/Quiz';
import { getCurrentUser } from '../lib/auth';
import { trainingData, type TrainingModule } from '../data/trainingData';
import { getModuleProgress, updateModuleProgress } from '../lib/progress';
import { useToast } from '../hooks/use-toast';

interface ModulePageProps {
  params: { id: string };
}

export default function Module({ params }: ModulePageProps) {
  const [, setLocation] = useLocation();
  const [module, setModule] = useState<TrainingModule | null>(null);
  const [progress, setProgress] = useState({
    videoWatched: false,
    readingCompleted: false,
    quizCompleted: false,
    quizScore: 0
  });
  const [currentSection, setCurrentSection] = useState<'video' | 'reading' | 'quiz'>('video');
  const user = getCurrentUser();
  const { toast } = useToast();

  useEffect(() => {
    if (!user) {
      setLocation('/');
      return;
    }

    // Find module across all tracks
    const allModules = [
      ...trainingData.core,
      ...(trainingData[user.department as keyof typeof trainingData] || []),
      ...trainingData.hr,
      ...trainingData.core2
    ].filter(Boolean);

    const foundModule = allModules.find(m => m.id === params.id);
    if (!foundModule) {
      setLocation('/dashboard');
      return;
    }

    setModule(foundModule);
    
    // Load progress
    const moduleProgress = getModuleProgress(params.id);
    setProgress(moduleProgress);

    // Determine current section based on progress
    if (!moduleProgress.videoWatched) {
      setCurrentSection('video');
    } else if (!moduleProgress.readingCompleted) {
      setCurrentSection('reading');
    } else if (!moduleProgress.quizCompleted) {
      setCurrentSection('quiz');
    } else {
      setCurrentSection('quiz'); // Show completed quiz
    }
  }, [params.id, user?.department, setLocation]);

  const handleVideoComplete = () => {
    updateModuleProgress(params.id, { videoWatched: true });
    setProgress(prev => ({ ...prev, videoWatched: true }));
    setCurrentSection('reading');
    toast({
      title: "Video Completed!",
      description: "You can now access the reading material.",
    });
  };

  const handleReadingComplete = () => {
    updateModuleProgress(params.id, { readingCompleted: true });
    setProgress(prev => ({ ...prev, readingCompleted: true }));
    setCurrentSection('quiz');
    toast({
      title: "Reading Completed!",
      description: "You can now take the quiz.",
    });
  };

  const handleQuizComplete = (score: number) => {
    updateModuleProgress(params.id, { quizCompleted: true, quizScore: score });
    setProgress(prev => ({ ...prev, quizCompleted: true, quizScore: score }));
    
    if (score === 100) {
      toast({
        title: "Module Completed!",
        description: "Congratulations! You've successfully completed this module.",
      });
      setTimeout(() => {
        setLocation('/dashboard');
      }, 2000);
    }
  };

  if (!module || !user) return null;

  const getTrackInfo = () => {
    if (trainingData.core.some(m => m.id === params.id)) {
      return { name: 'Core Training', color: 'text-blue-600' };
    }
    const departmentModules = trainingData[user.department as keyof typeof trainingData];
    if (Array.isArray(departmentModules) && departmentModules.some((m: TrainingModule) => m.id === params.id)) {
      return { 
        name: `${user.department.charAt(0).toUpperCase()}${user.department.slice(1)} Training`, 
        color: 'text-orange-600' 
      };
    }
    return { name: 'HR Training', color: 'text-purple-600' };
  };

  const trackInfo = getTrackInfo();

  const getStepStatus = (step: number) => {
    switch (step) {
      case 1: // Video
        return progress.videoWatched ? 'completed' : currentSection === 'video' ? 'active' : 'pending';
      case 2: // Reading
        return progress.readingCompleted ? 'completed' : currentSection === 'reading' ? 'active' : 'pending';
      case 3: // Quiz
        return progress.quizCompleted ? 'completed' : currentSection === 'quiz' ? 'active' : 'pending';
      default:
        return 'pending';
    }
  };

  const getStepClasses = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-600 text-white';
      case 'active':
        return 'bg-steampro-blue text-white';
      case 'pending':
        return 'bg-gray-300 text-gray-500';
      default:
        return 'bg-gray-300 text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-steampro-light">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Module Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => setLocation('/dashboard')}
              className="flex items-center space-x-2 text-steampro-blue hover:text-blue-700 transition-colors"
            >
              <i className="fas fa-arrow-left"></i>
              <span>Back to Dashboard</span>
            </button>
            <div className={`text-sm ${trackInfo.color}`}>{trackInfo.name}</div>
          </div>
          
          <h1 className="text-2xl font-bold text-steampro-dark mb-6">{module.title}</h1>
          
          {/* Progress Steps */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${getStepClasses(getStepStatus(1))}`}>
                {getStepStatus(1) === 'completed' ? <i className="fas fa-check"></i> : '1'}
              </div>
              <span className={`font-medium ${getStepStatus(1) === 'active' ? 'text-steampro-blue' : getStepStatus(1) === 'completed' ? 'text-green-600' : 'text-gray-500'}`}>
                Video
              </span>
            </div>
            <div className={`w-8 h-0.5 ${progress.videoWatched ? 'bg-green-600' : 'bg-gray-300'}`}></div>
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${getStepClasses(getStepStatus(2))}`}>
                {getStepStatus(2) === 'completed' ? <i className="fas fa-check"></i> : '2'}
              </div>
              <span className={`font-medium ${getStepStatus(2) === 'active' ? 'text-steampro-blue' : getStepStatus(2) === 'completed' ? 'text-green-600' : 'text-gray-500'}`}>
                Reading
              </span>
            </div>
            <div className={`w-8 h-0.5 ${progress.readingCompleted ? 'bg-green-600' : 'bg-gray-300'}`}></div>
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${getStepClasses(getStepStatus(3))}`}>
                {getStepStatus(3) === 'completed' ? <i className="fas fa-check"></i> : '3'}
              </div>
              <span className={`font-medium ${getStepStatus(3) === 'active' ? 'text-steampro-blue' : getStepStatus(3) === 'completed' ? 'text-green-600' : 'text-gray-500'}`}>
                Quiz
              </span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setCurrentSection('video')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  currentSection === 'video'
                    ? 'border-steampro-blue text-steampro-blue'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } ${currentSection === 'video' ? '' : ''}`}
              >
                <i className="fas fa-play-circle mr-2"></i>
                Video ({module.duration})
                {progress.videoWatched && <i className="fas fa-check text-green-500 ml-2"></i>}
              </button>
              
              <button
                onClick={() => progress.videoWatched && setCurrentSection('reading')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  currentSection === 'reading'
                    ? 'border-steampro-blue text-steampro-blue'
                    : progress.videoWatched
                    ? 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    : 'border-transparent text-gray-300 cursor-not-allowed'
                }`}
                disabled={!progress.videoWatched}
              >
                <i className={`mr-2 ${!progress.videoWatched ? 'fas fa-lock' : 'fas fa-book-open'}`}></i>
                Reading Material
                {progress.readingCompleted && <i className="fas fa-check text-green-500 ml-2"></i>}
              </button>
              
              <button
                onClick={() => progress.readingCompleted && setCurrentSection('quiz')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  currentSection === 'quiz'
                    ? 'border-steampro-blue text-steampro-blue'
                    : progress.readingCompleted
                    ? 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    : 'border-transparent text-gray-300 cursor-not-allowed'
                }`}
                disabled={!progress.readingCompleted}
              >
                <i className={`mr-2 ${!progress.readingCompleted ? 'fas fa-lock' : 'fas fa-question-circle'}`}></i>
                Quiz (2 questions)
                {progress.quizCompleted && <i className="fas fa-check text-green-500 ml-2"></i>}
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Video Tab */}
            {currentSection === 'video' && (
              <div>
                <VideoPlayer
                  videoUrl={module.videoUrl}
                  onVideoComplete={handleVideoComplete}
                  disabled={false}
                  startTime={module.startTime}
                  endTime={module.endTime}
                />

                <div className="flex items-center justify-between text-sm text-gray-600 mt-4">
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-info-circle text-steampro-blue"></i>
                    <span>
                      {progress.videoWatched 
                        ? 'Video completed! You can now access the reading material.' 
                        : 'Watch the complete video to unlock the next section'
                      }
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Reading Tab */}
            {currentSection === 'reading' && (
              <div>
                {progress.videoWatched ? (
                  <div>
                    <div 
                      className="prose prose-steampro max-w-none"
                      dangerouslySetInnerHTML={{ __html: module.readingMaterial }}
                    />
                    
                    {!progress.readingCompleted && (
                      <div className="mt-6 text-center">
                        <button
                          onClick={handleReadingComplete}
                          className="bg-steampro-blue text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
                        >
                          Mark as Read & Continue to Quiz
                        </button>
                      </div>
                    )}
                    
                    {progress.readingCompleted && (
                      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <i className="fas fa-check-circle text-green-600"></i>
                          <span className="text-green-800 font-medium">Reading completed! Quiz is now available.</span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-400">
                    <i className="fas fa-lock text-4xl mb-4"></i>
                    <p className="text-lg">Complete the video to access the reading material.</p>
                  </div>
                )}
              </div>
            )}

            {/* Quiz Tab */}
            {currentSection === 'quiz' && (
              <div>
                {progress.readingCompleted ? (
                  <Quiz
                    questions={module.quiz}
                    onComplete={handleQuizComplete}
                  />
                ) : (
                  <div className="text-center py-12 text-gray-400">
                    <i className="fas fa-lock text-4xl mb-4"></i>
                    <p className="text-lg">Complete the reading material to access the quiz.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
