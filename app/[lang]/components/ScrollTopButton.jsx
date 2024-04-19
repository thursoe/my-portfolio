"use client";

import React, { useState, useEffect } from "react";
import { Link } from "@nextui-org/react";
import { Icon } from '@iconify/react';

const ScrollTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {isVisible && (
                <Link className="fixed right-10 bottom-10 z-40 hover:cursor-pointer animate-bounce" color="secondary" onClick={scrollToTop}>
                    <Icon icon="mingcute:up-fill" width="24" height="24" />
                </Link>
            )}
        </>
    );
};

export default ScrollTopButton;