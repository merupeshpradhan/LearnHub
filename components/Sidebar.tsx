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
    <aside className="w-64 min-h-screen bg-zinc-950 border-r border-zinc-800 p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">🎓 LearnHub</h1>
      </div>

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
                  <Icon size={20} />
                  <span>{item.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="absolute bottom-6 left-4 h-10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold">
            R
          </div>

          <div>
            <h3 className="text-white font-medium">Rupesh</h3>
            <p className="text-sm text-zinc-400">Frontend Developer</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
