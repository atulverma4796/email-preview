import React from "react"
import InputPanel from "./components/InputPanel"
import PreviewPanel from "./components/PreviewPanel"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"

function App() {
  return (
    <Container maxWidth="md" sx={{ paddingY: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputPanel />
        </Grid>
        <Grid item xs={12} md={6}>
          <PreviewPanel />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
