import Link from "next/link";

const NavBar = () => {
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
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
