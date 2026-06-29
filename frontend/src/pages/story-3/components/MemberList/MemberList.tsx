'use client';

import React from 'react';
import { MemberListProps } from './MemberList.types';

export const MemberList: React.FC<MemberListProps> = ({
  members,
  isLoading,
  error,
  onUpdateRole,
  onRemoveMember,
}) => {
  if (isLoading) {
    return <div className="p-4 text-center">Loading members...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  if (members.length === 0) {
    return <div className="p-4 text-gray-500">No members found.</div>;
  }

  return (
    <div className="overflow-hidden border border-gray-200 rounded-lg">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="p-4 text-sm font-semibold text-gray-700">Name</th>
            <th className="p-4 text-sm font-semibold text-gray-700">Role</th>
            <th className="p-4 text-sm font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="p-4">
                <div className="font-medium">{member.name}</div>
                <div className="text-sm text-gray-500">{member.email}</div>
              </td>
              <td className="p-4">
                <select
                  value={member.role}
                  onChange={(e) => onUpdateRole(member.id, e.target.value as any)}
                  className="bg-transparent border border-gray-300 rounded px-2 py-1 text-sm focus:ring-2 focus:ring-primary"
                >
                  <option value="admin">Admin</option>
                  <option value="editor">Editor</option>
                  <option value="viewer">Viewer</option>
                </select>
              </td>
              <td className="p-4">
                <button
                  onClick={() => onRemoveMember(member.id)}
                  className="text-sm text-red-600 hover:text-red-800 font-medium"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
