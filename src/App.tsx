import React from "react";
import "./App.css";
import "./App.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import CollapsibleTable from "./table";
import FormDialog from "./components/Dialog";

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Box className="table">
      <Typography>Customer Tracker</Typography>
      <Button onClick={handleClickOpen}>Add Customer</Button>
      <Button>Remove Customer</Button>
      <Button>Update Customer</Button>
      <Grid container>
        <Grid item xs={12} md={6}>
          <CollapsibleTable />
        </Grid>
      </Grid>
      <FormDialog open={open} setOpen={setOpen} />
    </Box>
  );
}

export default App;
