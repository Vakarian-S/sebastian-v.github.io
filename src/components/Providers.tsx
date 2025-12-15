"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import TopAppBar from "./TopAppBar";

const theme = createTheme({
    palette: {
        primary: {
            50: "#e8e9f2",
            100: "#c4c9e0",
            900: "#212463",
            light: "#c4c9e0",
            main: "#5f69a6",
            dark: "#212463",
            contrastText: "#fff",
        },
        secondary: {
            light: "#ff7961",
            main: "#a69b5f",
            dark: "#ba000d",
            contrastText: "#fff",
        },
    },
});

export default function Providers(props: { children: React.ReactNode }) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box bgcolor="primary.50" minHeight="100vh">
                    <TopAppBar />
                    {props.children}
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}
