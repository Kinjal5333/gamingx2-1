import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Card } from "./components/card";
import { Eye } from "lucide-react";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";
const navigation = [
  { name: "Games", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const allProjects = [
  {
    title: "Restaurant Management",
    slug: "G1",
    status: "Live",
    description: "Step into the fast-paced world of restaurant management! Serve customers, manage tables, take orders, and handle bills—all while keeping up with the rush. Deliver top-notch service on time to keep your restaurant thriving. Can you run the ultimate dining experience?",
    views: 24000,
    image: "/imgs/resto.png",
    link: "/games/resto/game/index.html",
  },
  {
    title: "Fall Beans",
    slug: "G2",
    status: "Live",
    description: "Fall Beans – Dive into a fun and vibrant racing adventure! Compete in colorful obstacle courses, overcome challenges, and race to the finish line. Stay ahead to avoid elimination and advance through each exciting level. Do you have what it takes to be the last bean standing?",
    views: 20000,
    image: "/imgs/fallbeans.png",
    link: "/games/fallBeans/Capx & Source/HTML5/index.html",
  },
  {
    title: "Coming soon",
    slug: "G3",
    status: "Soon",
    description: "Game 3 coming soon",
    views: 8800,
    image: "/favicon.png",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen  overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        GamingX
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-md text-zinc-500 ">
        Play exciting games on GamingX and Discover new thrills and unleash your imagination! 🚀
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 mt-8 m-10">
  {allProjects.map((project) => (
    <Card key={project.slug}>
      <Link href={`${project.link}`}>
        <article className="relative w-full h-full p-4 md:p-8">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="flex items-center justify-between gap-2 mt-4">
            <div className="text-xs text-zinc-100">
                <span>{project.status}</span>
              
            </div>
            <span className="flex items-center gap-1 text-xs text-zinc-500">
              <Eye className="w-4 h-4" />{" "}
              {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                project.views ?? 0
              )}
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-bold text-zinc-100 sm:text-4xl font-display">
            {project.title}
          </h2>
          <p className="mt-4 leading-8 text-zinc-400">
            {project.description}
          </p>
          {/* <div className="absolute bottom-4 md:bottom-8">
            <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
              Read more <span aria-hidden="true">&rarr;</span>
            </p>
          </div> */}
        </article>
      </Link>

    </Card>
  ))} 
</div>
<footer className="bg-zinc-900 text-zinc-300 py-10 w-full">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-xl font-bold text-white">GamingX</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Building the future with innovative solutions.
            </p>
          </div>

          {/* Center Section - Navigation */}
          <div className="flex flex-col md:items-center">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="mt-3 space-y-2 space-x-4">
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/projects" className="hover:text-white">Community Guidelines</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </nav>
          </div>

          {/* Right Section - Social Media */}
          <div className="md:text-right">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex md:justify-end gap-4 mt-3">
              <Link href="https://www.tiktok.com/@GamingX_24" target="_blank">
                <FaTiktok className="w-5 h-5 hover:text-blue-500 transition" />
              </Link>
              <Link href="https://x.com/GamingX_24_" target="_blank">
                <FaTwitter className="w-5 h-5 hover:text-blue-400 transition" />
              </Link>
              <Link href="https://www.instagram.com/GamingX_24/" target="_blank">
                <FaInstagram className="w-5 h-5 hover:text-gray-300 transition" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-700 mt-6 pt-4 text-center text-sm">
          &copy; {new Date().getFullYear()} GamingX. All Rights Reserved.
        </div>
      </div>
    </footer>
    </div>
  );

}
