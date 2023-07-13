import { BsPlusCircle } from "react-icons/bs";

interface FaqBoxProps {
  title: string;
  content: string;
}

export default function FaqBox({ title, content }: FaqBoxProps) {
  return (
    <div className="space-y-4">
      <details className="group rounded-lg bg-white p-6">
        <summary className="flex cursor-pointer items-center justify-between">
          <h2 className="font-bold">{title}</h2>

          <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
            <BsPlusCircle />
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-400">{content}</p>
      </details>
    </div>
  );
}
