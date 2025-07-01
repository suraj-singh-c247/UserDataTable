import {
  Backdrop,
  Box,
  Fade,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { memo } from "react";
import styles from "@/styles/Modal.module.css";
import btnStyles from "@/styles/Button.module.css";
import CustomButton from "@/components/CustomButton";
import { toast } from "react-toastify";
const DeleteModal = ({
  title,
  open,
  onClose,
  onDelete,
  children,
  id,
  setDeleteModal,
}) => {
  const handleDelete = (e, id) => {
    e.preventDefault();
    onDelete(id);
    toast.success("User deleted successfully!");
    setDeleteModal({ open: false });
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box className={styles.modalStyle}>
          <Box className={styles.modalHeader}>
            <Typography id="modal-modal-title" variant="h6" component="h2" mb={1} className={styles.modalHeading}>
              {title || "Add User Details"}
            </Typography>
            <IconButton
              aria-label="close"
              onClick={() => {
                onClose();
              }}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box className={styles.modalContent}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={(e) => handleDelete(e, id)}
            >
              {children || (
                <Typography variant="body1" className={styles.deleteText}>
                  Are you sure you want to delete this user?
                </Typography>
              )}
              <Box
                className={`${btnStyles.buttonContainer} ${btnStyles.buttonContainerGap}`}
              >
                <CustomButton
                  variant={"outlined"}
                  onClick={onClose}
                  label={"Cancel"}
                  className={btnStyles.btn}
                />
                <CustomButton
                  type="submit"
                  color={"error"}
                  variant={"contained"}
                  label={"Delete"}
                  className={btnStyles.btn}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default memo(DeleteModal);
