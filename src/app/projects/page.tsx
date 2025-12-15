"use client";

import * as React from "react";
import { Box, Breadcrumbs, Container, Stack, Typography } from "@mui/material";
import ProjectCard from "@/components/ProjectCard";
import { Projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <Box py={{xs: 3, md: 5}}>
            <Container maxWidth="xl">
                <Stack spacing={{xs: 2, md: 3}}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link href="/" style={{textDecoration: "none"}}>
                            Home
                        </Link>

                        <Typography color="text.primary">Projects</Typography>
                    </Breadcrumbs>
                    <Box>
                        <Typography
                            variant="h3"
                            color="primary.dark"
                            sx={{
                                fontSize: {xs: "2rem", sm: "2.4rem", md: "2.8rem"},
                                lineHeight: 1.15,
                            }}
                        >
                            Projects
                        </Typography>

                        <Typography color="text.secondary" sx={{mt: 0.5, maxWidth: 900}}>
                            A complete list of my featured work. Open a project to see the full breakdown and links.
                        </Typography>
                    </Box>
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
                        {Projects.map((project) => (
                            <Box key={project.slug} sx={{width: "100%"}}>
                                <ProjectCard
                                    title={project.title}
                                    description={project.cardBlurb}
                                    githubLink={project.githubUrl}
                                    detailHref={`/projects/${project.slug}`}
                                    videoSrc={project.videoSrc}
                                    chips={project.skills}
                                />
                            </Box>
                        ))}
                    </Container>
                </Stack>
            </Container>
        </Box>
    );
}
