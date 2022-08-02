import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  FormControlLabel,
  FormControl,
  FormGroup,
  Checkbox,
} from "@mui/material";

export default function FormDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [value, setValue] = React.useState("female");
  const [services] = useState([
    "Kitchen",
    "Bath",
    "Cabinets",
    "Flooring",
    "Bedrooms",
  ]);
  const handleClose = () => {
    setOpen(false);
  };

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log("event", event);
  //     setValue((event.target as HTMLInputElement).value);
  //   };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Service</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out Form to modify Customer Info
          </DialogContentText>
          <FormGroup>
            {services.map((service) => (
              <FormControlLabel control={<Checkbox />} label={service} />
            ))}
          </FormGroup>
          <FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
