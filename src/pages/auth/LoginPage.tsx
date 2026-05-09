import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Card from '../../components/ui/Card';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../api/authApi';
import { authStore } from '../../store/authStore';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await authApi.login({ email, password });
      const token = data?.access_token ?? data?.token ?? null;
      if (token) {
        authStore.setToken(token);
        // optionally fetch current user
        try {
          const me = await authApi.me();
          authStore.setUser(me?.user ?? me ?? null);
        } catch (err) {}
        navigate('/home');
      } else {
        // fallback: if login endpoint returned message only
        navigate('/home');
      }
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card title="Portal Login">
        <form className="space-y-4" onSubmit={submit}>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@company.com" className="w-full" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" className="w-full" />
          </div>
          <Button className="w-full" disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</Button>
          <div className="text-center text-sm">
            <a href="/register" className="text-blue-600 hover:underline">Register new company</a>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
