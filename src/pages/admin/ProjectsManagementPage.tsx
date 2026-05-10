import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projectApi } from "../../api/productApi";
import { Plus, Edit2, Trash2, Loader, AlertCircle } from "lucide-react";

interface Project {
  id: string | number;
  title: string;
  client: string;
  category: string;
  status: string;
  startDate?: string;
  endDate?: string;
}

const ProjectsManagementPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await projectApi.getAll();
      setProjects(data || []);
    } catch (err: any) {
      const errorMsg =
        err?.response?.data?.message || "Failed to load projects";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string | number) => {
    try {
      await projectApi.delete(id);
      setProjects(projects.filter((p) => p.id !== id));
      setDeleteConfirm(null);
    } catch (err: any) {
      setError("Failed to delete project");
    }
  };

  const getStatusColor = (status: string) => {
    const statusMap: Record<string, string> = {
      Active: "bg-green-100 text-green-800",
      Completed: "bg-blue-100 text-blue-800",
      "In Progress": "bg-yellow-100 text-yellow-800",
      "On Hold": "bg-gray-100 text-gray-800",
    };
    return statusMap[status] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Projects</h1>
            <p className="text-gray-600 mt-2">Add, edit, and manage your projects</p>
          </div>
          <Link
            to="/admin/projects/add"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Plus size={20} />
            Add Project
          </Link>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="text-red-600 mt-0.5 flex-shrink-0" size={20} />
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center p-12 bg-white rounded-lg shadow">
            <Loader className="animate-spin text-blue-600 mr-3" size={24} />
            <p className="text-gray-600">Loading projects...</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center p-12 bg-white rounded-lg shadow">
            <h3 className="text-lg font-medium text-gray-900">No projects yet</h3>
            <p className="text-gray-600 mt-2">Create your first project to get started</p>
            <Link
              to="/admin/projects/add"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Create Project
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Project
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Client
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {projects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4">
                        <p className="text-sm font-medium text-gray-900">{project.title}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{project.client}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{project.category}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                            project.status
                          )}`}
                        >
                          {project.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {project.startDate
                          ? new Date(project.startDate).toLocaleDateString()
                          : "-"}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Link
                            to={`/admin/projects/edit/${project.id}`}
                            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
                          >
                            <Edit2 size={16} />
                            Edit
                          </Link>
                          <button
                            onClick={() => setDeleteConfirm(String(project.id))}
                            className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-medium text-sm"
                          >
                            <Trash2 size={16} />
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Delete Project?</h2>
            <p className="text-gray-600 text-sm mb-6">
              Are you sure you want to delete this project? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsManagementPage;
