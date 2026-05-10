import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Card from "../../components/ui/Card";
import { authApi } from "../../api/authApi";
import { authStore } from "../../store/authStore";

const RegisterPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (
      !name ||
      !email ||
      !mobileNumber ||
      !password ||
      !password_confirmation
    ) {
      setError("All fields are required");
      return false;
    }
    if (password !== password_confirmation) {
      setError("Passwords do not match");
      return false;
    }
    if (password.length < 4) {
      setError("Password must be at least 4 characters");
      return false;
    }
    if (password.length > 15) {
      setError("Password must not exceed 15 characters");
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      setError("Name must contain only letters and spaces");
      return false;
    }
    return true;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name,
        email,
        mobileNumber,
        password,
        password_confirmation,
        isCompanyEmployee: false,
      };

      await authApi.register(payload);

      // Attempt login after successful registration
      const loginData = await authApi.login({ email, password });
      const token = loginData?.access_token ?? loginData?.token ?? null;

      if (token) {
        authStore.setToken(token);
        // Use user data from login response if available
        if (loginData?.user) {
          authStore.setUser(loginData.user);

          // Redirect to admin dashboard if user is admin, otherwise to home
          if (loginData.user.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/home");
          }
        } else {
          // Fallback: fetch current user if not in response
          try {
            const me = await authApi.me();
            authStore.setUser(me?.user ?? me ?? null);
            navigate("/home");
          } catch (err) {
            console.error("Failed to fetch user info:", err);
            navigate("/home");
          }
        }
      }
    } catch (err: any) {
      const errorMsg =
        err?.response?.data?.message ||
        err?.response?.data?.errors?.[
          Object.keys(err.response.data.errors)[0]
        ]?.[0] ||
        "Registration failed";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card title="Create New Account">
        <form className="space-y-4" onSubmit={submit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="name@company.com"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Mobile</label>
            <Input
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="07xxxxxxx"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              required
            />
            <small className="text-gray-600">Minimum 4 characters</small>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <Input
              value={password_confirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              type="password"
              placeholder="••••••••"
              required
            />
          </div>

          <Button className="w-full" disabled={loading}>
            {loading ? "Creating Account..." : "Create Account"}
          </Button>

          <div className="text-center text-sm">
            Already have an account?{" "}
              <a href="/" className="text-blue-600 hover:underline">
              Sign In
            </a>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default RegisterPage;
