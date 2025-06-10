import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Calendar, Users, DollarSign, User, LogOut, FileText, BarChart3, UserCheck, X } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState({
    events: true,
    users: true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const menuItems = [
    {
      id: 'events',
      label: 'Events',
      icon: Calendar,
      expandable: true,
      children: [
        { id: 'new-requests', label: 'New Requests', view: 'event-requests' },
        { id: 'estimate', label: 'Estimate', view: 'estimate' },
        { id: 'events-list', label: 'Events', view: 'events-list' },
        { id: 'partial-requests', label: 'Partial Requests', view: 'partial-requests' }
      ]
    },
    {
      id: 'positions',
      label: 'Positions',
      icon: BarChart3,
      expandable: false,
      view: 'positions'
    },
    {
      id: 'contractors',
      label: 'Contractors',
      icon: UserCheck,
      expandable: false,
      view: 'contractors'
    },
    {
      id: 'users',
      label: 'Users',
      icon: Users,
      expandable: true,
      children: [
        { id: 'admins', label: 'Admins', view: 'admins' },
        { id: 'clients', label: 'Clients', view: 'clients' },
        { id: 'coordinators', label: 'Coordinators', view: 'coordinators' }
      ]
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
      expandable: false,
      view: 'profile'
    }
  ];

  const handleItemClick = (item: any) => {
    if (item.expandable) {
      toggleSection(item.id);
    } else if (item.view) {
      onViewChange(item.view);
    }
  };

  const handleChildClick = (child: any) => {
    onViewChange(child.view);
  };

  const isChildActive = (child: any) => {
    return currentView === child.view;
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:relative inset-y-0 left-0 z-50 lg:z-auto
        w-64 bg-black/20 backdrop-blur-sm border-r border-purple-500/30 
        flex flex-col transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Mobile Close Button */}
        <div className="lg:hidden absolute top-4 right-4">
          <button
            onClick={onClose}
            className="p-2 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Logo */}
        <div className="p-6 border-b border-purple-500/30">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
            <DollarSign className="text-white w-6 h-6" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => handleItemClick(item)}
                className="w-full flex items-center justify-between p-3 text-left text-white/80 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.expandable && (
                  expandedSections[item.id] ? 
                  <ChevronDown className="w-4 h-4" /> : 
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              
              {item.expandable && expandedSections[item.id] && item.children && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.children.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => handleChildClick(child)}
                      className={`w-full flex items-center justify-between p-2 text-left rounded-lg transition-all duration-200 ${
                        isChildActive(child)
                          ? 'text-white bg-purple-500/30 border-r-2 border-pink-500' 
                          : 'text-white/60 hover:text-white hover:bg-purple-500/10'
                      }`}
                    >
                      <span>{child.label}</span>
                      {isChildActive(child) && <div className="w-2 h-2 bg-pink-500 rounded-full" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-purple-500/30">
          <button className="w-full flex items-center space-x-3 p-3 text-white/80 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all duration-200">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;