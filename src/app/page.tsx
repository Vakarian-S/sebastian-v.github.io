import { Projects } from "@/data/projects";
import { Container, Box, Typography } from "@mui/material";
import ProjectCard from "@/components/ProjectCard";
import TopAppBar from "@/components/TopAppBar";


export default function HomePage() {
    return (
        <Box bgcolor="primary.50" minHeight="100vh">
            <TopAppBar/>

            <Box padding={2} component="section" display="flex" justifyContent="center">
                <Typography variant="h2" color="primary.dark">
                    My Projects
                </Typography>
            </Box>

            <Container maxWidth="xl" component="section">
                <Typography color="primary.dark">
                    This portfolio highlights three projects from my academic work that best
                    represent my technical skills, teamwork experience, and ability to learn
                    independently. Each project focuses on a different area of development,
                    ranging from core programming and math-based problem solving, to
                    collaborative production work, to in-depth engine research. Together,
                    these projects show how I approach learning new systems and applying that
                    knowledge in practical ways.
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

            <Box bgcolor="primary.main" sx={{mt: 6, py: 4}}>
                <Container maxWidth="xl">
                    <Typography color="primary.contrastText">Footer placeholder</Typography>
                </Container>
            </Box>
        </Box>
    );
}
