"use client"
import Link from 'next/link';
import React from 'react';
import Navlogo from "@/assets/logo.png"
import Image from 'next/image';
import NavLink from '@/components/NavLink';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';

const Navbar = () => {

  const userData = authClient.useSession()
  const user = userData.data?.user
const handleSignOut = async()=>{
  await authClient.signOut();
}

    return (
<div>
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
    <li><NavLink href={"/"}>Home</NavLink></li>
     <li><NavLink href={"/allbooks"}>All Books</NavLink></li>
      </ul>
    </div>
   <NavLink href={"/"}> <Image src={Navlogo} alt='Navlogo'></Image></NavLink>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
        <li><NavLink href={"/"}>Home</NavLink></li>
     <li><NavLink href={"/allbooks"}>All Books</NavLink></li>
    </ul>
  </div>
  { !user && <div className="navbar-end gap-2">
 
    <ul><Link href={"/signin"}><Button onClick={handleSignOut} size="sm"  className="bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700 shadow-md">Login</Button>
    </Link></ul>
  </div>
  }
  {
    user && <div className="navbar-end gap-2">
         <Avatar size='sm'>
        <Avatar.Image alt="John Doe" src={user.image}
        referrerPolicy='no-referrer'/>
                {/* <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback> */}
      </Avatar>
   <Button onClick={handleSignOut} size="sm" variant='danger'>SignOut</Button>
  </div>
  }
</div>
</div>
    );
};

export default Navbar;