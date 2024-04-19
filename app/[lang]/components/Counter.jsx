"use client";

import React, { useEffect, useState } from 'react';
import { Button } from "@nextui-org/react";

const Counter = ({ children, ...props }) => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };

    useEffect(() => {
        const randValue = Math.round(Math.random() * 100);
        setCounter(randValue);
    }, [])

    return (
        <div className="flex items-center">
            <Button onClick={increment} {...props}>
                {children}
            </Button>
            <span className="ml-4 text-sm font-semibold text-purple-600">+{counter}</span>
        </div>
    )
}

export default Counter