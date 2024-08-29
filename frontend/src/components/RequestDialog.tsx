import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  styled,
  Snackbar,
  Alert,
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
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = async () => {
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (trimmedTitle.length === 0 || trimmedDescription.length === 0) {
      setShowWarning(true);
      return;
    }
    try {
      const baseEndPoint = `${import.meta.env.VITE_BE_URL}/api/cards`;
      const response = await fetch(baseEndPoint, {
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

  const handleClose = () => {
    setTitle("");
    setDescription("");
    onClose();
  };

  const handleClickAway = () => {
    if (title.trim().length > 0 || description.trim().length > 0) {
      setShowConfirmation(true);
    } else {
      handleClose();
    }
  };

  const handleConfirmClose = () => {
    setShowConfirmation(false);
    handleClose();
  };

  const handleCancelClose = () => {
    setShowConfirmation(false);
  };

  const handleWarningClose = () => {
    setShowWarning(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClickAway} disableEscapeKeyDown>
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
            onClick={handleClickAway}
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

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={showConfirmation}
        onClose={handleCancelClose}
      >
        <Alert
          onClose={handleCancelClose}
          severity="warning"
          action={
            <>
              <Button color="inherit" size="small" onClick={handleCancelClose}>
                No
              </Button>
              <Button color="inherit" size="small" onClick={handleConfirmClose}>
                Yes
              </Button>
            </>
          }
        >
          Are you sure you want to close this dialog?
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={showWarning}
        autoHideDuration={6000}
        onClose={handleWarningClose}
      >
        <Alert onClose={handleWarningClose} severity="error">
          Please fill in both title and description before submitting.
        </Alert>
      </Snackbar>
    </>
  );
};

export default RequestDialog;
