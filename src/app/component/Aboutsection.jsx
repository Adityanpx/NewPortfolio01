"use client"
import Image from 'next/image';
import React, { useState, useTransition } from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2 ">
                <li>Node.js</li>
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>Tableau</li>
                <li>AWS</li>
                <li>DOM Manipulation</li>
                <li>Tableau</li>
                <li>Python</li>
                <li>SQL</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>BSc in Data Science</li>
                <li>12th Grade</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certification",
        content: (
            <ul className="list-disc pl-2">
                <li>SQL 50 LeetCode</li>
                <li>Full-stack Developer</li>

            </ul>
        ),
    },
];

function AboutSection() {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const currentTabContent = TAB_DATA.find((t) => t.id === tab)?.content;

    return (
        <div className="text-white">
            <div className="md:grid md:grid-cols-2 items-center py-8 px-4 gap-8 xl:gap-16 sm:py-16 xl:px-10 hidden md:flex ">
                <Image
                    src="/pf1.jpeg"
                    alt="Illustration of a greeting"
                    width={600}
                    height={500}
                    className="rounded-md"
                />
                <div>
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a skilled full-stack developer with hands-on experience in creating engaging frontend projects. 
                        Currently, I&apos;m working on projects like a React Native Uber clone and a Python chatbot, showcasing my versatility across technologies.
                    </p>
                    <div className="flex flex-row mt-8 space-x-4">
                        {TAB_DATA.map((tab) => (
                            <TabButton key={tab.id} selectTab={() => handleTabChange(tab.id)}>
                                {tab.title}
                            </TabButton>
                        ))}
                    </div>
                    <div className="mt-8">{currentTabContent}</div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
