import {
  Backdrop,
  Box,
  Fade,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { memo, useEffect } from "react";
import styles from "@/styles/Modal.module.css";
import btnStyles from "@/styles/Button.module.css";
import CustomButton from "@/components/CustomButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "@/utils/validation";
import AddEditUser from "@/components/AddEditUser";
import {
  getUserDataFromStorage,
  setUserDataToStorage,
} from "@/utils/localStorageData";
import { toast } from "react-toastify";

const AddEditModal = ({ open, onClose, title, userData, setUserData, id }) => {
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "", // This will be used for the select dropdown
      phoneNumber: "",
      status: "",
    },
  });
  // It's use for edit

  useEffect(() => {
    if (userData && id) {
      const findUser = userData.find((user) => user.id === parseInt(id));
      setValue("name", findUser.name || "");
      setValue("email", findUser.email || "");
      setValue("role", findUser.role || "");
      setValue("phoneNumber", findUser.phoneNumber || "");
      setValue("status", findUser.status || "");
    } else {
      reset();
    }
  }, [open, userData]);

  const onSubmit = (data) => {
    const existingData = getUserDataFromStorage();
    if (!id) {
      const emailExists = existingData.some(
        (user) => user.email === data.email
      );
      if (emailExists) {
        toast.error("Email already exists. Please use a different email.");
        return; // Stop the submission if email already exists
      }
      const newId = existingData.length
        ? existingData[existingData.length - 1].id + 1
        : 1; // Generate a new ID
      const newUser = { id: newId, ...data };
      setUserData([...existingData, newUser]);
      // Update localStorage with the new user data
      setUserDataToStorage([...existingData, newUser]);
      toast.success("User added successfully!");
    }

    if (id) {
      const updatedData = userData.map((user) =>
        user.id === parseInt(id) ? { ...user, ...data } : user
      );
      setUserData(updatedData);
      setUserDataToStorage(updatedData);
      toast.success("User updated successfully!");
    }

    onClose();
    reset();
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
            <Typography
              className={styles.modalHeading}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              {title || "Add User Details"}
            </Typography>
            <IconButton
              aria-label="close"
              onClick={() => {
                onClose();
                reset();
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
              onSubmit={handleSubmit(onSubmit)}
            >
              <AddEditUser
                control={control}
                errors={errors}
                userData={userData}
                setUserData={setUserData}
              />
              <Box
                className={`${btnStyles.buttonContainer} ${btnStyles.buttonContainerGap}`}
              >
                <CustomButton
                  variant={"outlined"}
                  onClick={onClose}
                  label={"Cancel"}
                  className={`${btnStyles.btn} ${btnStyles.secondaryButton}`}
                />
                <CustomButton
                  type="submit"
                  variant={"contained"}
                  label={"Save"}
                  className={`${btnStyles.btn} ${btnStyles.primaryButton}`}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default memo(AddEditModal);
