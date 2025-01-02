"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/img/logo.webp"

import {
  FaTachometerAlt,
  FaInfoCircle,
  FaQuoteLeft,
  FaUsers,
  FaConciergeBell,
  FaEnvelope,
  FaProjectDiagram,
  FaRegThumbsUp,
  FaHandsHelping,
  FaBlog,
  FaBriefcase,
  FaPowerOff,
} from "react-icons/fa";
import { IoMdCreate } from "react-icons/io";
import SidebarItem from "@/components/Sidebar/SidebarItem";
import ClickOutside from "@/components/Admin/ClickOutside";
import useLocalStorage from "@/hooks/useLocalStorage";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "MENU",
    menuItems: [
      {
        icon: <FaTachometerAlt />,
        label: "Dashboard",
        route: "/admin/dashboard",
      },
      {
        icon: <FaInfoCircle />,
        label: "About Us",
        route: "/admin/aboutUs",
      },
      {
        icon: <FaQuoteLeft />,
        label: "Testimonial",
        route: "/admin/testimonials",
      },
      {
        icon: <FaUsers />,
        label: "Team",
        route: "/admin/team",
      },
      {
        icon: <FaConciergeBell />,
        label: "Services",
        route: "/admin/services",
      },
      {
        icon: <FaEnvelope />,
        label: "Contact",
        route: "/admin/contact",
      },
      {
        icon: <FaProjectDiagram />,
        label: "Project",
        route: "/admin/projects",
      },
      {
        icon: <FaRegThumbsUp />,
        label: "Experiance",
        route: "/admin/experiance",
      },
      {
        icon: <FaHandsHelping />,
        label: "Client",
        route: "/admin/client",
      },
      {
        icon: <FaBriefcase />,
        label: "whyDigirib",
        route: "/admin/whyDigirib",
      },
      {
        icon: <IoMdCreate />,
        label: "Story",
        route: "/admin/story",
      },
      {
        icon: <FaBlog />,
        label: "Blog",
        route: "/admin/blog",
      },
      {
        icon: <FaBriefcase />,
        label: "Job",
        route: "/admin/job",
      },
      {
        icon: <FaConciergeBell />,
        label: "Main Services",
        route: "#",
        children: [
          { label: "Category", route: "/admin/mainServices/category" },
          { label: "Subcategory", route: "/admin/mainServices/subcategory" },
          { label: "Services", route: "/admin/mainServices/services" },
        ],
      },
      {
        icon: <FaPowerOff />,
        label: "Logout",
        isLogout: true, // Mark this item as logout
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const [pageName, setPageName] = useLocalStorage("selectedMenu", "dashboard");

  // Logout Handler
  const handleLogout = async () => {
    try {
      // Call your logout API
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}admin/auth/logout`, {
        method: "POST",
      });

      if (response.ok) {
        // Redirect to the login page
        window.location.href = "/admin/login";
      } else {
        console.error("Failed to logout");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* SIDEBAR HEADER */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <Link href="/admin/dashboard">
            <Image
              width={100}
              height={100}
              src={Logo}
              alt="Logo"
              priority
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG code for hamburger menu */}
            </svg>
          </button>
        </div>
        {/* SIDEBAR HEADER */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* Sidebar Menu */}
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                  {group.menuItems.map((menuItem, menuIndex) => {
                    if (menuItem.isLogout) {
                      // Render Logout Item Directly
                      return (
                        <li
                          key={menuIndex}
                          onClick={handleLogout}
                          className="cursor-pointer flex items-center gap-4 rounded-md px-4 py-2 text-sm text-white hover:bg-gray-800"
                        >
                          <span className="text-lg">{menuItem.icon}</span>
                          {menuItem.label}
                        </li>
                      );
                    }

                    // Render other menu items
                    return (
                      <SidebarItem
                        key={menuIndex}
                        item={menuItem}
                        pageName={pageName}
                        setPageName={setPageName}
                      />
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
