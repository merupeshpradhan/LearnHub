import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import ActivityCard from "@/components/ActivityCard";
import CourseCard from "@/components/CourseCard";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: courses, error } = await supabase.from("courses").select("*");

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="flex min-h-screen bg-black">
      <Sidebar />

      <section className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <HeroCard />
          </div>

          <ActivityCard />

          {courses?.map((course) => (
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
