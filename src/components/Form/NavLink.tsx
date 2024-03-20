import Link from 'next/link';

interface NavLinkProps {
  url: string;
  title: string;
}

export function NavLink({ url, title }: NavLinkProps) {
  return (
    <Link
      href={url}
      className="p-2 hover:text-yellow-500 transition-colors duration-200 hidden sm:flex"
    >
      {title}
    </Link>
  );
}
