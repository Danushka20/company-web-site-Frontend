import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  FileText,
  Users,
  Settings,
  BarChart3,
  LogOut,
  TrendingUp,
  Activity,
  CheckCircle,
  Clock,
  MoreVertical,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { logout } = useAuth();

  const handleLogout = () => {
    void logout();
  };

  const adminMenuItems = [
    { id: "overview", label: "Dashboard", icon: BarChart3, href: "#" },
    {
      id: "projects",
      label: "Manage Projects",
      icon: FileText,
      href: "/admin/projects",
    },
    { id: "users", label: "Manage Users", icon: Users, href: "/admin/users" },
    { id: "settings", label: "Settings", icon: Settings, href: "#" },
  ];

  const stats = [
    {
      label: "Total Projects",
      value: "24",
      icon: FileText,
      trend: "+12%",
      gradientTo: "to-blue-50",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      iconColor: "text-blue-500",
    },
    {
      label: "Total Users",
      value: "156",
      icon: Users,
      trend: "+5%",
      gradientTo: "to-emerald-50",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      iconColor: "text-emerald-500",
    },
    {
      label: "Active Projects",
      value: "12",
      icon: Activity,
      trend: "+2",
      gradientTo: "to-violet-50",
      bgColor: "bg-violet-50",
      textColor: "text-violet-600",
      iconColor: "text-violet-500",
    },
    {
      label: "Pending Tasks",
      value: "8",
      icon: Clock,
      trend: "-3",
      gradientTo: "to-amber-50",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      iconColor: "text-amber-500",
    },
  ];

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans selection:bg-blue-500/30">
      {/* Sidebar - Modern Dark Theme */}
      <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col relative z-20 shadow-2xl transition-all duration-300">
        <div className="p-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <BarChart3 className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Sky Smart</h2>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mt-0.5">Admin Portal</p>
            </div>
          </div>
        </div>

        <nav className="px-4 py-4 space-y-1.5 flex-1">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4 px-4">Menu</div>
          {adminMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? "bg-blue-500/10 text-blue-400 font-semibold"
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                )}
                <Icon
                  size={20}
                  className={`transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}
                />
                <span className="tracking-wide">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-6 border-t border-slate-800/50">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full group flex items-center justify-center gap-2 bg-slate-800/50 text-slate-300 px-4 py-3 rounded-xl hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 font-medium"
          >
            <LogOut size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto relative">
        {/* Decorative Background Element */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />

        <div className="max-w-7xl mx-auto p-8 lg:p-12">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                Dashboard Overview
              </h1>
              <p className="text-slate-500 text-lg flex items-center gap-2">
                Welcome back! Here's what's happening today.
              </p>
            </div>
            <Link
              to="/admin/projects/add"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-all duration-300 font-semibold shadow-lg shadow-slate-900/20 hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
            >
              <Plus size={20} />
              New Project
            </Link>
          </header>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white ${stat.gradientTo} rounded-bl-full opacity-50 -z-0 transition-transform duration-500 group-hover:scale-110`} />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                        <Icon size={24} className={stat.iconColor} />
                      </div>
                      <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${stat.trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                        {stat.trend.startsWith('+') ? <TrendingUp size={12} /> : <TrendingUp size={12} className="rotate-180" />}
                        {stat.trend}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-slate-500 text-sm font-semibold tracking-wide uppercase mb-1">
                        {stat.label}
                      </h3>
                      <p className={`text-4xl font-extrabold text-slate-800`}>
                        {stat.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Projects Table Preview */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-white/50 backdrop-blur-xl">
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <CheckCircle className="text-blue-500" size={24} />
                Active Projects
              </h2>
              <Link
                to="/admin/projects"
                className="text-blue-600 hover:text-blue-700 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View All Projects &rarr;
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Project Name</th>
                    <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                    <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Progress</th>
                    <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { id: 1, name: "Nexus Core Upgrade", status: "Active", progress: 45, bgClass: "bg-blue-500" },
                    { id: 2, name: "Zephyr Mobile App", status: "On Track", progress: 78, bgClass: "bg-emerald-500" },
                    { id: 3, name: "Quantum Analytics", status: "Delayed", progress: 30, bgClass: "bg-amber-500" },
                  ].map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-slate-50/80 transition-colors duration-200 group"
                    >
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${item.bgClass}`} />
                          <span className="text-sm font-semibold text-slate-800">{item.name}</span>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                          item.status === 'Active' ? 'bg-blue-50 text-blue-700 border border-blue-100' :
                          item.status === 'On Track' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                          'bg-amber-50 text-amber-700 border border-amber-100'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-8 py-5 w-1/3">
                        <div className="flex items-center gap-3">
                          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                            <div
                              className={`${item.bgClass} h-2 rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: `${item.progress}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold text-slate-500 w-8">{item.progress}%</span>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <span className="sr-only">Edit</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                          </button>
                          <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <span className="sr-only">Delete</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                          </button>
                          <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                            <MoreVertical size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
