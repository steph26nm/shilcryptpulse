'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {
    const pathName = usePathname();

  return (
    <header>
        <div className="main-container inner">
            <Link href="/">
                <Image src="/assets/logo.svg" alt="ShilcryptPulse logo" 
                width={132} height={40} />
            </Link>

            <nav>
                <Link href="/" className={`nav-link ${pathName === '/' ? 'is-active' : ''}`}>Home</Link>

                <p>Search Modal</p>

                <Link href="/coins" className={`nav-link ${pathName === '/coins' ? 'is-active' : ''}`} >All Coins</Link>
            </nav>
        </div>
    </header>
  )
}
