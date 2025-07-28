import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import Navigation from '../components/Navigation';
import { getCurrentUser } from '../lib/auth';
import { trainingData, type TrainingData, type TrainingModule } from '../data/trainingData';
import { areAllTracksCompleted, getTrackProgress } from '../lib/progress';
import { Button } from '../components/ui/button';

declare global {
  interface Window {
    html2pdf: any;
  }
}

export default function Certificate() {
  const [, setLocation] = useLocation();
  const user = getCurrentUser();
  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!user) {
      setLocation('/');
      return;
    }

    // Include both core and core2 modules in the completion check
    // Combine core and core2 modules for completion check
    const coreModules = [...trainingData.core, ...trainingData.core2].map(m => m.id);
    
    // Get department modules directly from the training data
    const departmentKey = user.department.toLowerCase() as keyof TrainingData;
    const departmentModules = (trainingData[departmentKey] || []) as TrainingModule[];
    const departmentModuleIds = departmentModules.map(m => m.id);
    
    const hrModules = trainingData.hr.map(m => m.id);

    const allCompleted = areAllTracksCompleted(coreModules, departmentModuleIds, hrModules);
    
    if (!allCompleted) {
      setLocation('/dashboard');
    }

    // Load html2pdf library
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [user, setLocation]);

  if (!user) return null;

  // Calculate progress for each track
  const coreProgress = getTrackProgress([...trainingData.core, ...trainingData.core2].map(m => m.id));
  
  // Get department modules directly from the training data
  const departmentKey = user.department.toLowerCase() as keyof TrainingData;
  const departmentModules = (trainingData[departmentKey] || []) as TrainingModule[];
  const departmentModuleIds = departmentModules.map(m => m.id);
  
  const departmentProgress = getTrackProgress(departmentModuleIds);
  const hrProgress = getTrackProgress(trainingData.hr.map(m => m.id));

  const totalModules = coreProgress.total + departmentProgress.total + hrProgress.total;
  const totalHours = Math.round(totalModules * 0.7);
  const completionDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const certificateId = `SP-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;

  const handleDownload = () => {
    if (window.html2pdf && certificateRef.current) {
      const opt = {
        margin: 1,
        filename: `SteamPRO_Certificate_${user.name.replace(' ', '_')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
      };

      window.html2pdf().set(opt).from(certificateRef.current).save();
    } else {
      alert('PDF generation library is still loading. Please try again in a moment.');
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'SteamPRO Training Certificate',
        text: `I've completed my training at SteamPRO!`,
        url: window.location.href
      });
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleContinueToReflection = () => {
    setLocation('/reflection');
  };

  return (
    <div className="min-h-screen bg-steampro-light">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-steampro-dark mb-2">Training Certificate</h1>
          <p className="text-gray-600">Congratulations on completing your training!</p>
        </div>

        {/* Certificate Preview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div ref={certificateRef} className="border-4 border-steampro-blue rounded-lg p-8 text-center">
            {/* Certificate Header */}
            <div className="mb-6">
              <div className="w-16 h-16 bg-steampro-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-graduation-cap text-white text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-steampro-dark">SteamPRO Training Platform</h2>
              <p className="text-gray-600">Certificate of Completion</p>
            </div>

            {/* Certificate Body */}
            <div className="my-8">
              <p className="text-lg text-gray-700 mb-4">This certifies that</p>
              <h3 className="text-3xl font-bold text-steampro-dark mb-4">{user.name}</h3>
              <p className="text-lg text-gray-700 mb-2">has successfully completed all required training modules</p>
              <p className="text-lg text-gray-700 mb-6">
                in the <span className="font-semibold capitalize">{user.department}</span> department
              </p>
              
              <div className="grid grid-cols-3 gap-6 my-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-steampro-blue">{coreProgress.percentage}%</div>
                  <div className="text-sm text-gray-600">Core Training</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-steampro-blue">{departmentProgress.percentage}%</div>
                  <div className="text-sm text-gray-600">Departmental Training</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-steampro-blue">{hrProgress.percentage}%</div>
                  <div className="text-sm text-gray-600">HR Training</div>
                </div>
              </div>
            </div>

            {/* Certificate Footer */}
            <div className="flex justify-between items-end mt-12 pt-6 border-t border-gray-200">
              <div className="text-left">
                <div className="w-32 h-0.5 bg-gray-400 mb-2"></div>
                <p className="text-sm text-gray-600">Date of Completion</p>
                <p className="font-medium">{completionDate}</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <i className="fas fa-signature text-gray-400 text-xl"></i>
                </div>
                <div className="w-32 h-0.5 bg-gray-400 mb-2"></div>
                <p className="text-sm text-gray-600">Authorized Signature</p>
                <p className="font-medium">SteamPRO Leadership</p>
              </div>
              
              <div className="text-right">
                <div className="w-16 h-16 bg-steampro-blue rounded-lg flex items-center justify-center mb-2">
                  <i className="fas fa-certificate text-white text-xl"></i>
                </div>
                <p className="text-xs text-gray-500">Certificate ID</p>
                <p className="text-xs font-mono">{certificateId}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Actions */}
        <div className="flex justify-center space-x-4">
          <Button
            onClick={handleDownload}
            className="bg-steampro-blue hover:bg-steampro-blue/90 text-white"
          >
            <i className="fas fa-download mr-2"></i>
            Download PDF
          </Button>
          
          <Button
            onClick={handleShare}
            variant="outline"
            className="border-steampro-blue text-steampro-blue hover:bg-steampro-blue hover:text-white"
          >
            <i className="fas fa-share mr-2"></i>
            Share
          </Button>
          
          <Button
            onClick={handleContinueToReflection}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Continue to Reflection
            <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </div>
      </div>
    </div>
  );
}
