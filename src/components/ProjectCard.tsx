"use client";

import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Stack,
    Typography,
    Button,
} from "@mui/material";

type ProjectCardProps = {
    title: string;
    description: string;
    githubLink: string;
    videoSrc?: string;
    chips?: string[];
};

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <Card sx={{ flex: 1, minWidth: 280, borderRadius: 3 }}>
            {props.videoSrc ? (
                <CardMedia
                    component="video"
                    src={props.videoSrc}
                    controls
                    sx={{ height: 220 }}
                />
            ) : null}

            <CardContent>
                <Typography variant="h5" color="primary.dark" gutterBottom>
                    {props.title}
                </Typography>

                <Typography color="text.secondary" sx={{ mb: 2 }}>
                    {props.description}
                </Typography>

                {props.chips && props.chips.length > 0 ? (
                    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                        {props.chips.map((chipLabel) => (
                            <Chip key={chipLabel} label={chipLabel} />
                        ))}
                    </Stack>
                ) : null}
            </CardContent>

            <CardActions sx={{ px: 2, pb: 2 }}>
                <Button
                    variant="contained"
                    href={props.githubLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </Button>
            </CardActions>
        </Card>
    );
}
