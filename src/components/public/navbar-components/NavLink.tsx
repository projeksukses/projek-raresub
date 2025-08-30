import Link from "next/link";

interface NavLinkProps {
    href: string;
    name: string;
    active?: boolean;
}

export const NavLink = ({
    href,
    active,
    name
}: NavLinkProps) => {
    return (
         <Link
            href={href}
            className={`relative text-base font-medium hover:text-white/80 after:content-[''] after:block after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full ${active ? 'text-white/80 after:w-full' : ''}`}
        >
            {name}
        </Link>
    )
}