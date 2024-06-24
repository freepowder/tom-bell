'use client'
import * as React from "react";
import {SocialIcon} from "react-social-icons";

export default function Social() {
    return (
        <div className="flex justify-items-start gap-4  mb-12">
            <SocialIcon url="www.vimeo.com" bgColor="#121212" fgColor="#ffffff" />
            <SocialIcon url="www.youtube.com" bgColor="#121212" fgColor="#ffffff"/>
            <SocialIcon url="www.linkedin.com" bgColor="#121212" fgColor="#ffffff"/>
            <SocialIcon url="www.instagram.com" bgColor="#121212" fgColor="#ffffff"/>
        </div>
    )
}
