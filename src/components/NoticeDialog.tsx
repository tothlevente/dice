import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

export default function NoticeDialog({ open, setOpen }: any) {
  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("showNoticeDialog", JSON.stringify(false));
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ fontSize: "24px", fontWeight: "bold" }}>Hi there! 👋</DialogTitle>
      <DialogContent>
        <Typography sx={{ marginBottom: 2 }}>
          This website under MIT license, ad-free and does not use cookies only local storage for save a dice color and manages dialogs to improve your experience.
        </Typography>
        <Typography>Thank you for visiting!</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained" sx={{ backgroundColor: "#000" }}>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
