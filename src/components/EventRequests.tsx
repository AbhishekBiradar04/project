import React, { useState } from 'react';
import { Search, Plus, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

interface EventRequestsProps {
  onEventSelect: (event: any) => void;
}

const EventRequests: React.FC<EventRequestsProps> = ({ onEventSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const mockEvents = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    eventName: 'Filled Name',
    eventStart: 'Jan 12, 2024',
    eventEnd: 'Jan 14, 2024',
    clientName: 'Muhammad Asad',
    contactInfo: '+1 234 566 7890',
    venue: 'Lorem Ipsum Dolor Sit Amet'
  }));

  const itemsPerPage = 15;
  const totalPages = Math.ceil(mockEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEvents = mockEvents.slice(startIndex, endIndex);

  const handleEventClick = (event: any) => {
    onEventSelect(event);
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-xl md:text-2xl font-bold text-white">Event Requests</h1>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Search */}
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4" />
            <input
              type="text"
              placeholder="Search here"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-auto pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
            />
          </div>
          
          {/* Add Button */}
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-3 md:px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/30 overflow-hidden">
        {/* Mobile Card View */}
        <div className="block md:hidden">
          {/* Mobile Header */}
          <div className="bg-gradient-to-r from-pink-500/30 to-purple-600/30 border-b border-purple-500/30 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-white font-semibold text-sm">Event Name</span>
                <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Eye className="w-2 h-2 text-white" />
                </div>
              </div>
              <span className="text-white font-semibold text-sm">Event Start</span>
            </div>
          </div>

          {currentEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => handleEventClick(event)}
              className="p-4 border-b border-purple-500/20 hover:bg-purple-500/10 transition-colors cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-purple-500/30 rounded-full flex items-center justify-center">
                    <Eye className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white font-medium text-sm">{event.eventName}</span>
                </div>
                <span className="text-white/80 text-sm">{event.eventStart}</span>
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1">
                  <span className="text-white/60">Event End:</span>
                  <span className="text-white/80">{event.eventEnd}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-white/60">Client Name:</span>
                  <span className="text-white/80">{event.clientName}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-white/60">Contact Info:</span>
                  <span className="text-white/80">{event.contactInfo}</span>
                </div>
                <div className="pt-2 border-t border-purple-500/20">
                  <div className="flex justify-between items-start">
                    <span className="text-white/60">Venue:</span>
                    <span className="text-white/80 text-right flex-1 ml-2">{event.venue}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-pink-500/30 to-purple-600/30 border-b border-purple-500/30">
                <th className="text-left py-4 px-6 text-white font-semibold">Event Name</th>
                <th className="text-left py-4 px-6 text-white font-semibold">Event Start</th>
                <th className="text-left py-4 px-6 text-white font-semibold">Event End</th>
                <th className="text-left py-4 px-6 text-white font-semibold">Client Name</th>
                <th className="text-left py-4 px-6 text-white font-semibold">Contact Info</th>
                <th className="text-left py-4 px-6 text-white font-semibold">Venue</th>
                <th className="text-left py-4 px-6 text-white font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentEvents.map((event) => (
                <tr 
                  key={event.id}
                  className="border-b border-purple-500/20 hover:bg-purple-500/10 transition-colors cursor-pointer"
                  onClick={() => handleEventClick(event)}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-purple-500/30 rounded-full flex items-center justify-center">
                        <Eye className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-white">{event.eventName}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-white/80">{event.eventStart}</td>
                  <td className="py-4 px-6 text-white/80">{event.eventEnd}</td>
                  <td className="py-4 px-6 text-white/80">{event.clientName}</td>
                  <td className="py-4 px-6 text-white/80">{event.contactInfo}</td>
                  <td className="py-4 px-6 text-white/80">{event.venue}</td>
                  <td className="py-4 px-6">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEventClick(event);
                      }}
                      className="text-pink-400 hover:text-pink-300 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2 py-4 bg-black/10">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2 text-white/60 hover:text-white disabled:opacity-30 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-lg transition-colors text-sm ${
                currentPage === page
                  ? 'bg-pink-500 text-white'
                  : 'text-white/60 hover:text-white hover:bg-purple-500/20'
              }`}
            >
              {page}
            </button>
          ))}
          
          <span className="text-white/40">...</span>
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-2 text-white/60 hover:text-white disabled:opacity-30 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventRequests;