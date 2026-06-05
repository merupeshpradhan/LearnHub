import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import ActivityCard from "@/components/ActivityCard";
import CourseCard from "@/components/CourseCard";
import { supabase } from "@/lib/supabase";
import { Course } from "@/types/course";

export default async function Home() {
  // Fetch all courses from Supabase database
  // "courses" table is queried and returned as raw data
  const { data: courses, error } = await supabase.from("courses").select("*");

  // Type casting Supabase response to Course[] for TypeScript safety
  const typedCourses = courses as Course[];

  // If there is any error while fetching data, show error message UI
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="flex min-h-screen bg-black">
      <div className="">
        <Sidebar />
      </div>

      <section className="flex-1 p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hero section shown prominently (large card layout) */}
          <div className="md:col-span-2">
            <HeroCard />
          </div>

          {/* Activity overview card */}
          <ActivityCard />

          {/* Dynamically render all courses from database */}
          {typedCourses?.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              progress={course.progress}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
