"use client"

import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Icon } from '@iconify/react';

export default function MainNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Home",
        "About",
        "Experience",
        "Skills",
        "Contact",
    ];

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            shouldHideOnScroll
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
                <NavbarBrand>
                    <p className="font-bold text-inherit">MY PORTFOLIO</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4">
                <NavbarBrand>
                    <p className="font-bold text-inherit">MY PORTFOLIO</p>
                </NavbarBrand>
                <NavbarItem>
                    <Link color="foreground" href="#" className="hover:text-purple-600">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#about" color="foreground" className="hover:text-purple-600">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#experience" className="hover:text-purple-600">
                        Experience
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#skills" className="hover:text-purple-600">
                        Skills
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#contact" className="hover:text-purple-600">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" className="hidden sm:flex" justify="end">
                <NavbarItem>
                    <Link color="foreground" isExternal href="https://www.linkedin.com/in/thura-soe/">
                        <Icon icon="iconoir:linkedin" width="1.2em" height="1.2em" />
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" isExternal href="https://github.com/thursoe">
                        <Icon icon="iconoir:github-circle" width="1.2em" height="1.2em" />
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full hover:text-purple-600"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
