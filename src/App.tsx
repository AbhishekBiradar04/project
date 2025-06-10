import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import EventRequests from './components/EventRequests';
import EventDetails from './components/EventDetails';

function App() {
  const [currentView, setCurrentView] = useState('event-requests');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleViewChange = (view: string, event?: any) => {
    setCurrentView(view);
    if (event) {
      setSelectedEvent(event);
    }
    // Close sidebar on mobile when navigating
    setSidebarOpen(false);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'event-details':
        return <EventDetails event={selectedEvent} onBack={() => handleViewChange('event-requests')} />;
      case 'event-requests':
        return <EventRequests onEventSelect={(event) => handleViewChange('event-details', event)} />;
      case 'estimate':
        return (
          <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/30 p-6">
            <h1 className="text-2xl font-bold text-white mb-4">Estimate</h1>
            <p className="text-white/60">Estimate content will be displayed here.</p>
          </div>
        );
      case 'events-list':
        return (
          <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/30 p-6">
            <h1 className="text-2xl font-bold text-white mb-4">Events List</h1>
            <p className="text-white/60">Events list content will be displayed here.</p>
          </div>
        );
      case 'partial-requests':
        return (
          <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/30 p-6">
            <h1 className="text-2xl font-bold text-white mb-4">Partial Requests</h1>
            <p className="text-white/60">Partial requests content will be displayed here.</p>
          </div>
        );
      case 'positions':
        return (
          <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/30 p-6">
            <h1 className="text-2xl font-bold text-white mb-4">Positions</h1>
            <p className="text-white/60">Positions content will be displayed here.</p>
          </div>
        );
      case 'contractors':
        return (
          <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/30 p-6">
            <h1 className="text-2xl font-bold text-white mb-4">Contractors</h1>
            <p className="text-white/60">Contractors content will be displayed here.</p>
          </div>
        );
      case 'admins':
        return (
          <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/30 p-6">
            <h1 className="text-2xl font-bold text-white mb-4">Admins</h1>
            <p className="text-white/60">Admins content will be displayed here.</p>
          </div>
        );
      case 'clients':
        return (
          <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/30 p-6">
            <h1 className="text-2xl font-bold text-white mb-4">Clients</h1>
            <p className="text-white/60">Clients content will be displayed here.</p>
          </div>
        );
      case 'coordinators':
        return (
          <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/30 p-6">
            <h1 className="text-2xl font-bold text-white mb-4">Coordinators</h1>
            <p className="text-white/60">Coordinators content will be displayed here.</p>
          </div>
        );
      case 'profile':
        return (
          <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/30 p-6">
            <h1 className="text-2xl font-bold text-white mb-4">Profile</h1>
            <p className="text-white/60">Profile content will be displayed here.</p>
          </div>
        );
      default:
        return <EventRequests onEventSelect={(event) => handleViewChange('event-details', event)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800">
      <div className="flex h-screen overflow-hidden">
        <Sidebar 
          currentView={currentView} 
          onViewChange={handleViewChange}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header onMenuClick={() => setSidebarOpen(true)} />
          <main className="flex-1 overflow-auto p-3 md:p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;