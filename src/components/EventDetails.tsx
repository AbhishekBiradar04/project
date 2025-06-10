import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

interface EventDetailsProps {
  event: any;
  onBack: () => void;
}

const EventDetails: React.FC<EventDetailsProps> = ({ event, onBack }) => {
  const [activeTab, setActiveTab] = useState('assign-coordinator');
  const [selectedCoordinator, setSelectedCoordinator] = useState('');

  const tabs = [
    { id: 'event-details', label: 'Event Details' },
    { id: 'assign-coordinator', label: 'Assign Coordinator/Coordinator' },
    { id: 'session-management', label: 'Session Management' },
    { id: 'generate-sow', label: 'Generate SOW' }
  ];

  const meetingRooms = [
    { id: 1, name: 'Meeting Room 1', positions: 12, startDate: '12 Jan. 2023', endDate: '15 Jan. 2023', active: true },
    { id: 2, name: 'Meeting Room 2', positions: 12, startDate: '12 Jan. 2023', endDate: '15 Jan. 2023', active: false },
    { id: 3, name: 'Meeting Room 3', positions: 12, startDate: '12 Jan. 2023', endDate: '15 Jan. 2023', active: false },
    { id: 4, name: 'Meeting Room 4', positions: 12, startDate: '12 Jan. 2023', endDate: '15 Jan. 2023', active: false },
    { id: 5, name: 'Meeting Room 5', positions: 12, startDate: '12 Jan. 2023', endDate: '15 Jan. 2023', active: false }
  ];

  const positions = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    position: 'Camera I (Video)',
    time: '9 am - 7 pm',
    info: 'LP default',
    quantity: 20
  }));

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onBack}
          className="p-2 text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg md:text-2xl font-bold text-white">
          Event Name <span className="text-white/60 text-sm md:text-base">(Venue Here)</span>
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 md:px-4 py-2 rounded-lg transition-all duration-200 text-xs md:text-sm ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/20'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden space-y-4">
        {/* Assign Coordinator */}
        <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/30 p-4">
          <h2 className="text-lg font-semibold text-white mb-4">Assign Coordinator</h2>
          
          <div className="space-y-4">
            <div className="relative">
              <select
                value={selectedCoordinator}
                onChange={(e) => setSelectedCoordinator(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
              >
                <option value="">Search Coordinator</option>
                <option value="coord1">Coordinator 1</option>
                <option value="coord2">Coordinator 2</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4 pointer-events-none" />
            </div>
            
            <button className="text-pink-400 hover:text-pink-300 transition-colors font-medium text-sm">
              Add New Coordinator
            </button>
          </div>
        </div>

        {/* Event Info */}
        <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/30 p-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-white/60 text-xs mb-1">Start: 12-12-2023</label>
            </div>
            <div>
              <label className="block text-white/60 text-xs mb-1">Ends: 15-12-2023</label>
            </div>
          </div>
          
          <div>
            <label className="block text-white/60 text-xs mb-1">Venue Address: Some Location 12, Name Here, City, State.</label>
          </div>
        </div>

        {/* Assign Contractor */}
        <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/30 p-4">
          <h2 className="text-lg font-semibold text-white mb-4">Assign Contractor</h2>
          
          <div className="space-y-3">
            {meetingRooms.map((room) => (
              <div
                key={room.id}
                className={`p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                  room.active
                    ? 'bg-gradient-to-r from-pink-500/30 to-purple-600/30 border-pink-500/50'
                    : 'bg-white/5 border-white/20 hover:border-purple-500/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white text-sm">{room.name}</h3>
                  <span className="text-pink-400 text-xs font-medium">{room.positions} Positions</span>
                </div>
                <p className="text-white/60 text-xs">
                  Start from {room.startDate} - Ends at {room.endDate}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Positions */}
        <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/30 p-4">
          <h2 className="text-lg font-semibold text-white mb-4">Positions</h2>
          
          {/* Mobile Table Header */}
          <div className="grid grid-cols-4 gap-2 mb-3 pb-2 border-b border-white/20">
            <span className="text-white/60 text-xs font-medium">Position</span>
            <span className="text-white/60 text-xs font-medium">Time</span>
            <span className="text-white/60 text-xs font-medium">Info</span>
            <span className="text-white/60 text-xs font-medium">Quantity</span>
          </div>

          {/* Mobile Table Rows */}
          <div className="space-y-2">
            {positions.slice(0, 8).map((position) => (
              <div key={position.id} className="grid grid-cols-4 gap-2 py-2 border-b border-white/10 text-xs">
                <span className="text-white">{position.position}</span>
                <span className="text-white/80">{position.time}</span>
                <span className="text-white/80">{position.info}</span>
                <span className="text-white/80">{position.quantity}</span>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-2 mt-4">
            <button className="p-1 text-white/40 hover:text-white transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <button className="p-1 text-white/40 hover:text-white transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 text-sm">
            Save Edits
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
        {/* Left Column - Coordinator and Contractor Assignment */}
        <div className="xl:col-span-2 space-y-4 md:space-y-6">
          {/* Assign Coordinator */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/30 p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-white mb-4">Assign Coordinator</h2>
            
            <div className="space-y-4">
              <div className="relative">
                <select
                  value={selectedCoordinator}
                  onChange={(e) => setSelectedCoordinator(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm md:text-base"
                >
                  <option value="">Search Coordinator</option>
                  <option value="coord1">Coordinator 1</option>
                  <option value="coord2">Coordinator 2</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4 pointer-events-none" />
              </div>
              
              <button className="text-pink-400 hover:text-pink-300 transition-colors font-medium text-sm md:text-base">
                Add New Coordinator
              </button>
            </div>
          </div>

          {/* Assign Contractor */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/30 p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-white mb-6">Assign Contractor</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {meetingRooms.map((room) => (
                <div
                  key={room.id}
                  className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                    room.active
                      ? 'bg-gradient-to-r from-pink-500/30 to-purple-600/30 border-pink-500/50'
                      : 'bg-white/5 border-white/20 hover:border-purple-500/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white text-sm md:text-base">{room.name}</h3>
                    <span className="text-pink-400 text-xs md:text-sm font-medium">{room.positions} Positions</span>
                  </div>
                  <p className="text-white/60 text-xs md:text-sm">
                    Start from {room.startDate} - Ends at {room.endDate}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Event Details and Positions */}
        <div className="space-y-4 md:space-y-6">
          {/* Event Info */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/30 p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-white mb-4">
              Event Name <span className="text-white/60 text-sm">(Venue Here)</span>
            </h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/60 text-xs md:text-sm mb-1">Start</label>
                  <input
                    type="text"
                    value="12-12-2023"
                    readOnly
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-xs md:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs md:text-sm mb-1">Ends</label>
                  <input
                    type="text"
                    value="15-12-2023"
                    readOnly
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-xs md:text-sm"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/60 text-xs md:text-sm mb-1">Venue Address</label>
                <input
                  type="text"
                  value="Some Location 12, Name Here, City, State."
                  readOnly
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-xs md:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Positions Table */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/30 p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-semibold text-white mb-4">Positions</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 text-white/60 font-medium">Position</th>
                    <th className="text-left py-3 text-white/60 font-medium">Time</th>
                    <th className="text-left py-3 text-white/60 font-medium">Info</th>
                    <th className="text-left py-3 text-white/60 font-medium">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {positions.map((position) => (
                    <tr key={position.id} className="border-b border-white/10">
                      <td className="py-3 text-white">{position.position}</td>
                      <td className="py-3 text-white/80">{position.time}</td>
                      <td className="py-3 text-white/80">{position.info}</td>
                      <td className="py-3 text-white/80">{position.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2 mt-4">
              <button className="p-1 text-white/40 hover:text-white transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              <button className="p-1 text-white/40 hover:text-white transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Save Button */}
      <div className="hidden md:flex justify-center">
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 md:px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 text-sm md:text-base">
          Save Edits
        </button>
      </div>
    </div>
  );
};

export default EventDetails;