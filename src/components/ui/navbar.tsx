import Link from "next/link"
import dynamic from 'next/dynamic'
import { UserButton } from "@stackframe/stack"

const MobileMenu = dynamic(() => import('./mobile-menu'), { ssr: false })

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
]

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Logo
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <UserButton />
          <MobileMenu navItems={navItems} />
        </div>
      </div>
    </nav>
  )
}

