import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, FileText, Users, Settings, BarChart3, LogOut } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { logout } = useAuth();

  const handleLogout = () => {
    void logout();
  };

  const adminMenuItems = [
    { id: "overview", label: "Dashboard", icon: BarChart3, href: "#" },
    { id: "projects", label: "Manage Projects", icon: FileText, href: "/admin/projects" },
    { id: "users", label: "Manage Users", icon: Users, href: "/admin/users" },
    { id: "settings", label: "Settings", icon: Settings, href: "#" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
          <p className="text-sm text-gray-500 mt-1">Manage your platform</p>
        </div>

        <nav className="px-4 py-4 space-y-2 flex-1">
          {adminMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="px-4 pb-6">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full inline-flex items-center justify-center gap-2 border border-red-200 text-red-600 px-4 py-3 rounded-lg hover:bg-red-50 transition-colors font-medium"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-2">Welcome to the administration panel</p>
            </div>
            <Link
              to="/admin/projects/add"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Plus size={20} />
              Add New Project
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Projects", value: "24", color: "blue" },
              { label: "Total Users", value: "156", color: "green" },
              { label: "Active Projects", value: "12", color: "purple" },
              { label: "Pending Tasks", value: "8", color: "orange" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6">
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                <p className={`text-3xl font-bold mt-2 text-${stat.color}-600`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Projects Table Preview */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Recent Projects</h2>
              <Link
                to="/admin/projects"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View All →
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Project Name
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Progress
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3].map((item) => (
                    <tr key={item} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        Project #{item}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${30 + item * 15}%` }}
                          ></div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <button className="text-blue-600 hover:text-blue-700 font-medium mr-4">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-700 font-medium">
                          Delete
                        </button>
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
