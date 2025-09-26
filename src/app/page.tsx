'use client';

import { useState } from 'react';
import { 
  Camera, 
  TrendingUp, 
  Upload,
  Brain,
  BarChart3,
  MapPin,
  AlertCircle,
  CheckCircle,
  Home,
  Settings,
  HelpCircle,
  LogOut,
  User,
  Bell,
  Calendar,
  FileText,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

// Sample species data
const speciesData = [
  { name: 'Diatoms', count: 120 },
  { name: 'Dinoflagellates', count: 85 },
  { name: 'Copepods', count: 60 },
  { name: 'Larvae', count: 40 },
];

// Simple SVG Map Component for India with Andaman & Nicobar Islands
const IndiaMap = () => {
  return (
    <div className="w-full h-80 bg-gradient-to-b from-sky-100 to-blue-200 rounded-lg overflow-hidden relative">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
      >
        {/* Simplified India outline */}
        <path
          d="M200 150 Q220 120 250 130 Q280 140 300 160 Q320 180 340 200 Q360 220 380 250 Q390 280 380 310 Q370 340 350 360 Q320 380 290 390 Q260 400 230 390 Q200 380 180 360 Q160 340 150 310 Q140 280 150 250 Q160 220 180 190 Q190 170 200 150 Z"
          fill="#E0F2FE"
          stroke="#0284C7"
          strokeWidth="2"
          className="hover:fill-sky-200 transition-colors cursor-pointer"
        />
        
        {/* Andaman & Nicobar Islands */}
        <g>
          <circle cx="380" cy="320" r="4" fill="#DC2626" className="animate-pulse" />
          <circle cx="385" cy="340" r="3" fill="#DC2626" />
          <circle cx="375" cy="360" r="3" fill="#DC2626" />
          <circle cx="390" cy="380" r="2" fill="#DC2626" />
          
          {/* Location label */}
          <text
            x="420"
            y="350"
            className="text-sm font-semibold fill-blue-700"
            textAnchor="start"
          >
            Andaman & Nicobar Islands
          </text>
          
          {/* Connection line */}
          <line
            x1="390"
            y1="340"
            x2="415"
            y2="345"
            stroke="#0284C7"
            strokeWidth="1"
            strokeDasharray="2,2"
          />
        </g>
        
        {/* Decorative elements */}
        <g opacity="0.3">
          <circle cx="100" cy="100" r="20" fill="#3B82F6" className="animate-ping" />
          <circle cx="600" cy="150" r="15" fill="#06B6D4" className="animate-ping" style={{animationDelay: '1s'}} />
          <circle cx="650" cy="400" r="25" fill="#0EA5E9" className="animate-ping" style={{animationDelay: '2s'}} />
        </g>
        
        {/* Grid pattern overlay */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#0284C7" strokeWidth="0.5" opacity="0.1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Compass */}
        <g transform="translate(700, 80)">
          <circle cx="0" cy="0" r="25" fill="white" stroke="#0284C7" strokeWidth="2" opacity="0.9" />
          <polygon points="0,-15 5,0 0,15 -5,0" fill="#DC2626" />
          <text x="0" y="-35" textAnchor="middle" className="text-xs font-bold fill-blue-700">N</text>
        </g>
      </svg>
      
      {/* Floating info cards */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">Active Sampling Site</span>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Coordinates: 11.7401°N, 92.7381°E
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="text-sm font-medium text-gray-700">Marine Biodiversity Zone</div>
        <div className="text-xs text-gray-500">High species diversity area</div>
      </div>
    </div>
  );
};

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // Mock user data
  const user = {
    name: "John Smith",
    email: "john.smith@marine.com",
    avatar: userImage
  };

  const handleUserImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const navItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Camera, label: 'AI Analysis' },
    { icon: MapPin, label: 'Sampling Map' },
    { icon: Calendar, label: 'Schedule' },
    { icon: FileText, label: 'Reports' },
    { icon: Bell, label: 'Alerts' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 flex">
      {/* Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <div className="flex items-center gap-2">
                <Camera className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-800">MarineSense AI</span>
              </div>
            )}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {sidebarCollapsed ? (
                <ChevronRight className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="relative">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt="User avatar"
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                />
              ) : (
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleUserImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
                title="Change profile picture"
              />
            </div>
            {!sidebarCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-500">Hi,</p>
                <p className="font-semibold text-gray-800 truncate">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <button className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
                  item.active
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}>
                  <item.icon className="w-5 h-5" />
                  {!sidebarCollapsed && <span>{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-gray-200">
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors">
              <HelpCircle className="w-5 h-5" />
              {!sidebarCollapsed && <span>Help & Support</span>}
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors">
              <LogOut className="w-5 h-5" />
              {!sidebarCollapsed && <span>Logout</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto p-6">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-sky-600 rounded-2xl p-8 mb-8 text-white shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-3 flex items-center gap-3">
                  <Camera className="w-10 h-10" />
                  MarineSense AI
                </h1>
                <p className="text-blue-100 text-lg">
                  Intelligent marine biodiversity assessments
                </p>
              </div>
              <div className="hidden md:block">
                <Brain className="w-20 h-20 opacity-20" />
              </div>
            </div>
          </div>

          {/* Grid with Map & Bar Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Map Section */}
            <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Sampling Location: Andaman & Nicobar Islands
              </h2>
              <IndiaMap />
            </div>

            {/* Species Bar Chart */}
            <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                Species Distribution
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={speciesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#3B82F6" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* AI Analysis Upload */}
          <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 rounded-lg p-2">
                <Camera className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">AI Image Analysis</h2>
            </div>
            
            <div className="border-2 border-dashed border-blue-300 rounded-xl p-12 text-center mb-6 hover:border-blue-400 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer flex flex-col items-center gap-4"
              >
                <div className="bg-blue-100 rounded-full p-6">
                  <Upload className="w-12 h-12 text-blue-600" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-gray-700 mb-2">
                    Upload Microscopy Image
                  </p>
                  <p className="text-gray-500">
                    Get instant AI-powered species analysis
                  </p>
                </div>
              </label>
            </div>

            {selectedImage && (
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="text-blue-700 font-medium">
                  📸 Image selected: {selectedImage.name}
                </p>
                <button className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Analyze Image
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}