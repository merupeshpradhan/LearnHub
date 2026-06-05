"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

interface CourseCardProps {
  title: string;
  progress: number;
}

export default function CourseCard({ title, progress }: CourseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <BookOpen className="text-violet-500" />
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>

      <p className="text-zinc-400 mb-4">{progress}% Complete</p>

      <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5 }}
          className="h-full bg-violet-500"
        />
      </div>
    </motion.article>
  );
}
