import React, { memo } from "react";
import { Box, Typography, Grid, Chip } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import style from "@/styles/Home.module.css";
const UserDetails = ({ user }) => {
  return (
    <Grid container spacing={1} className={style.userDetails}>
      <Grid size={12}>
        <Box className={style.userDetailsBox}>
          <PersonIcon color="success" />
          <Box>
            <Typography
              variant="subtitle2"
              component="strong"
              className={style.userDetailsLabel}
            >
              Name:{" "}
            </Typography>
            <Typography
              variant="body1"
              component="span"
              className={style.userContent}
            >
              {user?.name}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid size={12}>
        <Box className={style.userDetailsBox}>
          <EmailIcon color="success" />
          <Box>
            <Typography
              variant="subtitle2"
              component="strong"
              className={style.userDetailsLabel}
            >
              Email:{" "}
            </Typography>
            <Typography
              variant="body1"
              component="span"
              className={style.userContent}
            >
              {user?.email}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid size={12}>
        <Box className={style.userDetailsBox}>
          <PhoneIcon color="success" />
          <Box>
            <Typography
              variant="subtitle2"
              component="strong"
              className={style.userDetailsLabel}
            >
              Phone:{" "}
            </Typography>
            <Typography
              variant="body1"
              component="span"
              className={style.userContent}
            >
              {user?.phoneNumber}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid size={12}>
        <Box className={style.userDetailsBox}>
          <ManageAccountsIcon color="success" />
          <Box>
            <Typography
              variant="subtitle2"
              component="strong"
              className={style.userDetailsLabel}
            >
              Role:{" "}
            </Typography>
            <Typography
              variant="body1"
              component="span"
              className={style.userContent}
            >
              {user?.role}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid size={12}>        
          <Box className={style.userDetailsBox}>
            <PanoramaFishEyeIcon color="success" />
            <Box>
              <Typography
                variant="subtitle2"
                component="strong"
                className={style.userDetailsLabel}
              >
                Status:{" "}
              </Typography>
            {user.status && (
              <Chip
                color={
                  user.status === "Active"
                    ? "success"
                    : user.status === "InActive"
                      ? "warning"
                      : "info"
                }
                label={
                  user.status === "Active"
                    ? "Active"
                    : user.status === "InActive"
                      ? "InActive"
                      : "Pending"
                }
              />)}
            </Box>
          </Box>       
      </Grid>
    </Grid>
  );
};

export default memo(UserDetails);
