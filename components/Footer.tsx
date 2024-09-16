"use client";
import * as React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import * as LabelPrimitive from "@radix-ui/react-label";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import emailjs from "emailjs-com";

// Label component extends from shadcnui
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

// Input component extends from shadcnui
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100;
    const [visible, setVisible] = React.useState(false);
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
          radial-gradient(
            ${
              visible ? radius + "px" : "0px"
            } circle at ${mouseX}px ${mouseY}px,
            var(--blue-500),
            transparent 80%
          )
        `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <input
          type={type}
          className={cn(
            `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm
          file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400
          dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400
          dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50
          dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400`,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
Input.displayName = "Input";

// Footer component with form and EmailJS integration
const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm(
        "service_8wy1gkx", // Your EmailJS service ID
        "template_vq0yh8m", // Your EmailJS template ID
        form,
        "azzbdgYSWRZG0hmgH" // Your public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.reset(); // Reset the form after submission
        },
        (error) => {
          console.error("Error sending message:", error);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <section id="contact">
      <footer className="w-full pt-5 pb-10" id="contact">
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md mx-auto space-y-4"
          >
            <div>
              <Label htmlFor="from_name">Your Name</Label>
              <Input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="John"
                required
              />
            </div>
            <div>
              <Label htmlFor="from_email">Your Email</Label>
              <Input
                type="email"
                id="from_email"
                name="from_email"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="message">Your Message</Label>
              <textarea
                id="message"
                name="message"
                className="flex h-24 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your message here..."
                required
              />
            </div>
            <div className="flex justify-center">
              <MagicButton
                title="Submit"
                icon={<FaLocationArrow />}
                position="right"
              />
            </div>
          </form>

          <div className="flex items-center md:gap-3 gap-6 justify-center h-20">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            ))}
          </div>

          <div className="flex mt-5 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">
              Copyright © 2024 Siddhesh
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
