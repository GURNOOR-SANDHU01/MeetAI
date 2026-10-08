import React from 'react';

export const Avatar = ({ src, name = '', size = 'md', className = '' }) => {
  const sizes = {
    xs: 'w-6 h-6 text-[10px]',
    sm: 'w-7 h-7 text-xs',
    md: 'w-8 h-8 text-xs',
    lg: 'w-10 h-10 text-sm',
    xl: 'w-12 h-12 text-base',
  };

  const getInitials = (n) => {
    if (!n) return '?';
    const parts = n.trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return n.substring(0, 2).toUpperCase();
  };

  return src ? (
    <img
      src={src}
      alt={name}
      className={`rounded-full object-cover border border-slate-200/80 shadow-2xs ${sizes[size]} ${className}`}
    />
  ) : (
    <div
      className={`rounded-full bg-slate-800 text-white font-semibold flex items-center justify-center border border-slate-700 ${sizes[size]} ${className}`}
      title={name}
    >
      {getInitials(name)}
    </div>
  );
};

export const AvatarGroup = ({ users = [], max = 4, size = 'sm' }) => {
  const visible = users.slice(0, max);
  const remaining = users.length - max;

  return (
    <div className="flex items-center -space-x-2 overflow-hidden py-0.5">
      {visible.map((user, idx) => (
        <Avatar
          key={idx}
          src={user.avatar}
          name={user.name}
          size={size}
          className="ring-2 ring-white"
        />
      ))}
      {remaining > 0 && (
        <div className={`rounded-full bg-slate-100 text-slate-700 font-medium flex items-center justify-center border border-slate-200 ring-2 ring-white ${size === 'sm' ? 'w-7 h-7 text-[11px]' : 'w-8 h-8 text-xs'}`}>
          +{remaining}
        </div>
      )}
    </div>
  );
};
