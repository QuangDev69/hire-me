"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3, FaJava, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiSpringboot } from "react-icons/si";

const about = {
  title: "About me",
  des: "Hi, I'm Quang, 24 years old, and a software engineer living in Ho Chi Minh City, Vietnam. I've never dated before, but I'm looking to date two girls at the same time. If you're interested, please get in touch!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "QuangDev",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+84) 79 793 3010",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 years",
    },


      fieldName: "Instagram",
      fieldValue: "buq.01",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Viet Nam",
    },
    {
      fieldName: "Email",
      fieldValue: "ndquangk19@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Avaiable",
    },
  ],
};

const experience = {
  title: "My experience",
  des: "I have experience working on Java projects with Korean companies and am also capable of taking on front-end roles.",
  items: [
    {
      company: "SH SOFT VINA",
      position: "Java developer",
      duration: "2023 - 2024",
    },
    {
      company: "Martech Boiler",
      position: "Frontend Developer Intern",
      duration: "5/2023 - 7/2023",
    },
    {
      company: "Viet Japan Partner",
      position: "Frontend Developer Intern",
      duration: "5/2022 - 7/2022",
    },
  ],
};

const skills = {
  title: "My skills",
  des: "Skills are also temporary kkk",
  items: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiSpringboot />,
      name: "Spring boot",
    },
  ],
};

const education = {
  title: "My education",
  des: "Studying is also normal !!!",
  items: [
    {
      institution: "Hutech University",
      degree: "Software Engineer",
      duration: "2019 - 2023",
    },
    {
      institution: "Codecademy",
      degree: "Spring boot Course",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "OOP Course",
      duration: "2023",
    },
    {
      institution: "Codecademy",
      degree: "Programming Course",
      duration: "2022",
    },
    ,
    {
      institution: "Codecademy",
      degree: "Frontend Track",
      duration: "2022",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.3, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-14"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-fulll">
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-7">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.des}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60 w-[100px]">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">
                  {education.des}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex-col justify-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">
                  {experience.des}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex-col justify-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-7 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.des}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-4 xl:gap-7">
                  {skills.items.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[130px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-500 px-7">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
