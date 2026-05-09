import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { X, UserPlus, Mail, Lock, Phone, User } from "lucide-react";
import Button from "../ui/Button";
import { authApi } from "../../api/authApi";
import { authStore } from "../../store/authStore";
import smartKodersLogo from "../../assets/company-logo.png";

interface Props {
  open: boolean;
  onClose: () => void;
  onSwitchToLogin?: () => void;
}

const RegisterModal: React.FC<Props> = ({ open, onClose, onSwitchToLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Animation states
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setIsRendered(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsRendered(false), 300);
    }
  }, [open]);

  if (!isRendered) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password !== passwordConfirmation) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        name,
        email,
        mobileNumber: mobile,
        password,
        password_confirmation: passwordConfirmation,
        isCompanyEmployee: false,
      };

      await authApi.register(payload);

      // auto-login
      const loginData = await authApi.login({ email, password });
      const token = loginData?.access_token ?? loginData?.token ?? null;
      if (token) {
        authStore.setToken(token);
        try {
          const me = await authApi.me();
          authStore.setUser(me?.user ?? me ?? null);
        } catch (_) {}
        onClose();
      }
    } catch (err: any) {
      const errorMsg =
        err?.response?.data?.message ||
        err?.response?.data?.errors?.[
          Object.keys(err.response.data.errors)[0]
        ]?.[0] ||
        "Registration failed. Please check your details.";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4 sm:p-0">
      {/* Blurred Backdrop */}
      <div
        className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`relative z-10 w-full max-w-[480px] overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 max-h-[90vh] overflow-y-auto ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}`}
      >
        {/* Top Gradient Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600" />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="px-8 pb-8 pt-8">
          <div className="mb-6 flex flex-col items-center text-center">
            <img
              src={smartKodersLogo}
              alt="Company Logo"
              className="mb-3 h-10 w-auto object-contain"
            />
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
              Create Account
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Join us today for a seamless experience
            </p>
          </div>

          <form className="space-y-4" onSubmit={submit}>
            {error && (
              <div className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-600">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500 min-w-[8px]" />
                  <span>{error}</span>
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-[13px] font-semibold tracking-wide text-slate-600 uppercase">
                Full Name
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <User size={16} />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="block h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  placeholder="e.g. John Doe"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-semibold tracking-wide text-slate-600 uppercase">
                Email Address
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <Mail size={16} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[13px] font-semibold tracking-wide text-slate-600 uppercase">
                Mobile Number
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <Phone size={16} />
                </div>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                  className="block h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  placeholder="07X XXX XXXX"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold tracking-wide text-slate-600 uppercase">
                  Password
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <Lock size={16} />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[13px] font-semibold tracking-wide text-slate-600 uppercase">
                  Confirm
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                    <Lock size={16} />
                  </div>
                  <input
                    type="password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    required
                    className="block h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] transition-all hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:from-blue-500 hover:to-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                  <span>Creating Account...</span>
                </div>
              ) : (
                <span className="flex items-center gap-2 text-[15px]">
                  Create Account <UserPlus size={18} />
                </span>
              )}
            </button>
          </form>
        </div>

        <div className="border-t border-slate-100 bg-slate-50 px-8 py-5 text-center">
          <p className="text-sm text-slate-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => {
                onClose();
                onSwitchToLogin && onSwitchToLogin();
              }}
              className="font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default RegisterModal;
