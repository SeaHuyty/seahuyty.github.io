import type { ReactNode } from 'react';

export type TimelineItem = {
  id: string;
  label: ReactNode;
  content: ReactNode;
  gapVariant?: boolean;
};

function TimelineSection({ title, items }: { title: string; items: TimelineItem[] }) {
  return (
    <div className="introduction mb-6 sm:mb-8">
      <h3 className="text-lg sm:text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-3 sm:space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className={`flex flex-col gap-3 sm:flex-row sm:items-start`}
          >
            <span className="block sm:inline-block w-full sm:w-60 text-gray-600 dark:text-gray-400 italic text-sm sm:text-base mb-1 sm:mb-0">
              {item.label}
            </span>
            <span className="text-sm sm:text-base">{item.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimelineSection;
