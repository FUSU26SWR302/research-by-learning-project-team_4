import React, { useState } from 'react';
import { Bell, Globe, Shield, CreditCard, ChevronRight, Check } from 'lucide-react';
import MainLayout from '../../../components/layout/MainLayout';
import { Card, Toggle, HealthScoreBadge } from '../../../components/ui';
import Button from '../../../components/ui/Button';
import { useSettings, useUpdateSettings } from '../hooks';
import { useAuthStore } from '../../../store/authStore';
import { Avatar } from '../../../components/ui';

const SettingsPage: React.FC = () => {
  useSettings();
  const updateSettings = useUpdateSettings();
  const { user } = useAuthStore();

  const [localSettings, setLocalSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    dataSharing: true,
    appointmentReminders: true,
    aiResults: true,
  });

  const handleToggle = (key: keyof typeof localSettings) => {
    const next = { ...localSettings, [key]: !localSettings[key] };
    setLocalSettings(next);
    updateSettings.mutate(next);
  };

  const PLANS = [
    { name: 'MacBook Pro - Ultimate', price: '199.000đ/tháng', status: 'active', icon: '💎' },
    { name: 'iPhone Pro - Sadoc', price: '9.000đ/tháng', status: 'inactive', icon: '📱' },
  ];

  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen py-8">
        <div className="container max-w-3xl">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Lexend' }}>Cài đặt hệ thống</h1>
            <p className="text-sm text-gray-500 mt-1">Quản lý tùy chọn cá nhân, bảo mật và thông báo trong hệ thống MediCare AI Clinic.</p>
          </div>

          {user && (
            <Card className="mb-5 flex items-center gap-4">
              <Avatar name={user.fullName} src={user.avatar} size="lg" />
              <div className="flex-1">
                <h2 className="font-semibold text-gray-900">{user.fullName}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <HealthScoreBadge score={user.healthScore || 90} />
            </Card>
          )}

          <Card className="mb-5">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield size={15} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Tài khoản & Bảo mật</h3>
            </div>
            <div className="space-y-1">
              {[
                { label: 'Thay đổi mật khẩu', desc: 'Cập nhật mật khẩu của bạn' },
                { label: 'Xác thực 2 bước', desc: 'Tăng cường bảo mật tài khoản' },
                { label: 'Phiên đăng nhập', desc: 'Quản lý thiết bị đang đăng nhập' },
              ].map(item => (
                <button
                  key={item.label}
                  type="button"
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  <div>
                    <div className="text-sm font-medium text-gray-800">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </div>
                  <ChevronRight size={15} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
                </button>
              ))}
            </div>
          </Card>

          <Card className="mb-5">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                <CreditCard size={15} className="text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Thuê bao đang sử dụng</h3>
            </div>
            <div className="space-y-3">
              {PLANS.map(plan => (
                <div key={plan.name} className={`flex items-center justify-between p-3.5 rounded-xl border-2 transition-colors ${plan.status === 'active' ? 'border-blue-200 bg-blue-50' : 'border-gray-100 bg-gray-50'}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{plan.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{plan.name}</div>
                      <div className="text-xs text-gray-500">{plan.price}</div>
                    </div>
                  </div>
                  {plan.status === 'active' ? (
                    <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Check size={11} /> Thật bị lỗi
                    </span>
                  ) : (
                    <button type="button" className="text-xs font-medium text-gray-500 hover:text-blue-600 transition-colors">Đang tắt</button>
                  )}
                </div>
              ))}
            </div>
          </Card>

          <Card className="mb-5">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Bell size={15} className="text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Thông báo</h3>
            </div>
            <div className="space-y-4">
              {[
                { key: 'emailNotifications' as const, label: 'Nhắc nhở lịch hẹn', channels: 'Email · SMS' },
                { key: 'aiResults' as const, label: 'Kết quả xét nghiệm AI', channels: 'Email · SMS' },
              ].map(item => (
                <div key={item.key} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-800">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.channels}</div>
                  </div>
                  <Toggle checked={localSettings[item.key]} onChange={() => handleToggle(item.key)} />
                </div>
              ))}
            </div>
          </Card>

          <Card className="mb-5">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Globe size={15} className="text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Giao diện & Ngôn ngữ</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-800">Ngôn ngữ ứng dụng</div>
                <div className="text-xs text-gray-500">Hiển thị giao diện theo ngôn ngữ đã chọn</div>
              </div>
              <select className="text-sm border border-gray-200 rounded-xl px-3 py-2 outline-none focus:border-blue-500 bg-white">
                <option value="vi">Tiếng Việt</option>
                <option value="en">English</option>
              </select>
            </div>
          </Card>

          <Card className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <Shield size={15} className="text-red-500" />
              </div>
              <h3 className="font-semibold text-gray-900">Quyền riêng tư</h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-800">Chia sẻ dữ liệu để cải thiện</div>
                <div className="text-xs text-gray-500 max-w-xs">Cho phép MediCare sử dụng dữ liệu ẩn danh để cải thiện dịch vụ AI</div>
              </div>
              <Toggle checked={localSettings.dataSharing} onChange={() => handleToggle('dataSharing')} />
            </div>
          </Card>

          <div className="flex justify-between">
            <Button variant="danger" size="sm">Xóa tài khoản</Button>
            <Button onClick={() => updateSettings.mutate(localSettings)} loading={updateSettings.isPending}>
              Lưu thay đổi
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SettingsPage;
