'use client';

import React, { useState, useEffect } from 'react';

type Webinar = {
  id: string;
  title: string;
  speaker: string;
  date: string;
};

export default function WebinarsPage() {
  const [webinars, setWebinars] = useState<Webinar[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const mockWebinarData: Webinar[] = [
    {
      id: 'WEB001',
      title: 'Newborn Sleep Patterns: Creating Healthy Routines from Day One',
      speaker: 'Dr. Sumitra Meena',
      date: '2025-06-15T10:00:00Z',
    },
    {
      id: 'WEB002',
      title: 'Breastfeeding Success: Common Challenges and Solutions',
      speaker: 'Dr. Priya Sharma',
      date: '2025-06-18T14:30:00Z',
    },
    {
      id: 'WEB003',
      title: "Baby's First Foods: Introduction to Solid Foods and Nutrition",
      speaker: 'Nutritionist Rajesh Kumar',
      date: '2025-06-22T11:00:00Z',
    },
    {
      id: 'WEB004',
      title: 'Managing Postpartum Depression: Support for New Mothers',
      speaker: 'Dr. Anjali Gupta',
      date: '2025-06-25T16:00:00Z',
    },
    {
      id: 'WEB005',
      title: 'Child Development Milestones: What to Expect in the First Year',
      speaker: 'Dr. Vikram Singh',
      date: '2025-06-28T10:30:00Z',
    },
    {
      id: 'WEB006',
      title: 'Creating a Safe Home Environment for Your Baby',
      speaker: 'Safety Expert Maya Patel',
      date: '2025-07-02T15:00:00Z',
    },
  ];

  const fetchWebinarData = async (): Promise<void> => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setWebinars(mockWebinarData);
      setError(null);
    } catch (err) {
      console.error('Error fetching webinars:', err);
      setError('Failed to load webinars. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWebinarData();
  }, []);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleDateString('en-US', options);
  };

  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  };

  const viewDetails = (webinarId: string): void => {
    console.log(`Viewing details for webinar ID: ${webinarId}`);
  };

  const getCardStyles = (index: number) => {
    const colorConfigs = [
      {
        topBorder: 'bg-blue-600',
        badge: 'bg-blue-600',
        avatar: 'bg-blue-600',
        dateIcon: 'bg-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        hoverBadge: 'bg-blue-700'
      },
    ];
    return colorConfigs[index % colorConfigs.length];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto mb-6"></div>
          </div>
          <p className="text-xl font-medium text-blue-800">Loading amazing webinars...</p>
          <p className="text-sm text-blue-600 mt-2">Preparing expert sessions for you</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white border border-red-200 rounded-2xl p-8 max-w-md text-center shadow-xl">
          <div className="text-red-500 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Oops! Something went wrong</h3>
          <p className="text-red-600 font-medium mb-6">{error}</p>
          <button
            onClick={fetchWebinarData}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-sky-200 to-blue-300 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl mb-6 shadow-lg">
            <span className="text-3xl">🍼</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 via-indigo-700 to-blue-600 bg-clip-text text-transparent mb-6">
            Babynama Webinars
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            Join our expert-led sessions designed for busy parents seeking reliable guidance and support
          </p>
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-6 text-sm text-blue-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                Expert Speakers
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
                Interactive Sessions
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-sky-400 rounded-full mr-2"></div>
                Practical Tips
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webinars.map((webinar, index) => {
            const cardStyles = getCardStyles(index);
            return (
              <div
                key={webinar.id}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-200 overflow-hidden backdrop-blur-sm flex flex-col h-full"
                onMouseEnter={() => setHoveredCard(webinar.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`h-1.5 ${cardStyles.topBorder} transition-all duration-300 ${hoveredCard === webinar.id ? 'h-2' : ''}`}></div>
                
                <div className="absolute top-6 right-6 z-10">
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${hoveredCard === webinar.id ? cardStyles.hoverBadge : cardStyles.badge} text-white shadow-lg transform transition-all duration-300 ${hoveredCard === webinar.id ? 'scale-110' : ''}`}>
                    {webinar.id}
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 pr-20 leading-tight group-hover:text-blue-700 transition-colors duration-300">
                    {webinar.title}
                  </h3>

                  <div className="flex items-center mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300">
                    <div className={`flex-shrink-0 w-12 h-12 ${cardStyles.avatar} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg transform transition-all duration-300 ${hoveredCard === webinar.id ? 'scale-110 rotate-3' : ''}`}>
                      {getInitials(webinar.speaker)}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-semibold text-gray-800">{webinar.speaker}</p>
                      <p className="text-xs text-blue-600 font-medium">Healthcare Expert</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-8 text-sm text-blue-700 bg-blue-50 rounded-xl p-3 border border-blue-100">
                    <div className={`w-8 h-8 rounded-lg ${cardStyles.dateIcon} flex items-center justify-center mr-3 shadow-sm`}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-xs leading-relaxed font-medium">{formatDate(webinar.date)}</span>
                  </div>

                  <div className="mt-auto">
                    <button
                      onClick={() => viewDetails(webinar.id)}
                      className={`w-full ${cardStyles.button} text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 transform hover:-translate-y-1 hover:scale-[1.02] relative overflow-hidden group`}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        VIEW DETAILS
                        <svg className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
              </div>
            );
          })}
        </div>

        {webinars.length === 0 && !loading && !error && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl mb-8">
              <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-blue-800 mb-4">No webinars available</h3>
            <p className="text-blue-600 text-lg">Check back later for upcoming expert sessions.</p>
          </div>
        )}
      </div>
    </div>
  );
}
