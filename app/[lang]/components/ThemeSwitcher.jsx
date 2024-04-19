// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { Icon } from '@iconify/react';

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <>
            <Switch defaultSelected aria-label={theme} color="secondary"
                onValueChange={(isSelected) => isSelected ? setTheme('light') : setTheme('dark')}
                startContent={<Icon icon="material-symbols:sunny-rounded" />}
                endContent={<Icon icon="material-symbols:clear-night" />} />
        </>
    )
};