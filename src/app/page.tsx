import { Projects } from "@/data/projects";
import { Container, Box, Typography } from "@mui/material";
import ProjectCard from "@/components/ProjectCard";
import TopAppBar from "@/components/TopAppBar";


export default function HomePage() {
    return (
        <Box bgcolor="primary.50" minHeight="100vh">

            <Box padding={2} component="section" display="flex" justifyContent="center">
                <Typography variant="h2" color="primary.dark">
                    My Projects
                </Typography>
            </Box>

            <Container maxWidth="xl" component="section">
                <Typography color="primary.dark">
                    This portfolio highlights the projects I have made as a result of my academic work at Humber
                    Polytechnic. The work displayed covers areas such as building your own engine in C++, focusing on
                    rendering and physics using development APIs, as well as working with game engines such as Unreal
                    Engine.
                </Typography>
            </Container>

            <Container
                maxWidth="xl"
                sx={{
                    pt: {xs: 4, md: 4},
                    px: {xs: 0, md: 4},
                    display: "flex",
                    flexDirection: {xs: "column", md: "row"},
                    gap: 5,
                    alignItems: "stretch",
                }}
            >
                {Projects.map((project, index) => (
                    <ProjectCard
                        key={`${project?.title}-${index}`}
                        title={project?.title}
                        description={project?.cardBlurb}
                        githubLink={project?.githubUrl}
                        videoSrc={project?.videoSrc}
                        chips={project?.skills}
                        detailHref={`/projects/${project.slug}`}
                    />
                ))}
            </Container>
        </Box>
    );
}
