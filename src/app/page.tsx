import Link from "next/link";
import { Projects } from "@/data/projects";
import { Container, Stack, Typography, Button, Card, CardContent } from "@mui/material";


export default function HomePage() {
    return (
        <Container sx={{ py: 6 }}>
            <Stack spacing={3}>
                <Typography variant="h3">Sebastian V</Typography>
                <Typography color="text.secondary">
                    Gameplay programmer portfolio: projects, writeups, and prototypes.
                </Typography>

                <Card>
                    <CardContent>
                        <Typography variant="h6">Midstone Team Project</Typography>
                        <Typography color="text.secondary">
                            Collaboration, feature integration, and shipping a playable build.
                        </Typography>
                        <Button sx={{ mt: 2 }} variant="contained" href="/projects/midstone-team-project">
                            View project
                        </Button>
                    </CardContent>
                </Card>
            </Stack>
        </Container>
    );
}
