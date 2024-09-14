import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { Label } from "@/components/ui/Label";
import { TextInput } from "@/components/ui/TextInput";

const Footer = () => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <footer className="w-full pt-5 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex flex-col space-y-4 w-full">
              <Label htmlFor="firstname">First name</Label>
              <TextInput id="firstname" placeholder="" type="text" />
            </div>
            <div className="flex flex-col space-y-4 w-full">
              <Label htmlFor="lastname">Last name</Label>
              <TextInput id="lastname" placeholder="" type="text" />
            </div>
          </div>
          <div className="flex flex-col space-y-4 w-full">
            <Label htmlFor="email">Email Address</Label>
            <TextInput id="email" placeholder="" type="email" />
          </div>
          <button
            className="bg-gradient-to-br relative group/btn from-gray-800 to-gray-600 block w-full text-white rounded-md h-12 font-medium shadow-md hover:shadow-lg transition-shadow duration-300"
            type="submit"
          >
            Submit &rarr;
            <span className="group-hover/btn:opacity-100 block transition-opacity duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          </button>
        </form>
        <a href="siddheshsomvanshi1@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <div className="flex items-center md:gap-3 gap-6 justify-center h-20">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>

        <div className="flex mt-5 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Siddhesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
