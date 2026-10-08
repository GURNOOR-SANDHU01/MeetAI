import React from 'react';

export const Card = ({
  children,
  className = '',
  padding = 'p-6',
  hover = false,
  onClick,
  ...props
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-[24px] border border-[#ECECF1] shadow-2xs ${padding} ${
        hover ? 'hover:border-[#CBB7EC]/60 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`flex items-center justify-between pb-4 mb-4 border-b border-[#ECECF1]/70 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`font-bold text-[#202024] text-base tracking-tight ${className}`}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-xs text-[#73737C] mt-0.5 ${className}`}>{children}</p>
);
