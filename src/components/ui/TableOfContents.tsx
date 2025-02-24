"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TOCProps {
  headings: { id: string; text: string }[];
}

export default function TableOfContents({ headings }: TOCProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="border p-4 rounded-lg shadow-sm mb-6 bg-gray-100 mt-4 mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-lg font-semibold">Mục lục</h2>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      {isExpanded && (
        <ul className="mt-2 space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a href={`#${heading.id}`} className="text-blue-500 hover:underline">
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
