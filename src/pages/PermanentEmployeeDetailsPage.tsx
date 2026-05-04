import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Edit } from "lucide-react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";
import EditProfileModal from "../components/profile/EditProfileModal";
import type { EditProfileData } from "../types/EditProfile";
import permanentEmployees from "../data/permanentEmployeesData";

const PermanentEmployeeDetailsPage: React.FC = () => {
  useScrollToTop();
  const { employeeId } = useParams<{ employeeId?: string }>();
  const navigate = useNavigate();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [employee, setEmployee] = useState(
    permanentEmployees.find((item) => item.id === employeeId),
  );

  if (!employee) {
    return (
      <main className="min-h-screen bg-[#f4f5f7] px-4 pb-0 pt-5 text-[#24364d] sm:px-6 lg:px-10">
        <Navbar />
        <div className="mx-auto max-w-[1080px] py-20 text-center">
          <h1 className="text-2xl font-bold">Employee not found</h1>
          <button
            onClick={() => navigate("/strength")}
            className="mt-4 text-blue-500 hover:text-blue-600"
          >
            ← Back to Our Strength
          </button>
        </div>
        <Footer />
      </main>
    );
  }

  const handleEditSave = async (formData: EditProfileData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Update employee data
      setEmployee((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          name: formData.name,
          position: formData.position,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          about: formData.bio,
          skills: formData.skills
            .split(",")
            .map((s) => s.trim())
            .filter((s) => s),
        };
      });

      setIsEditOpen(false);

      // Show success message
      alert("Profile updated successfully!");
    } catch (error) {
      alert("Failed to update profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f4f5f7] px-4 pb-0 pt-5 text-[#24364d] sm:px-6 lg:px-10">
      <Navbar />

      <div className="-mx-4 bg-white px-4 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto w-full max-w-[1080px] pt-8 pb-8 flex items-center justify-between">
          <button
            onClick={() => navigate("/strength")}
            className="inline-flex items-center gap-2 text-[#255ddf] hover:text-blue-700 font-medium"
          >
            <ArrowLeft size={18} />
            Back to Our Strength
          </button>
          <button
            onClick={() => setIsEditOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50 border border-blue-600"
          >
            <Edit size={18} />
            Edit Profile
          </button>
        </section>
      </div>

      <div className="-mx-4 bg-white px-4 pb-12 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto w-full max-w-[1080px]">
          <div className="rounded-2xl bg-gradient-to-r from-[#1e40ff] to-[#1d4ed8] p-6 text-white shadow-[0_18px_40px_rgba(30,64,255,0.35)] sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white/40 bg-white">
                <img
                  src={employee.imageUrl}
                  alt={employee.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex-1">
                <h1 className="m-0 text-[2rem] font-bold leading-tight">
                  {employee.name}
                </h1>
                <p className="text-[0.95rem] text-white/90">
                  {employee.position}
                </p>
                <p className="text-white/80">
                  {employee.department} • {employee.experience}
                </p>
              </div>

              <div className="flex flex-col gap-2 rounded-xl bg-white/15 p-4 backdrop-blur-sm">
                <div>
                  <p className="text-sm text-white/70">Level</p>
                  <p className="font-semibold text-white">{employee.level}</p>
                </div>
                <div>
                  <p className="text-sm text-white/70">Since</p>
                  <p className="font-semibold text-white">
                    {employee.joinDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="-mx-4 bg-white px-4 py-12 sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
        <section className="mx-auto w-full max-w-[1080px]">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* About */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-[#07102a]">
                  About
                </h2>
                <p className="text-[#5b6b80] leading-relaxed">
                  {employee.about}
                </p>
              </div>

              {/* Specialization */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-[#07102a]">
                  Specialization
                </h2>
                <p className="text-[#5b6b80]">{employee.specialization}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Skills */}
              <div className="mb-8 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_22px_rgba(20,35,58,0.08)]">
                <h3 className="mb-4 text-lg font-semibold text-[#07102a]">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {employee.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info Card */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_22px_rgba(20,35,58,0.08)]">
                <h3 className="mb-4 text-lg font-semibold text-[#07102a]">
                  Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-[#6b7a8f]">
                      Department
                    </p>
                    <p className="mt-1 text-[#07102a]">{employee.department}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#6b7a8f]">
                      Position
                    </p>
                    <p className="mt-1 text-[#07102a]">{employee.position}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#6b7a8f]">Level</p>
                    <p className="mt-1 text-[#07102a]">{employee.level}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#6b7a8f]">
                      Experience
                    </p>
                    <p className="mt-1 text-[#07102a]">{employee.experience}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#6b7a8f]">Joined</p>
                    <p className="mt-1 text-[#07102a]">{employee.joinDate}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#6b7a8f]">Status</p>
                    <p className="mt-1 inline-flex rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                      {employee.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <EditProfileModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onSave={handleEditSave}
        initialData={{
          name: employee.name,
          position: employee.position,
          email: employee.email,
          phone: employee.phone,
          location: employee.location,
          bio: employee.about,
          skills: employee.skills,
        }}
        requiresApproval={false}
        isSubmitting={isSubmitting}
      />

      <div className="-mx-4 about-footer-soft sm:-mx-6 lg:-mx-10">
        <Footer />
      </div>
    </main>
  );
};

export default PermanentEmployeeDetailsPage;
