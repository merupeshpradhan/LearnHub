export default function ActivityCard() {
  // Activity data representing learning intensity per day
  // 0 = no activity, 1 = low, 2 = medium, 3 = high
  const activity = [
    1, 0, 2, 3, 1, 0, 2, 2, 1, 0, 3, 2, 1, 1, 0, 2, 3, 1, 2, 0, 1, 1, 3, 2, 0,
    1, 2, 3,
  ];

  return (
    <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      {/* Card title */}
      <h2 className="text-xl font-semibold text-white mb-4">
        Learning Activity
      </h2>

      {/* Grid showing activity blocks like a heatmap */}
      <div className="grid grid-cols-7 gap-2">
        {activity.map((level, index) => (
          <div
            key={index}
            className={`h-6 w-6 rounded-md ${
              level === 0
                ? "bg-zinc-800" // no activity
                : level === 1
                  ? "bg-violet-900" // low activity
                  : level === 2
                    ? "bg-violet-700" // medium activity
                    : "bg-violet-500" // high activity
            }`}
          />
        ))}
      </div>

      {/* Footer text showing summary */}
      <p className="mt-4 text-sm text-zinc-400">
        24 learning sessions this month
      </p>
    </article>
  );
}
