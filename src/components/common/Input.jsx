import React from 'react';
import { Search, X } from 'lucide-react';

export const Input = ({
  label,
  error,
  icon: Icon,
  className = '',
  id,
  type = 'text',
  ...props
}) => {
  const inputId = id || (label ? `input-${label?.toLowerCase().replace(/\s+/g, '-')}` : undefined);

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="block text-xs font-semibold text-[#202024] mb-1.5">
          {label}
        </label>
      )}
      <div className="relative rounded-2xl shadow-2xs">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A1A1AA]">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          id={inputId}
          type={type}
          className={`block w-full text-xs font-medium rounded-2xl border border-[#ECECF1] bg-white py-2.5 ${
            Icon ? 'pl-10' : 'pl-4'
          } pr-4 text-[#202024] placeholder-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-[#6F56C9]/20 focus:border-[#6F56C9] transition-all ${
            error ? 'border-rose-300 focus:ring-rose-200 focus:border-rose-500' : ''
          } ${className}`}
          {...props}
        />
      </div>
      {error && <p className="mt-1.5 text-xs text-rose-500 font-medium">{error}</p>}
    </div>
  );
};

export const SearchInput = ({
  value = '',
  onChange,
  onClear,
  placeholder = 'Search...',
  size = 'md',
  className = '',
  ...props
}) => {
  const sizes = {
    sm: 'py-2 pl-9 pr-8 text-xs rounded-full',
    md: 'py-2.5 pl-10 pr-9 text-xs rounded-full',
    lg: 'py-3.5 pl-12 pr-10 text-sm rounded-full',
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5 left-3',
    md: 'w-4 h-4 left-3.5',
    lg: 'w-5 h-5 left-4',
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className={`absolute inset-y-0 flex items-center pointer-events-none text-[#A1A1AA] ${iconSizes[size]}`}>
        <Search className={size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`block w-full border border-[#ECECF1] bg-white text-[#202024] font-medium placeholder-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-[#6F56C9]/20 focus:border-[#6F56C9] transition-all duration-200 shadow-2xs ${sizes[size]}`}
        {...props}
      />
      {value && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#A1A1AA] hover:text-[#202024] focus:outline-none"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
