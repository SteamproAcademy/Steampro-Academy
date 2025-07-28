import { useEffect } from 'react';
import { useLocation } from 'wouter';
import Navigation from '../components/Navigation';
import ModuleCard from '../components/ModuleCard';
import ProgressBar from '../components/ProgressBar';
import { TrainingData } from '../data/trainingData';
import { getCurrentUser } from '../lib/auth';
import { trainingData } from '../data/trainingData';
import { getTrackProgress, areAllTracksCompleted, isModuleUnlocked } from '../lib/progress';

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const user = getCurrentUser();

  useEffect(() => {
    if (!user) {
      setLocation('/');
    }
  }, [user, setLocation]);

  if (!user) return null;

  const coreModules = [...trainingData.core, ...trainingData.core2]; // Combine core and core2 modules
  // Access department modules directly from trainingData
  const departmentKey = user.department.toLowerCase() as keyof TrainingData;
  const departmentModules = trainingData[departmentKey] || [];
  const hrModules = trainingData.hr;

  const coreProgress = getTrackProgress(trainingData.core.map((m: { id: string }) => m.id));
  const core2Progress = getTrackProgress(trainingData.core2.map((m: { id: string }) => m.id));
  const departmentProgress = getTrackProgress(departmentModules.map((m: { id: string }) => m.id));
  const hrProgress = getTrackProgress(hrModules.map((m: { id: string }) => m.id));

  const allCompleted = areAllTracksCompleted(
    [...trainingData.core, ...trainingData.core2].map((m: { id: string }) => m.id),
    departmentModules.map((m: { id: string }) => m.id),
    hrModules.map((m: { id: string }) => m.id)
  );

  const totalModules = trainingData.core.length + trainingData.core2.length + departmentModules.length + hrModules.length;
  const completedModules = coreProgress.completed + core2Progress.completed + departmentProgress.completed + hrProgress.completed;
  const overallProgress = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;

  // Calculate estimated study hours (rough estimate)
  const totalHours = Math.round(completedModules * 0.7); // Assuming ~40min average per module

  const getDepartmentTitle = (dept: string) => {
    const titles = {
      sales: 'Sales Training',
      ops: 'Operations Training',
      marketing: 'Marketing Training',
      finance: 'Finance Training',
      manufacturing: 'Manufacturing Training'
    };
    return titles[dept as keyof typeof titles] || 'Departmental Training';
  };

  const getDepartmentGradient = (dept: string) => {
    const gradients = {
      sales: 'from-orange-500 to-red-500',
      ops: 'from-blue-500 to-indigo-500',
      marketing: 'from-purple-500 to-pink-500',
      finance: 'from-green-500 to-emerald-500',
      manufacturing: 'from-yellow-500 to-orange-500'
    };
    return gradients[dept as keyof typeof gradients] || 'from-gray-500 to-gray-600';
  };

  const getDepartmentIcon = (dept: string) => {
    const icons = {
      sales: 'fa-chart-line',
      ops: 'fa-cogs',
      marketing: 'fa-bullhorn',
      finance: 'fa-calculator',
      manufacturing: 'fa-industry'
    };
    return icons[dept as keyof typeof icons] || 'fa-briefcase';
  };

  return (
    <div className="min-h-screen bg-steampro-light">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-steampro-dark mb-2">
            Welcome back, {user.name}
          </h1>
          <p className="text-gray-600 capitalize">Department: {user.department}</p>
        </div>

        {/* Progress Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-steampro-dark mb-4">Your Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-check text-green-600 text-xl"></i>
              </div>
              <p className="font-medium text-steampro-dark">{completedModules}</p>
              <p className="text-sm text-gray-500">Modules Completed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-clock text-blue-600 text-xl"></i>
              </div>
              <p className="font-medium text-steampro-dark">{totalHours}</p>
              <p className="text-sm text-gray-500">Hours Studied</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <i className="fas fa-trophy text-purple-600 text-xl"></i>
              </div>
              <p className="font-medium text-steampro-dark">{overallProgress}%</p>
              <p className="text-sm text-gray-500">Overall Progress</p>
            </div>
          </div>
        </div>

        {/* Training Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Core Training Track */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-white p-6 border-l-4 border-steampro-blue">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-steampro-dark">Core Training - Part 1</h3>
                <i className="fas fa-star text-yellow-500 text-xl"></i>
              </div>
              <p className="text-gray-600 text-sm">Essential knowledge for all employees</p>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2 text-gray-700">
                  <span>Progress</span>
                  <span>{coreProgress.percentage}%</span>
                </div>
                <ProgressBar 
                  current={coreProgress.completed} 
                  total={coreProgress.total} 
                  color="bg-steampro-blue" 
                />
              </div>
            </div>
            <div className="p-6">
              {trainingData.core.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  isUnlocked={isModuleUnlocked(module.id, trainingData.core.map(m => m.id))}
                  allModuleIds={trainingData.core.map(m => m.id)}
                />
              ))}
            </div>
          </div>

          {/* Core 2 Training Track */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-white p-6 border-l-4 border-indigo-600">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-steampro-dark">Core Training - Part 2</h3>
                <i className="fas fa-star text-yellow-500 text-xl"></i>
              </div>
              <p className="text-gray-600 text-sm">Advanced knowledge for all employees</p>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2 text-gray-700">
                  <span>Progress</span>
                  <span>{core2Progress.percentage}%</span>
                </div>
                <ProgressBar 
                  current={core2Progress.completed} 
                  total={core2Progress.total} 
                  color="bg-indigo-600" 
                />
              </div>
            </div>
            <div className="p-6">
              {trainingData.core2.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  isUnlocked={isModuleUnlocked(module.id, trainingData.core2.map(m => m.id))}
                  allModuleIds={trainingData.core2.map(m => m.id)}
                />
              ))}
            </div>
          </div>

          {/* Departmental Training Track */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-white p-6 border-l-4 border-orange-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-steampro-dark">{getDepartmentTitle(user.department)}</h3>
                <i className={`fas ${getDepartmentIcon(user.department)} text-orange-500 text-xl`}></i>
              </div>
              <p className="text-gray-600 text-sm">Specialized training for your department</p>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2 text-gray-700">
                  <span>Progress</span>
                  <span>{departmentProgress.percentage}%</span>
                </div>
                <ProgressBar 
                  current={departmentProgress.completed} 
                  total={departmentProgress.total} 
                  color="bg-orange-500" 
                />
              </div>
            </div>
            <div className="p-6">
              {departmentModules.length > 0 ? (
                departmentModules.map((module) => (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    isUnlocked={isModuleUnlocked(module.id, departmentModules.map((m: { id: string }) => m.id))}
                    allModuleIds={departmentModules.map((m: { id: string }) => m.id)}
                  />
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <i className="fas fa-info-circle text-2xl mb-2"></i>
                  <p>No departmental training available yet.</p>
                </div>
              )}
            </div>
          </div>

          {/* HR Training Track */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-white p-6 border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-steampro-dark">HR Training</h3>
                <i className="fas fa-users text-purple-500 text-xl"></i>
              </div>
              <p className="text-gray-600 text-sm">Policies, compliance, and workplace culture</p>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-2 text-gray-700">
                  <span>Progress</span>
                  <span>{hrProgress.percentage}%</span>
                </div>
                <ProgressBar 
                  current={hrProgress.completed} 
                  total={hrProgress.total} 
                  color="bg-purple-500" 
                />
              </div>
            </div>
            <div className="p-6">
              {hrModules.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  isUnlocked={isModuleUnlocked(module.id, hrModules.map(m => m.id))}
                  allModuleIds={hrModules.map(m => m.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Certificate Section */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <i className="fas fa-certificate text-green-600 text-xl"></i>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-steampro-dark">Training Certificate</h3>
              <p className="text-green-700 text-sm">
                {allCompleted 
                  ? 'Congratulations! You can now view your certificate.' 
                  : 'Complete all modules to earn your certificate'
                }
              </p>
            </div>
            <button 
              onClick={() => allCompleted && setLocation('/certificate')}
              disabled={!allCompleted}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                allCompleted 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              View Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
