interface ContentSection {
  title: string;
  items: string[];
}

interface ContentRendererProps {
  sections: ContentSection[];
}

export function ContentRenderer({ sections }: ContentRendererProps) {
  return (
    <div className="space-y-8">
      {sections.map((section, idx) => (
        <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{section.title}</h3>
          <ul className="space-y-3">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
