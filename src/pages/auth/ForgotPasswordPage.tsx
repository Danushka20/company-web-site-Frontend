import React, { useState } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Card from "../../components/ui/Card";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../api/authApi";

const ForgotPasswordPage: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Password Strength Logic
  const getPasswordStrength = (pass: string) => {
    let score = 0;
    if (!pass) return { score: 0, label: "", color: "bg-gray-200" };
    if (pass.length > 8) score += 1;
    if (/[A-Z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    switch (score) {
      case 0:
      case 1:
        return { score, label: "Weak", color: "bg-red-500" };
      case 2:
      case 3:
        return { score, label: "Good", color: "bg-yellow-500" };
      case 4:
        return { score, label: "Strong", color: "bg-green-500" };
      default:
        return { score: 0, label: "", color: "bg-gray-200" };
    }
  };

  const strength = getPasswordStrength(password);

  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!email) {
      setError("Email is required");
      return;
    }
    setLoading(true);
    try {
      await authApi.forgotPassword(email);
      setSuccess("An OTP has been sent to your email.");
      setStep(2);
    } catch (err: any) {
      setError(err?.response?.data?.message || err?.response?.data?.error || "Failed to send OTP. Please check your email and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!otp || otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }
    setLoading(true);
    try {
      await authApi.verifyOtp(email, otp);
      setSuccess("OTP verified successfully. You can now reset your password.");
      setStep(3);
    } catch (err: any) {
      setError(err?.response?.data?.message || err?.response?.data?.error || "Invalid or expired OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);
    try {
      await authApi.resetPassword({ email, otp, password });
      setSuccess("Password has been reset successfully. You can now log in.");
      setTimeout(() => navigate("/"), 2000); // Redirect to home/login after 2s
    } catch (err: any) {
      setError(err?.response?.data?.message || err?.response?.data?.error || "Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card title="Forgot Password" className="w-full max-w-md">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-sm">
            {success}
          </div>
        )}

        {step === 1 && (
          <form className="space-y-4" onSubmit={handleRequestOtp}>
            <div className="text-sm text-gray-600 mb-4">
              Enter your email address and we will send you a 6-digit code to reset your password.
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="name@company.com"
                className="w-full"
                required
              />
            </div>
            <Button className="w-full" disabled={loading}>
              {loading ? "Sending OTP..." : "Send OTP"}
            </Button>
            <div className="text-center mt-4">
              <a href="/" className="text-sm text-blue-600 hover:underline">
                Back to Login
              </a>
            </div>
          </form>
        )}

        {step === 2 && (
          <form className="space-y-4" onSubmit={handleVerifyOtp}>
            <div className="text-sm text-gray-600 mb-4">
              We have sent a 6-digit OTP to <span className="font-semibold">{email}</span>. Please enter it below.
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">6-Digit OTP</label>
              <Input
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                type="text"
                placeholder="000000"
                className="w-full text-center tracking-widest text-lg"
                required
              />
            </div>
            <Button className="w-full" disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
            </Button>
            <div className="text-center mt-4 space-x-4">
              <button 
                type="button" 
                onClick={() => setStep(1)} 
                className="text-sm text-blue-600 hover:underline"
              >
                Change Email
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form className="space-y-4" onSubmit={handleResetPassword}>
            <div className="text-sm text-gray-600 mb-4">
              Please enter your new password below.
            </div>
            
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">New Password</label>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="w-full"
                required
              />
              
              {/* Password Strength Indicator */}
              {password && (
                <div className="mt-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-500">Password strength:</span>
                    <span className={`text-xs font-semibold ${
                      strength.label === 'Weak' ? 'text-red-500' : 
                      strength.label === 'Good' ? 'text-yellow-500' : 'text-green-500'
                    }`}>
                      {strength.label}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 flex gap-1">
                    <div className={`h-1.5 rounded-full ${strength.score >= 1 ? strength.color : 'bg-transparent'} w-1/4 transition-all duration-300`}></div>
                    <div className={`h-1.5 rounded-full ${strength.score >= 2 ? strength.color : 'bg-transparent'} w-1/4 transition-all duration-300`}></div>
                    <div className={`h-1.5 rounded-full ${strength.score >= 3 ? strength.color : 'bg-transparent'} w-1/4 transition-all duration-300`}></div>
                    <div className={`h-1.5 rounded-full ${strength.score >= 4 ? strength.color : 'bg-transparent'} w-1/4 transition-all duration-300`}></div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-1 mt-3">
              <label className="text-sm font-medium text-gray-700">Confirm Password</label>
              <Input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="w-full"
                required
              />
            </div>
            
            <Button className="w-full mt-4" disabled={loading}>
              {loading ? "Resetting..." : "Reset Password"}
            </Button>
          </form>
        )}
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
