import React from "react";
import { Box, Typography, Stack, Paper } from "@mui/material";
import { useRouter } from "next/router";
import CustomButton from "./CustomButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import style from "@/styles/Home.module.css";
const UserDetails = ({ user }) => {
  const router = useRouter();

  return (
    <Paper elevation={3} className={style.userDetails}>
      <CustomButton
        onClick={() => router.push("/")}
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 2 }}
        className={style.backButton}
      />
      <Typography variant="h6" gutterBottom className={style.userDetailsTitle}>
        User Details
      </Typography>
      <Stack spacing={1}>
        <Box>
          <Typography
            variant="subtitle2"
            component="span"
            className={style.userDetailsLabel}
          >
            Name:{" "}
          </Typography>
          <Typography variant="body1" component="span">
            {user?.name}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            component="span"
            className={style.userDetailsLabel}
          >
            Email:{" "}
          </Typography>
          <Typography variant="body1" component="span">
            {user?.email}
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="subtitle2"
            component="span"
            className={style.userDetailsLabel}
          >
            Phone:{" "}
          </Typography>
          <Typography variant="body1" component="span">
            {user?.phoneNumber}
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="subtitle2"
            component="span"
            className={style.userDetailsLabel}
          >
            Role:{" "}
          </Typography>
          <Typography variant="body1" component="span">
            {user?.role}
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="subtitle2"
            component="span"
            className={style.userDetailsLabel}
          >
            Status:{" "}
          </Typography>
          <Typography variant="body1" component="span">
            {user?.status}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
};

export default UserDetails;
