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
  const [services, setServices] = useState<string[]>([]);
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setChecked(event.target.checked);
    // console.log("event", event.target.value);
    // Needs to loop through the services and check if the current value is present
    const index = services.indexOf(event.target.value);

    if (index === -1) {
      setServices([...services, event.target.value]);
    } else {
      services.filter((service) => service !== event.target.value);
    }
  };

  console.log("services", services);

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Service</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out Form to modify Customer Info
          </DialogContentText>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={services.includes("Kitchen")}
                  onChange={handleChange}
                />
              }
              label={"Kitchen"}
              value="Kitchen"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={services.includes("Bath")}
                  onChange={handleChange}
                />
              }
              label={"Bath"}
              value="Bath"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={services.includes("Cabinets")}
                  onChange={handleChange}
                />
              }
              label={"Cabinets"}
              value="Cabinets"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={services.includes("Flooring")}
                  onChange={handleChange}
                />
              }
              label={"Flooring"}
              value="Flooring"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={services.includes("Bedrooms")}
                  onChange={handleChange}
                />
              }
              label={"Bedrooms"}
              value="Bedrooms"
            />
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
