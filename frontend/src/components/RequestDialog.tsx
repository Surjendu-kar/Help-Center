import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  styled,
} from "@mui/material";

interface RequestDialogProps {
  open: boolean;
  onClose: () => void;
}

const StyledButton = styled(Button)(() => ({
  borderRadius: "7px",
  borderColor: "#2e2b2b",
  padding: "6px 16px",
  textTransform: "none",
  fontWeight: 500,
  fontSize: "0.875rem",
  lineHeight: 1.75,
  minWidth: "64px",

  "&:hover": {
    borderColor: "#434040",
  },
}));

const RequestDialog: React.FC<RequestDialogProps> = ({ open, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
        onClose();
      } else {
        console.error("Failed to submit request");
      }
    } catch (error) {
      console.error("Error submitting request:", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle fontWeight={"bold"}>Submit a Request</DialogTitle>
      <DialogContent sx={{ padding: "0px 15px 10px 15px" }}>
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
      <DialogActions sx={{ padding: "0px 28px 8px" }}>
        <StyledButton
          onClick={onClose}
          variant="outlined"
          sx={{
            color: "#2e2b2b",
            backgroundColor: "white",
            "&:hover": {
              color: "white",
              backgroundColor: "#2e2b2b",
            },
          }}
        >
          Cancel
        </StyledButton>
        <StyledButton
          onClick={handleSubmit}
          variant="outlined"
          sx={{
            color: "white",
            backgroundColor: "#2e2b2b",
            "&:hover": {
              color: "#2e2b2b",
              backgroundColor: "white",
            },
          }}
        >
          Submit
        </StyledButton>
      </DialogActions>
    </Dialog>
  );
};

export default RequestDialog;
