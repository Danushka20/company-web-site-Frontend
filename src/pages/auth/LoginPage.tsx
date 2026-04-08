import React from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Card from '../../components/ui/Card';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card title="Portal Login">
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <Input type="email" placeholder="name@company.com" className="w-full" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <Input type="password" placeholder="••••••••" className="w-full" />
          </div>
          <Button className="w-full">Sign In</Button>
          <div className="text-center text-sm">
            <a href="/register" className="text-blue-600 hover:underline">Register new company</a>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
