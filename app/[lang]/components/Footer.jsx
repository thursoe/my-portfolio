"use client";

import React from 'react'
import { Icon } from '@iconify/react';
import LocaleSwitcher from './locale-switcher';
import Counter from './Counter';

const Footer = () => {
    return (
        <footer className="bg-neutral-50 dark:bg-slate-950">
            <div className="w-4/5 mx-auto py-5">
                <div className="flex justify-between items-center">
                    <div className="hidden sm:block">
                        <p className="font-bold text-inherit mb-2">MY PORTFOLIO</p>
                        <Counter isIconOnly color="secondary" variant="ghost" aria-label="Like" size="sm">
                            <Icon icon="mdi:heart-outline" width="24" height="24" />
                        </Counter>
                    </div>
                    <div>
                        <h1 className="text-center font-thin">@ 2024 Portfolio</h1>
                        <h1 className="text-center font-normal">Designed by Thura</h1>
                    </div>
                    <LocaleSwitcher />
                </div>
            </div>
        </footer>
    )
}

export default Footer