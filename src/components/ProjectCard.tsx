"use client";

import * as React from "react";
import Link from "next/link";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Stack,
    Typography,
} from "@mui/material";

type ProjectCardProps = {
    title: string;
    description: string;
    githubLink: string;
    detailHref: string; // example: `/projects/midstone`
    videoSrc?: string;
    chips?: string[];
};

function HasChips(chips: string[] | undefined): chips is string[] {
    return Array.isArray(chips) && chips.length > 0;
}

export default function ProjectCard(props: ProjectCardProps) {
    const hasVideo = Boolean(props.videoSrc);

    return (
        <Card
            elevation={2}
            sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                minWidth: 280,
                borderRadius: 3,
                overflow: "hidden",
            }}
        >
            {hasVideo ? (
                <CardMedia
                    component="iframe"
                    src={props.videoSrc}
                    sx={{height: 220, bgcolor: "grey.100"}}
                />
            ) : (
                <Box
                    sx={{
                        height: 220,
                        bgcolor: "primary.100",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        px: 2,
                    }}
                >
                    <Typography variant="subtitle1" color="primary.dark" textAlign="center">
                        {props.title}
                    </Typography>
                </Box>
            )}

            <CardContent sx={{flexGrow: 1}}>
                <Typography variant="h5" color="primary.dark" gutterBottom>
                    {props.title}
                </Typography>

                <Typography
                    color="text.secondary"
                    sx={{
                        mb: 2,
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 5,
                    }}
                >
                    {props.description}
                </Typography>

                {HasChips(props.chips) ? (
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                        {props.chips.map((chipLabel, chipIndex) => (
                            <Chip
                                key={`${chipLabel}-${chipIndex}`}
                                label={chipLabel}
                                size="small"
                                color={chipIndex === 0 ? "secondary" : "primary"}
                                variant={chipIndex === 0 ? "filled" : "outlined"}
                            />
                        ))}
                    </Stack>
                ) : null}
            </CardContent>

            <CardActions
                sx={{
                    px: 2,
                    pb: 2,
                    pt: 0,
                    display: "flex",
                    gap: 1,
                }}
            >
                <Button
                    component={Link}
                    href={props.detailHref}
                    variant="outlined"
                    fullWidth
                >
                    Details
                </Button>

                <Button
                    href={props.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    variant="contained"
                    fullWidth
                >
                    GitHub
                </Button>
            </CardActions>
        </Card>
    );
}
