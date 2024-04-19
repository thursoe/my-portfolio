"use client";

import React from 'react'
import { Link } from "@nextui-org/react";
import ContactBox from './ContactBox';
import { Icon } from '@iconify/react';

const ContactSection = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">
                <div className="flex flex-col space-y-5">
                    <h1 className="text-3xl font-bold">Contact with me</h1>
                    <p className="text-justify">I'd love to hear from you. Send me a message!</p>
                    <div className="flex gap-3">
                        <Link color="foreground" isExternal href="https://www.linkedin.com/in/thura-soe/">
                            <Icon icon="brandico:linkedin-rect" width="24" height="24" />
                        </Link>
                        <Link color="foreground" isExternal href="https://github.com/thursoe">
                            <Icon icon="bi:github" width="24" height="24" />
                        </Link>
                        <Link color="foreground" isExternal href="mailto:thura.00011@gmail.com">
                            <Icon icon="entypo:email" width="24" height="24" />
                        </Link>
                    </div>
                </div>
                <ContactBox />
            </div>
        </>
    )
}

export default ContactSection