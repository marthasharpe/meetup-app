"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Meetups", href: "/meetups" },
  ];
  return (
    <nav className="flex justify-between mb-6 h-16 px-6 border-b items-center">
      <Link href="/">Logo</Link>
      <ul className="flex gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={classNames({
                "text-zinc-500": link.href === currentPath,
                "text-zinc-100": link.href !== currentPath,
                "hover:text-zinc-500 transition-colors": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
