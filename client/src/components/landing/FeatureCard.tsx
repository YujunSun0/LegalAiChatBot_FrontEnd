// components/FeatureCard.tsx
import React from 'react';
import { FeatureCardProps } from '../../types/landing';

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className="flex flex-col items-center text-center">
      {icon}
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);
