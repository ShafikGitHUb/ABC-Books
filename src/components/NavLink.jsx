"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link href={href}>
            <span
                className={`pb-1 ${
                    isActive ? "border-b-2 border-purple-500" : "" }`}
            >
                {children}
            </span>
        </Link>
    );
};

export default NavLink;