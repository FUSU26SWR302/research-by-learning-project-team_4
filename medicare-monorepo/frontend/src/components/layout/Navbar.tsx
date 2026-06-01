import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Bell, User, Settings, LogOut } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { Avatar } from '../ui';
import { useLogout } from '../../features/auth/hooks';

const NAV_LINKS = [
  { label: 'Trang Chủ', href: '/' },
  { label: 'Ai', href: '/ai' },
  { label: 'Chuyên Khoa', href: '/chuyen-khoa' },
  { label: 'Bác Sĩ', href: '/bac-si' },
  { label: 'Lịch Sử', href: '/lich-su' },
  { label: 'Phòng Khám', href: '/phong-kham' },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { isAuthenticated, user } = useAuthStore();
  const logout = useLogout();
  const location = useLocation();

  return (
    <header style={{ background: '#1a56db', boxShadow: '0 2px 16px rgba(26,86,219,0.15)' }} className="sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" fill="#1a56db" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg tracking-tight" style={{ fontFamily: 'Lexend' }}>MediCare AI Clinic</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.href ? 'bg-white/20 text-white' : 'text-blue-100 hover:bg-white/10 hover:text-white'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {isAuthenticated && user ? (
              <>
                <button className="relative p-2 text-blue-100 hover:bg-white/10 rounded-lg transition-colors">
                  <Bell size={18} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-400 rounded-full" />
                </button>
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(o => !o)}
                    className="flex items-center gap-2 p-1.5 rounded-xl text-white hover:bg-white/10 transition-colors"
                    aria-label="Menu tài khoản"
                  >
                    <Avatar name={user.fullName} src={user.avatar} size="sm" />
                    <span className="hidden xl:block text-sm font-medium max-w-[180px] truncate" title={user.fullName}>
                      {user.fullName}
                    </span>
                    <ChevronDown size={14} className={`hidden sm:block transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900 truncate">{user.fullName}</p>
                        <p className="text-xs text-gray-500 truncate mt-0.5">{user.email}</p>
                      </div>
                      <Link to="/ho-so" onClick={() => setUserMenuOpen(false)} className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        <User size={15} className="text-gray-400" /> Hồ sơ cá nhân
                      </Link>
                      <Link to="/cai-dat" onClick={() => setUserMenuOpen(false)} className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                        <Settings size={15} className="text-gray-400" /> Cài đặt hệ thống
                      </Link>
                      <hr className="my-1 border-gray-100" />
                      <button onClick={() => { setUserMenuOpen(false); logout(); }} className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 w-full transition-colors">
                        <LogOut size={15} /> Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/dang-nhap" className="text-sm font-medium text-blue-100 hover:text-white px-3 py-2 transition-colors">Đăng nhập</Link>
                <Link to="/dang-ky" className="text-sm font-semibold text-blue-700 bg-white hover:bg-blue-50 px-4 py-2 rounded-xl transition-colors">Đăng ký</Link>
              </div>
            )}
            <button className="lg:hidden p-2 text-white" onClick={() => setMobileOpen(o => !o)}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1342a8] border-t border-white/10">
          {NAV_LINKS.map(link => (
            <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)}
              className="block px-6 py-3 text-sm text-blue-100 hover:text-white hover:bg-white/10 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
