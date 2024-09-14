import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-2">
      <div
        className="absolute top-0 left-0 h-screen w-full flex items-center justify-center
          bg-black-100 dark:bg-black-100 bg-grid-black-100/[0.03]"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center
            bg-black-100 dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex flex-col items-center justify-center absolute inset-0">
        <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col items-center justify-center text-center px-4">
          <p className="uppercase tracking-widest text-xs text-blue-100">
            Coding The Future
          </p>

          <TextGenerateEffect
            words="Empowering Innovation Through the Line of Codes"
            className="text-[30px] md:text-4xl lg:text-5xl mt-4"
          />

          <p className="text-sm md:text-lg lg:text-2xl mt-4">
            Hi! I&apos;m Siddhesh, a Software Developer.
          </p>

          <div className="flex flex-col md:flex-row mt-0 space-y-1 md:space-y-0 md:space-x-4">
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1feyK_JEmuDQXPfQ5B55xwVVkO3nV541K/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagicButton
                title="View/Download CV"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
