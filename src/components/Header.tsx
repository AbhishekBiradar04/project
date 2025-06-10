import React from 'react';
import { Bell, HelpCircle, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-black/10 backdrop-blur-sm border-b border-purple-500/30 px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="p-2 text-white/60 hover:text-white transition-colors lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo badge for mobile */}
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center lg:hidden">
            <span className="text-white text-sm font-bold">K</span>
          </div>
          
          {/* Floating avatar */}
          <div className="hidden lg:block">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full border-2 border-white/20"></div>
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Help Icon */}
          <button className="p-2 text-white/60 hover:text-white transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>

          {/* Notification Icon */}
          <button className="p-2 text-white/60 hover:text-white transition-colors relative">
            <Bell className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full"></div>
          </button>

          {/* User Info */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white/20"></div>
            <div className="hidden sm:block">
              <p className="text-white text-sm">Hi, <span className="font-semibold">Muhammad Asad</span></p>
              <p className="text-white/60 text-xs">welcome back!</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;