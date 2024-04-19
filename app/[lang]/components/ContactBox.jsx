"use client";

import React from 'react'
import { Input, Textarea, Button } from "@nextui-org/react";

const ContactBox = () => {
    return (
        <div className="flex flex-col gap-5">
            <Input type="name" label="Name" />
            <Input type="email" label="Email" />
            <Textarea
                label="Message"
            />
            <Button color="secondary">
                Submit
            </Button>
        </div>
    )
}

export default ContactBox