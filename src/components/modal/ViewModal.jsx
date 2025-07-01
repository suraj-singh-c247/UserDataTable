import {
    Backdrop,
    Box,
    Fade,
    IconButton,
    Modal,
    Typography,
  } from "@mui/material";
  import CloseIcon from "@mui/icons-material/Close";
  import { memo, useEffect, useState } from "react";
  import styles from "@/styles/Modal.module.css"; 
  import { getUserDataFromStorage  } from "@/utils/localStorageData"; 
  import UserDetails from "../UserDetails";
  
  const ViewModal = ({ open, onClose, title, id }) => {
   const [singleUser, setSingleUser] = useState([]);   
     
     useEffect(() => {
       const userData = getUserDataFromStorage();    
       if (id) {
         const user = userData.find((user) => user.id === parseInt(id));
         setSingleUser(user);
       }
     }, [id]);
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
              <Typography className={styles.modalHeading} id="modal-modal-title" variant="h6" component="h2">
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
              <UserDetails user={singleUser}/>
            </Box>
          </Box>
        </Fade>
      </Modal>
    );
  };
  
  export default memo(ViewModal);
  