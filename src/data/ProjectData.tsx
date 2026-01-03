import { LINK_TYPES, type ProjectData } from "@/types";
import { TAGS } from "@/data/TagConstants";

export const projectsData: ProjectData[] = [
  {
    id: "de-ai-google",
    title: "De-AI Google",
    group: "",
    imageSrc: "/images/de-ai-google-home.png",
    description:
      "A Chrome extension that suppresses the AI-generated content in Google Search results.",
    longDescription: [
      "De-AI Google is a Chrome extension designed to enhance your search experience by suppressing AI-generated content in Google Search results. Despite how powerful lage language models are, they are still only a statistics engine, and when attempting to summarize search results they can produce incorrect information. De-AI Google helps you avoid this by removing AI-generated summaries and snippets from your search results, allowing you to focus on human-generated content that is more likely to be accurate and reliable.",
    ],
    links: [
      {
        type: LINK_TYPES.LIVE,
        text: "View in Chrome Web Store",
        link: "https://chromewebstore.google.com/detail/de-ai-google/nkcedogblnkemelngcggpglflocghmfh?pli=1",
      },
      {
        type: LINK_TYPES.REPOSITORY,
        text: "View on GitHub",
        link: "https://github.com/matthewcsimpson/De-AI-Google",
      },
    ],
    tags: [TAGS.JAVASCRIPT, TAGS.BASH, TAGS.CHROME, TAGS.GIT, TAGS.GITHUB],
  },
  {
    id: "coordconversion",
    title: "CoordConversion",
    group: "",
    imageSrc: "/images/coordconversion-home.png",
    description:
      "An NPM library to convert between various coordinate systems used in geospatial applications.",
    links: [
      {
        type: LINK_TYPES.LIVE,
        text: "View on NPM",
        link: "https://www.npmjs.com/package/coordconversion",
      },
      {
        type: LINK_TYPES.LIVE,
        text: "View demo",
        link: "https://codepen.io/matthewcsimpson/full/RNrYdXv",
      },
      {
        type: LINK_TYPES.REPOSITORY,
        text: "View on GitHub",
        link: "https://github.com/matthewcsimpson/CoordConversions",
      },
    ],
    tags: [TAGS.TYPESCRIPT, TAGS.JEST, TAGS.NPM, TAGS.GIT, TAGS.GITHUB],
  },
  {
    id: "whale-report-administration",
    title: "Whale Report Administration",
    group: "Skyrocket Digital",
    imageSrc: "/images/whale-admin-home.png",
    description: "A web app to administer the Whale Report System.",
    links: [
      {
        type: LINK_TYPES.CASE_STUDY,
        text: "Read Case Study",
        link: "https://github.com/matthewcsimpson/Client-Work-Case-Studies/blob/main/Ocean-Wise-Whale-Report-Admin",
      },
      {
        type: LINK_TYPES.LIVE,
        text: "View Live Project",
        link: "https://app.ocean.org/app/whales-admin",
      },
    ],
    tags: [
      TAGS.HTML,
      TAGS.TYPESCRIPT,
      TAGS.CSS3,
      TAGS.SASS,
      TAGS.REACT,
      TAGS.NEXT,
      TAGS.REDUX_TOOLKIT,
      TAGS.AUTH0,
      TAGS.SALESFORCE,
      TAGS.SWAGGER,
      TAGS.AZURE,
      TAGS.GIT,
      TAGS.GITHUB,
    ],
  },
  {
    id: "whale-report-system",
    title: "Whale Report System",
    group: "Skyrocket Digital",
    imageSrc: "/images/whale-report-home.png",
    description:
      "A web app for mariners to report and be alerted to whale sightings.",
    links: [
      {
        type: LINK_TYPES.CASE_STUDY,
        text: "Read Case Study",
        link: "https://github.com/matthewcsimpson/Client-Work-Case-Studies/blob/main/Ocean-Wise-Whale-Report",
      },
      {
        type: LINK_TYPES.LIVE,
        text: "View Live Project",
        link: "https://app.ocean.org/app/whales",
      },
    ],
    tags: [
      TAGS.HTML,
      TAGS.TYPESCRIPT,
      TAGS.CSS3,
      TAGS.SASS,
      TAGS.REACT,
      TAGS.NEXT,
      TAGS.REDUX_TOOLKIT,
      TAGS.JEST,
      TAGS.AUTH0,
      TAGS.SALESFORCE,
      TAGS.SWAGGER,
      TAGS.AZURE,
      TAGS.GOOGLE_ANALYTICS,
      TAGS.GIT,
      TAGS.GITHUB,
    ],
  },
  // {
  //   id: "shoreline-cleanup",
  //   title: "Shoreline Cleanup",
  //   group: "Skyrocket Digital",
  //   imageSrc: "/images/shoreline-home.png",
  //   description:
  //     "A web app for volunteers to organize and report events to clean shorelines.",
  //   links: [
  //     {
  //       type: LINK_TYPES.LIVE,
  //       link: "https://app.ocean.org/app/cleanup",
  //     },
  //   ],
  //   tags: [
  //     TAGS.HTML,
  //     TAGS.TYPESCRIPT,
  //     TAGS.CSS3,
  //     TAGS.SASS,
  //     TAGS.REACT,
  //     TAGS.NEXT,
  //     TAGS.AUTH0,
  //     TAGS.SALESFORCE,
  //     TAGS.SWAGGER,
  //     TAGS.AZURE,
  //     TAGS.GIT,
  //     TAGS.GITHUB,
  //   ],
  // },
  {
    id: "ferengi-rules-of-acquisition-api",
    title: "Ferengi Rules of Acquisition API",
    group: "",
    imageSrc: "/images/rulesofacquisition-home.png",
    description:
      "A RESTful API providing access to the Ferengi Rules of Acquisition from Star Trek.",
    links: [
      {
        type: LINK_TYPES.LIVE,
        text: "View Live API",
        link: "https://ferengi-rules-api.vercel.app/api/rules",
      },
      {
        type: LINK_TYPES.REPOSITORY,
        text: "View on GitHub",
        link: "https://github.com/matthewcsimpson/Rules-of-Acquisition-API",
      },
    ],
    tags: [
      TAGS.JAVASCRIPT,
      TAGS.NODE,
      TAGS.EXPRESS,
      TAGS.MYSQL,
      TAGS.SWAGGER,
      TAGS.HEROKU,
      TAGS.GIT,
      TAGS.GITHUB,
    ],
  },
  {
    id: "code4rena",
    title: "Code4rena.com",
    group: "Stack Five",
    imageSrc: "/images/code4rena-home.png",
    description: "A platform for decentralized security audits.",
    links: [
      {
        type: LINK_TYPES.CASE_STUDY,
        text: "Read Case Study",
        link: "https://github.com/matthewcsimpson/Client-Work-Case-Studies/blob/main/Code4rena-Platform",
      },
      {
        type: LINK_TYPES.LIVE,
        text: "View Live Project",
        link: "https://code4rena.com/",
      },
    ],
    tags: [
      TAGS.HTML,
      TAGS.TYPESCRIPT,
      TAGS.CSS3,
      TAGS.REACT,
      TAGS.NEXT,
      TAGS.SASS,
      TAGS.VERCEL,
      TAGS.GITHUB,
    ],
  },
  {
    id: "york1",
    title: "York1 ",
    group: "Stack Five",
    imageSrc: "/images/york1-desktop-home.png",
    description:
      "A platform to for construction and industrial clients to rent waste management equipment.",
    links: [
      {
        type: LINK_TYPES.CASE_STUDY,
        text: "Read Case Study",
        link: "https://github.com/matthewcsimpson/Client-Work-Case-Studies/tree/main/York1",
      },
      {
        type: LINK_TYPES.LIVE,
        text: "View Live Project",
        link: "https://wms.york1.com/OnlineBin/TempServiceSiteAddress.aspx",
      },
    ],
    tags: [
      TAGS.HTML,
      TAGS.JAVASCRIPT,
      TAGS.CSHARP,
      TAGS.CSS3,
      TAGS.SASS,
      TAGS.GIT,
      TAGS.GITHUB,
    ],
  },
  {
    id: "casting-recall",
    title: "Casting ReCall",
    group: "",
    imageSrc: "/images/casting-recall-home.png",
    description: "A movie guessing game.",
    links: [
      {
        type: LINK_TYPES.LIVE,
        text: "CastingRecall.com",
        link: "https://castingrecall.com",
      },
      {
        type: LINK_TYPES.REPOSITORY,
        text: "View Frontend Repository",
        link: "https://github.com/matthewcsimpson/CastingRecall-Frontend",
      },
      {
        type: LINK_TYPES.REPOSITORY,
        text: "View Backend Repository",
        link: "https://github.com/matthewcsimpson/CastingRecall-Backend",
      },
    ],
    tags: [
      TAGS.JAVASCRIPT,
      TAGS.REACT,
      TAGS.REACT_ROUTER,
      TAGS.AXIOS,
      TAGS.HTML,
      TAGS.CSS3,
      TAGS.SASS,
      TAGS.NODE,
      TAGS.EXPRESS,
      TAGS.POSTGRESQL,
      TAGS.GOOGLE_ANALYTICS,
      TAGS.GIT,
      TAGS.GITHUB,
    ],
  },
];
