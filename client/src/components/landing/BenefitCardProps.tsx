// components/BenefitCard.tsx
import { BenefitCardProps } from "../../types/landing";

export const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );