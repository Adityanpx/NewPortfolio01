"use client"
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>JavaScript</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Bachelors in Data Science</li>
                <li>12th</li>
            </ul>
        )
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className='list-disc pl-2'>
                <li>AWS Cloud Practitioner</li>
                <li>Full-stack Developer</li>
            </ul>
        )
    }
];

function Aboutsection() {
    // Set the default tab to "skills" initially
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    // Find the selected tab content, and ensure it's not undefined
    const currentTabContent = TAB_DATA.find(t => t.id === tab)?.content;

    return (
        <div className='text-white'>
            Aboutsection
            <div className='md:grid md:grid-cols-2 items-center py-8 px-4 gap-8 xl:gap-16 sm:py-16 xl:px-16'>
                <Image
                    src="/hi.png"
                    alt="hello it me"
                    width={40}
                    height={30}
                />

                <div>
                    <h2 className='text-4xl text-white font-bold mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        I am a skilled full-stack developer with hands-on
                        experience in creating engaging frontend projects
                        such as online shoe stores and car rental platforms.
                        Currently, I'm developing a React Native Uber clone
                        and a Python-based chatbot, demonstrating my ability
                        to adapt across different technologies. I am a
                        dedicated learner, always eager to explore new
                        technologies to enhance my skills and make valuable
                        contributions to innovative projects.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")}>
                            Skills
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")}>
                            Education
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("certification")}>
                            Certification
                        </TabButton>
                    </div>
                    {/* Display content if found */}
                    <div className='mt-8'>{currentTabContent}</div>
                </div>
            </div>
        </div>
    );
}

export default Aboutsection;
