"use client"

import { useState } from "react";
import { User } from "@/types/user/user";
import Image from "next/image";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface MenuItem {
    label: string;
    icon: React.ReactNode;
    href: string;
}

interface SidebarProps {
    menus: MenuItem[];
    user: User;
};

const Sidebar = ({
    user,
    menus,
}: SidebarProps) => {
    const path = usePathname();

    return (
        <div className="bg-primary/90 w-64 fixed left-0 top-0 h-screen flex flex-col justify-between py-8 z-50">
            <div className="flex flex-col gap-y-3 px-6">
                <div className="size-16 overflow-hidden aspect-square relative rounded-xl">
                    <Image
                        alt="User avatar"
                        src={user?.avatar}
                        fill
                    />
                </div>
                <div className="space-y-1">
                    <p className="capitalize text-xl font-medium">{user?.name}</p>
                    <p className="text-md font-medium opacity-50">{user?.email}</p>
                </div>
            </div>

            {/* Link Section */}
            <div className="flex flex-col gap-y-2">
                {menus.map((item, idx) => {
                    const isActive = path.includes(item.href);

                    return (
                        <Link
                            key={idx}
                            href={item.href}
                            className={`flex relative items-center gap-3 py-2 px-6 text-md font-medium cursor-pointer   hover:text-white hover:border-l-4 hover:border-white  hover:bg-white/10 transition ${isActive ? `border-l-4 border-white` : `text-white/60`}`}
                        >
                            <span className="size-5">{item.icon}</span>
                            <span>{item.label}</span>
                        </Link>
                    )
                })}
            </div>

            <button className="flex items-center hover:text-white transition-colors duration-100 text-white/60 text-sm gap-2 px-6  cursor-pointer">
                <LogOut size={18} />
                <span className="font-medium">Logout</span>
            </button>
        </div>
    )
}

export default Sidebar;