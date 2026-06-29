export interface Member {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
}

export interface MemberListProps {
  members: Member[];
  isLoading?: boolean;
  error?: string;
  onUpdateRole: (memberId: string, newRole: Member['role']) => void;
  onRemoveMember: (memberId: string) => void;
}
