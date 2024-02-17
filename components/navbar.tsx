"use client";

import { UserButton } from '@clerk/nextjs'
import { Menu } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import MobileSidebar from './mobileSidebar';

const Navbar = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }
  
  return (
    <div className="flex p-4 items-center">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Navbar