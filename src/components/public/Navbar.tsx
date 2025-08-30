//use client karena mengandung hooks react

"use client"

import { Logo } from "../Logo"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import { NavLink, NavDropdown } from "./navbar-components"

export const Navbar = () => {
    const pathname = usePathname();
    
    const isLifestylePage = pathname === "/lifestyle";

    //Array untuk nav dan dropdown items/menu yang akan ditampilkan 
    const navItems_1 = [
        { name: "Home", href: "/" },
    ]

    const navItems_2 = [
        { name: "Socials", href: "/socials" },
        { name: "Contact", href: "/contact" },
        { name: "Posts", href: "/posts" }

    ]

    const dropdownItems = [
        { name: "Motorcycle", href: "/" },
        { name: "Hotweels", href: "/" },
        { name: "Vans", href: "/" },
        { name: "Cars", href: "/" },
    ]
    

    return (
        <nav className="w-full bg-transparent sticky top-0 z-50 backdrop-blur-xs">

            <div className="flex justify-end gap-8 items-center py-1 px-10">


                {/* Menu Home */}
                <div className="flex items-center gap-7">
                    {navItems_1.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                            <NavLink
                                key={index}
                                href={item.href}
                                name={item.name}
                                active={isActive}
                            />
                    )})}

                    {/* Menu Lifestyle dan Dropdown */}

                    <div className="relative group">
                        <Link
                            href="/lifestyle"
                            className="flex items-center gap-1"
                        >
                            <span className={`relative text-base font-medium hover:text-white/80 after:content-[''] after:block after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full ${isLifestylePage ? 'text-white/80 after:w-full' : ''}`}>Lifestyle</span>
                            <ChevronDown size={16}/>
                        </Link>
                        
                        {/* Dropdown */}
                        <NavDropdown dropdownItems={dropdownItems} />
                    </div>

                    {/* Menu Socials, Contact, dan Posts */}

                    {navItems_2.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                            <NavLink
                                key={index}
                                href={item.href}
                                name={item.name}
                                active={isActive}
                            />
                    )})}
                    <Link href={"/"}>
                        <Logo className="hover:scale-110 active:scale-100 transition-transform" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
