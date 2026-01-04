import { type ResumeData } from "@/types";

export const Resume: ResumeData = {
  education: [
    {
      institution: "BrainStation",
      credential: "Diploma",
      field: "Web Development",
      endDate: "September 2022",
      location: "Vancouver, BC",
    },
    {
      institution: "British Columbia Institute of Technology",
      credential: "Certificate",
      field: "Computer Systems",
      endDate: "December 2020",
      location: "Vancouver, BC",
    },
    {
      institution: "British Columbia Institute of Technology",
      credential: "Associate Certificate",
      field: "Agile Development",
      endDate: "November 2021",
      location: "Vancouver, BC",
    },
  ],
  workExperience: [
    {
      positions: [
        {
          title: "Lead Developer",
          startDate: "September 2025",
          endDate: "present",
        },
        {
          title: "Full Stack Developer",
          startDate: "August 2024",
          endDate: "September 2025",
        },
      ],
      company: "Skyrocket Digital",
      location: "Vancouver, BC",
      description: [
        "Built front-end for Whale Report conservation app module for Ocean Wise",
        "Built Administration web app module for Whale Report System for Ocean Wise",
        "Maintained Shoreline Cleanup web app module for Ocean Wise",
        "Built Whale Health Assessment web app for Ocean Wise",
      ],
    },
    {
      positions: [
        {
          title: "Full Stack Developer",
          startDate: "April 2023",
          endDate: "June 2024",
        },
      ],
      company: "Stack Five",
      location: "Vancouver, BC",
      description: [
        "Developed and maintained features for Code4rena.com",
        "Overhauled and modernized front-end design and architecture for York1",
        "Updated full-stack fundraising web app for 2023 Winter Wall Challenge for Missions Without Borders.",
      ],
    },
    {
      positions: [
        {
          title: "Teaching Assistant",
          startDate: "Sept 2022",
          endDate: "Oct 2023",
        },
      ],
      company: "BrainStation",
      location: "Vancouver, BC",
      description: [
        "Instructed 20+ students in full- and part-time Web Development and Software Developmentdiploma programs",
        "Focused on JavaScript (ES6), React, Node, and Express",
      ],
    },
    {
      positions: [
        {
          title: "Tech Experience Manager",
          startDate: "Feb 2020",
          endDate: "Feb 2023",
        },
        {
          title: "Department Manager, Computer + audio Video",
          startDate: "Nov 2009",
          endDate: "Feb 2020",
        },
        {
          title: "Assistant Department Manager",
          startDate: "Nov 2009",
          endDate: "May 2008",
        },
      ],
      company: "London Drugs Limited",
      location: "Greater Vancouver, BC",
      description: [
        "Managed teams of 10–40 staff with up to 2000 daily customers",
        "Recipient of Manager of the Year (2016, 2019) and Entrepreneur of the Year (2018)",
      ],
    },
  ],
};
