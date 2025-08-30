import Link from "next/link";

interface NavDropdownProps {
    dropdownItems: { name: string; href: string }[];
};

export const NavDropdown = ({ dropdownItems }: NavDropdownProps) => {
    return (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-30 border border-secondary/80 bg-primary backdrop-blur-sm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="flex flex-col items-center justify-center gap-1 py-1">
                {dropdownItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm font-medium text-white hover:bg-white/10 hover:rounded hover:text-white/80 transition-colors duration-200"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}