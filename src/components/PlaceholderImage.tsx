'use client';

import { useId } from 'react';

interface PlaceholderImageProps {
  width: number;
  height: number;
  text?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

export default function PlaceholderImage({
  width,
  height,
  text = 'Placeholder',
  bgColor = '#3B82F6', // Blue color
  textColor = '#FFFFFF',
  className = '',
}: PlaceholderImageProps) {
  const id = useId();
  
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={width} height={height} fill={bgColor} />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill={textColor}
        fontSize={Math.min(width, height) * 0.1}
        fontFamily="Arial, sans-serif"
      >
        {text}
      </text>
    </svg>
  );
} 