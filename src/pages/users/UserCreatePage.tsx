import React from 'react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

/**
 * USER CREATE PAGE
 * Form to add a new team member to the tenant.
 */
const UserCreatePage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Add New Team Member</h1>
        <p className="text-gray-500">Assign a role and email to the new tenant user.</p>
      </header>

      <div className="bg-white border rounded p-8 shadow-sm">
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium">Full Name</label>
              <Input className="w-full" placeholder="Ex: Alex Johnson" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Email</label>
              <Input className="w-full" type="email" placeholder="alex@company.com" />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Role</label>
            <select className="w-full p-2 border rounded border-gray-300">
              <option>Member</option>
              <option>Admin</option>
            </select>
          </div>
          <div className="pt-4 flex space-x-3">
             <Button>Create User</Button>
             <button type="button" className="text-gray-600 hover:text-gray-900 border px-4 py-2 rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserCreatePage;
