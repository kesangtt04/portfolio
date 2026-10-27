import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'font-semibold rounded-md transition-all duration-300 cursor-pointer flex items-center gap-2';

  const variantClasses = {
    primary:
      'px-6 py-3 bg-accent-cyan text-dark-bg-primary hover:bg-accent-teal hover:scale-105 shadow-lg hover:shadow-cyan-glow',
    secondary:
      'px-6 py-3 border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-dark-bg-primary hover:shadow-cyan-glow',
    tertiary:
      'text-accent-cyan hover:text-accent-teal underline underline-offset-2 hover:underline-offset-4',
  };

  const sizeClasses = {
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
