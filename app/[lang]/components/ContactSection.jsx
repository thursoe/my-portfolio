"use client";

import React from 'react'
import ContactBox from './ContactBox';
import { Icon } from '@iconify/react';

const ContactSection = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-14">
                <div className="flex flex-col space-y-5">
                    <h1 className="text-3xl font-bold">Contact with me</h1>
                    <p className="text-justify">I'd love to hear from you. Send me a message!</p>
                    <div className="flex gap-3">
                        <Icon icon="brandico:linkedin-rect" width="24" height="24" />
                        <Icon icon="bi:github" width="24" height="24" />
                        <Icon icon="entypo:email" width="24" height="24" />
                    </div>
                </div>
                <ContactBox />
            </div>
        </>
    )
}

export default ContactSection