export type Project = {
    slug: string;
    title: string;
    cardBlurb: string;
    description: string;
    skills: string[];
    githubUrl: string;
    videoSrc?: string;
};

export const Projects: Project[] = [
    {
        slug: "graphics-and-physics-collection",
        title: "Graphics and Physics Collection",
        cardBlurb: "A curated set of early assignments showing my rendering pipeline and physics problem solving.",
        description:
            "A collection of first year assignments focused on rendering fundamentals and physics calculations. I used these projects to build confidence with math driven gameplay logic, debugging, and presenting results clearly.",
        skills: ["C++", "Rendering basics", "Physics math", "Debugging", "Technical communication"],
        githubUrl: "https://github.com/Vakarian-S/FirstYearGameProgramming",
        videoSrc: 'https://youtube.com/embed/BNyhRWVlTFI'
    },
    {
        slug: "midstone-team-project",
        title: "Midstone Team Project",
        cardBlurb: "A collaborative build that shows how I work on a team and ship features.",
        description:
            "A team midstone project that highlights collaboration, planning, and integrating multiple systems into one playable experience. My focus was on building reliable features, communicating progress, and keeping the scope realistic.",
        skills: ["C++", "Team workflow", "Feature integration", "Version control", "Scope management"],
        githubUrl: "https://github.com/MattPiet/Mid-Stone",
        videoSrc: 'https://youtube.com/embed/QmRGF4kQKY0'
    },
    {
        slug: "unreal-skill-tree-research",
        title: "Unreal Skill Tree Research",
        cardBlurb: "A research driven prototype exploring scalable skill tree architecture in Unreal.",
        description:
            "A research and prototyping project exploring different ways to structure a scalable skill tree in Unreal. I focused on maintainability, clean data structures, and how to present progression clearly to players.",
        skills: ["Unreal Engine", "Unreal architecture", "Data modeling", "Prototyping", "Systems design"],
        githubUrl: "https://github.com/<YOUR_USERNAME>/<REPO_NAME>",
        videoSrc: 'https://youtube.com/embed/BNyhRWVlTFI'
    },
];
