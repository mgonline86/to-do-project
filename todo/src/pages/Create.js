import * as React from "react";
import { useState } from "react";
import axios from 'axios'
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button } from "@mui/material";

export default function SimpleContainer() {
    
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, desc);

    if ((title, desc)) {
        axios.post('http://localhost:4000/api/1', {
            title, desc
        }).then((res) => { console.log(res) })
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ width: "100%", maxWidth: 500 }}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" gutterBottom>
              ToDo List
            </Typography>
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              required
              id="outlined-required"
              label="Title"
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            />
            <TextareaAutosize
              onChange={(e) => setDesc(e.target.value)}
              aria-label="minimum height"
              minRows={10}
              placeholder="Desciption"
              style={{
                width: 500,
                maxWidth: "100%",
                marginTop: "20PX",
              }}
            />
            <Button type="submit" color="secondary" variant="contained">
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
}
