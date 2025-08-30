import { Logo } from "../Logo"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export const Navbar = () => {
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Contact", href: "/contact" },
        { name: "Socials", href: "/socials" }
    ]

    const dropdownItems = [
        { name: "Motorcycle", href: "/" },
        { name: "Hotweels", href: "/" },
        { name: "Vans", href: "/" },
        { name: "Cars", href: "/" },
    ]
    

    return (
        <nav className="w-full bg-transparent">

            <div className="flex justify-end gap-8 items-center py-1 px-10">

                <div className="flex items-center gap-4">
                    {navItems.map((item, index) => (
                            <Link
                            key={index}
                            href={item.href}
                            className="relative text-base font-medium hover:text-white/80 after:content-[''] after:block after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                            >
                            {item.name}
                            </Link>
                    ))}

                    <div className="relative group">
                        <Link
                            href="/lifestyle"
                            className="flex items-center gap-1"
                        >
                            <span className="relative text-base font-medium hover:text-white/80 after:content-[''] after:block after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">LifeStyle</span>
                            <ChevronDown size={16}/>
                        </Link>
                        
                        {/* Dropdown */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-30 border border-secondary/80 bg-black/90 backdrop-blur-sm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
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
                    </div>

                    <Logo />
                </div>

                
            </div>
        </nav>
    )
}
