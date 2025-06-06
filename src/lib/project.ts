import { getColor } from "./langColor";

interface ProjectDetail {
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}

const projects: ProjectDetail[] = [
    {
        title: "Project 1",
        description: "Project 1 description",
        image: "https://via.placeholder.com/150",
        link: "https://example.com",
        tags: ["typescript", "react"],
    },
    {
        title: "Project 2",
        description: "Project 2 description",
        image: "https://via.placeholder.com/150",
        link: "",
        tags: ["react", "nodejs"],
    }
];

function getTextColor(color: string) {
    const r = parseInt(color.slice(1, 3), 16) / 255;
    const g = parseInt(color.slice(3, 5), 16) / 255;
    const b = parseInt(color.slice(5, 7), 16) / 255;
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "#000000" : "#FFFFFF";
}

export function getProjects() {
    const af_projects = projects.map((project) => {
        return {
            ...project,
            tags: project.tags.map((tag) => {
                console.log(tag);
                const color = getColor(tag);
                return {
                    name: tag,
                    color: color,
                    textColor: getTextColor(color),
                }
            })
        }
    });
    return af_projects;
}