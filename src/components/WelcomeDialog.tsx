import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import VerifiedIcon from "@mui/icons-material/Verified";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import { grey } from "@mui/material/colors";

interface Props {
  openWelcomeDialog: boolean;
  setOpenWelcomeDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function WelcomeDialog({
  openWelcomeDialog,
  setOpenWelcomeDialog,
}: Props) {
  const handleClose = () => {
    setOpenWelcomeDialog(false);
    localStorage.setItem("welcome", JSON.stringify(false));
  };

  return (
    <Dialog
      open={openWelcomeDialog}
      onClose={handleClose}
      maxWidth={"sm"}
      sx={{ borderRadius: "10px", textAlign: "center" }}
      fullWidth
    >
      <DialogTitle
        variant="h5"
        color={grey[900]}
        sx={{
          m: 0,
          p: 2,
          fontWeight: "bold",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        Hi there! 👋
      </DialogTitle>
      <DialogContent>
        <Typography sx={{ marginBottom: "5px" }}>
          This website under MIT license, ad-free and does not use cookies
          only local storage for save a dice color and manages dialogs to
          improve your experience.
        </Typography>
        <Typography sx={{ marginBottom: "5px" }}>
          You accept this when you use the website.
        </Typography>
        <Typography sx={{ marginBottom: "5px" }}>
          For more information please visit the project repository.
        </Typography>
        <Typography sx={{ marginTop: "20px" }}>
          Thank you for visiting!
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          onClick={handleClose}
          variant="contained"
          startIcon={<VerifiedIcon />}
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
