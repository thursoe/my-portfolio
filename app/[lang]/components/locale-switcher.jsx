"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@/middleware";
import { Icon } from '@iconify/react';

export default function LocaleSwitcher() {
    const pathName = usePathname();
    const redirectedPathName = (locale) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <>
            <div className="flex gap-3">
                {i18n.locales.map((locale) => {
                    return (
                        <div key={locale}>
                            <Link href={redirectedPathName(locale)}>{locale == "en" ?
                                <Icon icon="emojione-v1:flag-for-united-states" width="24" height="24" />
                                :
                                <Icon icon="emojione-v1:flag-for-myanmar" width="24" height="24" />
                            }
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
}