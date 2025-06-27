import React from 'react';
import { Box, Typography, Stack, Paper } from '@mui/material';
import { useRouter } from 'next/router';
import CustomButton from './CustomButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const UserDetails = ({ user }) => {
  const router=useRouter();
  return ( <Paper elevation={3} sx={{ p: 3, maxWidth: 400 }}>
    <CustomButton
      variant="outlined"
      label="Back"
      onClick={() =>router.push('/')}
      startIcon={<ArrowBackIcon />}
      sx={{ mb: 2 }}
    />
    <Typography variant="h6" gutterBottom>
      User Details
    </Typography>
    <Stack spacing={1}>
    <Box>
        <Typography variant="subtitle2" component="span">Name: </Typography>
        <Typography variant="body1" component="span">{user?.name}</Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2" component="span">Email: </Typography>
        <Typography variant="body1" component="span">{user?.email}</Typography>
      </Box>
     
      <Box>
        <Typography variant="subtitle2" component="span">Phone: </Typography>
        <Typography variant="body1" component="span">{user?.phoneNumber}</Typography>
      </Box>
     
      <Box>
        <Typography variant="subtitle2" component="span">Role: </Typography>
        <Typography variant="body1" component="span">{user?.role}</Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2" component="span">Status: </Typography>
        <Typography variant="body1" component="span">{user?.status}</Typography>
      </Box>
     
    </Stack>
  </Paper>)
}

export default UserDetails;
