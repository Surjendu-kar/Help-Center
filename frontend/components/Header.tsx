import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  styled,
} from "@mui/material";

const MainContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "1rem",
  background: "black",
  color: "white",
}));

const ButtonStyled = styled(Button)(() => ({
  backgroundColor: "#2e2b2b",
  color: "white",
  padding: "8px 16px",
  border: "1px solid grey",
  borderRadius: 1,
  "&:hover": {
    backgroundColor: "#434040",
  },
}));

const DotIndicator = styled(Box)(() => ({
  width: 24,
  height: 24,
  background: "white",
  borderRadius: "50%",
}));

const Header = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    try {
      const trimmedTitle = title.trim();
      const trimmedDescription = description.trim();

      const response = await fetch("/api/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: trimmedTitle,
          description: trimmedDescription,
        }),
      });

      if (response.ok) {
        console.log("Request submitted successfully");
        handleClose();
      } else {
        console.error("Failed to submit request");
      }
    } catch (error) {
      console.error("Error submitting request:", error);
    }
  };

  return (
    <MainContainer>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <DotIndicator />
        <span>Abstract | Help Center</span>
      </Box>
      <ButtonStyled onClick={handleOpen}>Submit a request</ButtonStyled>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Submit a Request</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </MainContainer>
  );
};

export default Header;
