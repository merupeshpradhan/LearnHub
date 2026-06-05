export default function Loading() {
  return (
    <main className="flex min-h-screen bg-black">
      
      {/* Sidebar Skeleton */}
      <aside className="w-64 border-r border-zinc-800 p-4">
        <div className="h-10 w-32 bg-zinc-800 rounded animate-pulse mb-10" />

        <div className="space-y-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-10 bg-zinc-800 rounded-xl animate-pulse"
            />
          ))}
        </div>
      </aside>

      {/* Main Content Skeleton */}
      <section className="flex-1 p-6">
        <div className="h-40 bg-zinc-800 rounded-3xl animate-pulse mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-48 bg-zinc-800 rounded-3xl animate-pulse"
            />
          ))}
        </div>
      </section>
    </main>
  );
}