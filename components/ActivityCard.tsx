export default function ActivityCard() {
  const activity = [
    1, 0, 2, 3, 1, 0, 2, 2, 1, 0, 3, 2, 1, 1, 0, 2, 3, 1, 2, 0, 1, 1, 3, 2, 0,
    1, 2, 3,
  ];

  return (
    <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-xl font-semibold text-white mb-4">
        Learning Activity
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {activity.map((level, index) => (
          <div
            key={index}
            className={`h-6 w-6 rounded-md ${
              level === 0
                ? "bg-zinc-800"
                : level === 1
                  ? "bg-violet-900"
                  : level === 2
                    ? "bg-violet-700"
                    : "bg-violet-500"
            }`}
          />
        ))}
      </div>

      <p className="mt-4 text-sm text-zinc-400">
        24 learning sessions this month
      </p>
    </article>
  );
}
