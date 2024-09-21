"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = [""];
  const rightLists = [""];
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Image divs */}
      <div
        className={`relative w-full h-full ${
          id === 5 ? "flex flex-col items-center justify-center" : ""
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover w-full h-full")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 ? "w-full opacity-80" : ""
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover w-80 h-80"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 text-3xl md:text-4xl lg:text-7xl">
              {/* Title or content for id === 6 */}
            </div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "relative flex flex-col items-center justify-center lg:p-10 transition duration-200 group-hover/bento:translate-x-2 md:h-full min-h-36 text-center"
          )}
        >
          {/* Description and Title */}
          <div className="font-sans font-extralight md:max-w-100 text-sm lg:text-base text-white z-10">
            {description}
          </div>
          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold text-white z-10">
            {title}
          </div>
          {/* GitHub 3D Globe */}
          {id === 2 && <GridGlobe />}
          {/* Tech Stack List */}
          {id === 3 && (
            <div className="flex flex-wrap justify-center items-center gap-1 lg:gap-5 w-full overflow-x-auto p-2 md:p-0">
              {/* Row 1: Java and Python */}
              <div className="flex flex-row flex-wrap justify-center gap-1 lg:gap-5">
                <span className="lg:py-3 lg:px-3 py-2 px-2 rounded-lg text-center bg-[#10132E] text-sm lg:text-base">
                  Java
                </span>
                <span className="lg:py-3 lg:px-3 py-2 px-2 rounded-lg text-center bg-[#10132E] text-sm lg:text-base">
                  Python
                </span>
              </div>
              {/* Row 2: SQL and Android */}
              <div className="flex flex-row flex-wrap justify-center gap-1 lg:gap-5">
                <span className="lg:py-3 lg:px-3 py-2 px-2 rounded-lg text-center bg-[#10132E] text-sm lg:text-base">
                  SQL
                </span>
                <span className="lg:py-3 lg:px-3 py-2 px-2 rounded-lg text-center bg-[#10132E] text-sm lg:text-base">
                  Android
                </span>
              </div>
              {/* Row 3: JavaScript and Linux */}
              <div className="flex flex-row flex-wrap justify-center gap-1 lg:gap-5">
                <span className="lg:py-3 lg:px-3 py-2 px-2 rounded-lg text-center bg-[#10132E] text-sm lg:text-base">
                  Javascript
                </span>
                <span className="lg:py-3 lg:px-3 py-2 px-2 rounded-lg text-center bg-[#10132E] text-sm lg:text-base">
                  Linux
                </span>
              </div>
              {/* Row 4: ReactJs and DevOps */}
              <div className="flex flex-row flex-wrap justify-center gap-1 lg:gap-5">
                <span className="lg:py-3 lg:px-3 py-2 px-2 rounded-lg text-center bg-[#10132E] text-sm lg:text-base">
                  ReactJs
                </span>
                <span className="lg:py-3 lg:px-3 py-2 px-2 rounded-lg text-center bg-[#10132E] text-sm lg:text-base">
                  DevOps
                </span>
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="relative mt-5">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
            </div>
          )}
          {/* Additional handling for id === 1 */}
          {id === 1 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={img} alt={img} className="object-cover w-full h-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
