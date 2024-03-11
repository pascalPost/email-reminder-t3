"use client";

import { usePathname } from "next/navigation";
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children?: ReactNode;
}

export function NavLink({ children, href }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link href={href} passHref legacyBehavior>
      <NavigationMenuLink
        className={navigationMenuTriggerStyle()}
        active={isActive}
      >
        {children}
      </NavigationMenuLink>
    </Link>
  );
}
