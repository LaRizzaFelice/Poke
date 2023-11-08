import { AppBar, Box, Container, CssBaseline, Fab, Toolbar, Typography } from "@mui/material";
import React from "react";
import { ScrollToTopComponent } from "./Component/ScrollToTopComponent";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PokéCard from "./Component/PokéCard";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            Pokémon Cards App
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box sx={{ my: 2 }}>
         <PokéCard/>
        </Box>
      </Container>
       <ScrollToTopComponent>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTopComponent>
    </React.Fragment>
  );
}