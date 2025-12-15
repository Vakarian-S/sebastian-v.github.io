import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    Box,
    Breadcrumbs,
    Button,
    Chip,
    Container,
    Divider,
    Stack,
    Typography,
} from "@mui/material";
import { Projects } from "@/data/projects";

type PageProps = {
    params: { slug: string };
};

export default async function ProjectDetailPage(props: PageProps) {
    const params = await props.params;
    const project = Projects.find((item) => item.slug === params?.slug);
    if (!project) notFound();

    return (
        <Box bgcolor="primary.50" minHeight="100vh" py={{ xs: 3, md: 5 }}>
            <Container maxWidth="md">
                <Stack spacing={{ xs: 2, md: 3 }}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link href="/" style={{ textDecoration: "none" }}>
                            Home
                        </Link>
                        <Link href="/projects" style={{ textDecoration: "none" }}>
                            Projects
                        </Link>
                        <Typography color="text.primary">{project.title}</Typography>
                    </Breadcrumbs>

                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={1.5}
                        useFlexGap
                    >
                        <Link href="/projects" style={{ width: "100%", textDecoration: "none" }}>
                            <Button variant="outlined" fullWidth>
                                Back to Projects
                            </Button>
                        </Link>

                        <Button
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            variant="contained"
                            fullWidth
                        >
                            View on GitHub
                        </Button>
                    </Stack>

                    {project.videoSrc ? (
                        <Box
                            sx={{
                                borderRadius: 3,
                                overflow: "hidden",
                                border: "1px solid",
                                borderColor: "divider",
                                bgcolor: "grey.100",
                            }}
                        >
                            <Box
                                component="iframe"
                                src={project.videoSrc}
                                sx={{
                                    display: "block",
                                    width: "100%",
                                    height: { xs: 220, sm: 320, md: 380 },
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    ) : null}

                    <Divider />

                    <Stack spacing={1.5}>
                        <Typography variant="h5" color="primary.dark">
                            Overview
                        </Typography>
                        <Typography color="text.secondary" sx={{ fontSize: { xs: "1rem", md: "1.05rem" } }}>
                            {project.description}
                        </Typography>
                    </Stack>

                    <Divider />

                    <Stack spacing={1.5}>
                        <Typography variant="h5" color="primary.dark">
                            Skills Highlighted
                        </Typography>

                        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                            {project.skills.map((skill, index) => (
                                <Chip
                                    key={`${skill}-${index}`}
                                    label={skill}
                                    size="small"
                                    color={index === 0 ? "secondary" : "primary"}
                                    variant={index === 0 ? "filled" : "outlined"}
                                />
                            ))}
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}

export function generateStaticParams() {
    return Projects.map((project) => ({ slug: project.slug }));
}
