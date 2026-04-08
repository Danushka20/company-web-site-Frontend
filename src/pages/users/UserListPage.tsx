import React, { useState, useEffect } from 'react';

const UserListPage: React.FC = () => {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    const mockData = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];
    setUsers(mockData);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Our Team Members</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
};

export default UserListPage;
