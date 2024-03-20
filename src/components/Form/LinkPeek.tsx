import Link from 'next/link';

interface LinkPeekProps {
  href: string;
  title: string;
  responsive?: boolean;
}

export function LinkPeek({ href, title, responsive = false }: LinkPeekProps) {
  const isResponsive = responsive && 'hidden sm:flex';
  return (
    <a
      href={href}
      className={`p-2 hover:text-yellow-500 transition-colors duration-200 ${isResponsive}`}
    >
      {title}
    </a>
  );
}
