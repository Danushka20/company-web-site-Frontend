import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { X, LogIn, Mail, Lock } from "lucide-react";
import Button from "../ui/Button";
import { authApi } from "../../api/authApi";
import { authStore } from "../../store/authStore";
import smartKodersLogo from "../../assets/company-logo.png";

interface Props {
  open: boolean;
  onClose: () => void;
  onSwitchToRegister?: () => void;
}

const LoginModal: React.FC<Props> = ({ open, onClose, onSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setIsRendered(true);
      // Small delay to allow the DOM to render before triggering the transition
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      // Wait for the transition to finish before removing from DOM
      setTimeout(() => setIsRendered(false), 300);
    }
  }, [open]);

  if (!isRendered) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await authApi.login({ email, password });
      const token = data?.access_token ?? data?.token ?? null;
      if (token) {
        authStore.setToken(token);

        // Use user data from login response if available
        if (data?.user) {
          authStore.setUser(data.user);
          onClose();
          // Redirect to admin dashboard if user is admin
          if (data.user.role === "admin" || data.user.role === "Admin") {
            navigate("/admin");
          }
        } else {
          // Fallback: fetch current user if not in response
          try {
            const me = await authApi.me();
            const user = me?.user ?? me ?? null;
            authStore.setUser(user);
            onClose();
            // Check role and redirect accordingly
            if (user?.role === "admin" || user?.role === "Admin") {
              navigate("/admin");
            }
          } catch (err) {
            console.error("Failed to fetch user info:", err);
            onClose();
          }
        }
      } else {
        setError("Login failed: no token received");
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || "Invalid email or password");
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
        className={`relative z-10 w-full max-w-[420px] overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 ${isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}`}
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

        <div className="px-8 pb-8 pt-10">
          <div className="mb-8 flex flex-col items-center text-center">
            <img
              src={smartKodersLogo}
              alt="Company Logo"
              className="mb-4 h-12 w-auto object-contain"
            />
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Please enter your details to sign in
            </p>
          </div>

          <form className="space-y-5" onSubmit={submit}>
            {error && (
              <div className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-600">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  {error}
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700">
                Email Address
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    navigate("/forgot-password");
                  }}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <Lock size={18} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 hover:bg-white focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  placeholder="••••••••"
                />
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
                  <span>Signing in...</span>
                </div>
              ) : (
                <span className="flex items-center gap-2 text-[15px]">
                  Sign In <LogIn size={18} />
                </span>
              )}
            </button>
          </form>
        </div>

        <div className="border-t border-slate-100 bg-slate-50 px-8 py-5 text-center">
          <p className="text-sm text-slate-600">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => {
                onClose();
                onSwitchToRegister && onSwitchToRegister();
              }}
              className="font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              Create Account
            </button>
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default LoginModal;
