"use client";

import { ModeToggle } from "@/components/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink } from "@/components/link";

export function Navigation() {
  return (
    <div>
      <NavigationMenu
        orientation="horizontal"
        className="pb-2 mb-2 flex flex-row justify-center gap-2 pt-2 max-w-full"
      >
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavLink href="/clients">Klienten</NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavLink href="/emails">E-Mails</NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavLink href="/settings">Einstellungen</NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <ModeToggle />
      </NavigationMenu>
    </div>
  );
}
