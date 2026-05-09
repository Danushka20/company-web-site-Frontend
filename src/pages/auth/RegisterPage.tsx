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
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const payload = {
        name,
        email,
        mobileNumber: mobile,
        password,
        confirmPassword: confirmPassword,
        isCompanyEmployee: false,
      };
      await authApi.register(payload);
      // backend may not return token on register; attempt login
      const loginData = await authApi.login({ email, password });
      const token = loginData?.access_token ?? loginData?.token ?? null;
      if (token) {
        authStore.setToken(token);
        try {
          const me = await authApi.me();
          authStore.setUser(me?.user ?? me ?? null);
        } catch (err) {}
      }
      navigate("/home");
    } catch (err: any) {
      alert(err?.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card title="Register">
        <form className="space-y-4" onSubmit={submit}>
          <div>
            <label className="text-sm font-medium text-gray-700">Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Mobile</label>
            <Input
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="07xxxxxxx"
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
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <Input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
            />
          </div>
          <Button className="w-full" disabled={loading}>
            {loading ? "Creating..." : "Create Account"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default RegisterPage;
