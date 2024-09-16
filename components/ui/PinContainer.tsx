// src/components/ui/Pin.tsx

import React from "react";

interface PinContainerProps {
  title: string;
  children: React.ReactNode;
}

export const PinContainer: React.FC<PinContainerProps> = ({
  title,
  children,
}) => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {children}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30">
        <span className="text-black font-bold text-xl">{title}</span>
      </div>
    </div>
  );
};
