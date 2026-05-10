import React, { useState } from "react";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Card from "../../components/ui/Card";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../api/authApi";
import { authStore } from "../../store/authStore";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    setLoading(true);
    try {
      const data = await authApi.login({ email, password });
      const token = data?.access_token ?? data?.token ?? null;

      if (token) {
        authStore.setToken(token);
        // Use user data from login response if available
        if (data?.user) {
          authStore.setUser(data.user);
          // Redirect to admin dashboard if user is admin
          if (data.user.role === "admin" || data.user.role === "Admin") {
            navigate("/admin");
          } else {
            navigate("/home");
          }
        } else {
          // Fallback: fetch current user if not in response
          try {
            const me = await authApi.me();
            const user = me?.user ?? me ?? null;
            authStore.setUser(user);
            // Check role and redirect accordingly
            if (user?.role === "admin" || user?.role === "Admin") {
              navigate("/admin");
            } else {
              navigate("/home");
            }
          } catch (err) {
            console.error("Failed to fetch user info:", err);
            navigate("/home");
          }
        }
      } else {
        setError("Login failed: No token received");
      }
    } catch (err: any) {
      const errorMsg =
        err?.response?.data?.message || "Login failed. Please try again.";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card title="Portal Login">
        <form className="space-y-4" onSubmit={submit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="name@company.com"
              className="w-full"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="w-full"
              required
            />
          </div>

          <Button className="w-full" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </Button>

          <div className="text-center text-sm space-y-2">
            <div>
              <a href="/register" className="text-blue-600 hover:underline">
                Create new account
              </a>
            </div>
            <div>
              <a
                href="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
