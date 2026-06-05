"use client";

import {
  LayoutDashboard,
  BookOpen,
  TrendingUp,
  Calendar,
  Target,
  Trophy,
  BarChart3,
  Bell,
  Settings,
} from "lucide-react";

// Sidebar navigation items configuration
const sidebarLinks = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "My Courses", icon: BookOpen },
  { name: "Progress", icon: TrendingUp },
  { name: "Schedule", icon: Calendar },
  { name: "Goals", icon: Target },
  { name: "Achievements", icon: Trophy },
  { name: "Analytics", icon: BarChart3 },
  { name: "Notifications", icon: Bell },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside
      className="
        w-20
        lg:w-64
        min-h-screen
        bg-zinc-950
        border-r
        border-zinc-800
        p-4
        flex
        flex-col
        justify-between
        transition-all
      "
    >
      <div>
        {/* Logo section */}
        <div className="mb-8 flex justify-center lg:justify-start">
          <h1 className="text-2xl font-bold text-white">
            {/* Full logo for large screens */}
            <span className="hidden lg:inline">🎓 LearnHub</span>

            {/* Icon-only logo for small screens */}
            <span className="lg:hidden">🎓</span>
          </h1>
        </div>

        {/* Navigation menu */}
        <nav>
          <ul className="space-y-1">
            {sidebarLinks.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.name}>
                  <button
                    className="
                      w-full
                      flex
                      items-center
                      justify-center
                      lg:justify-start
                      gap-3
                      px-4
                      py-3
                      rounded-xl
                      text-zinc-300
                      hover:bg-zinc-900
                      hover:text-white
                      transition-all
                    "
                  >
                    {/* Sidebar icon */}
                    <Icon size={20} />

                    {/* Text label only visible on large screens */}
                    <span className="hidden lg:inline">{item.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* User profile section at bottom */}
      <div className="flex items-center justify-center lg:justify-start gap-3">
        {/* Avatar circle */}
        <div className="h-10 w-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold">
          R
        </div>

        {/* User info (hidden on small screens) */}
        <div className="hidden lg:block">
          <h3 className="text-white font-medium">Rupesh</h3>

          <p className="text-sm text-zinc-400">Frontend Developer</p>
        </div>
      </div>
    </aside>
  );
}
