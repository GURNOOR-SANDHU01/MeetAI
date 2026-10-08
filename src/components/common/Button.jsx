import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-[#6F56C9]/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const variants = {
    primary:
      'bg-[#6F56C9] text-white hover:bg-[#5B43B7] active:bg-[#4C36A5] shadow-xs hover:shadow-md hover:-translate-y-0.5',
    secondary:
      'bg-white text-[#6F56C9] border border-[#6F56C9]/25 hover:bg-[#F8F6FC] hover:border-[#6F56C9]/40 active:bg-[#F0EBFA]',
    outline:
      'bg-white text-[#202024] border border-[#ECECF1] hover:bg-[#FAFAFC] hover:border-[#D4D4DC] text-[#202024]',
    ghost:
      'bg-transparent text-[#73737C] hover:bg-[#F8F6FC] hover:text-[#6F56C9]',
    danger:
      'bg-rose-500 text-white hover:bg-rose-600 active:bg-rose-700 shadow-xs',
    brand:
      'bg-[#6F56C9] text-white hover:bg-[#5B43B7] active:bg-[#4C36A5] shadow-xs hover:shadow-md hover:-translate-y-0.5',
    pastel:
      'bg-[#F8F6FC] text-[#6F56C9] hover:bg-[#F0EBFA] border border-[#E2D9F7]',
  };

  const sizes = {
    sm: 'text-xs px-4 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
    icon: 'p-2.5 text-[#73737C] hover:text-[#6F56C9] rounded-full',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
};
