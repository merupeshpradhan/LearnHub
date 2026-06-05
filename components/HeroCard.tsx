"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export default function HeroCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900
      p-8
      lg:col-span-2
    "
    >
      <h1 className="text-4xl font-bold text-white">
        Welcome Back, Rupesh 👋
      </h1>

      <div className="mt-4 flex items-center gap-2 text-orange-400">
        <Flame />
        <span>15 Day Learning Streak</span>
      </div>
    </motion.section>
  );
}