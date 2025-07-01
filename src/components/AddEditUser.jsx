import {  
  FormControl,
  InputLabel,
  MenuItem,  
  Select,
  TextField, 
} from "@mui/material";
import { Controller } from "react-hook-form";
import errorStyles from "@/styles/Error.module.css";
import formStyles from "@/styles/Form.module.css"

const EditUser = ({control,errors}) => { 
  return (
    <>      
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                className={formStyles.formControl}
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}  
                className={formStyles.formControl}
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
          {/* Select Dropdown */}
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth margin="normal" error={!!errors.role}>
                <InputLabel>Select Role</InputLabel>
                <Select
                  {...field}                 
                  label="Select Role"
                  className={formStyles.formControl}
                >
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Editor">Editor</MenuItem>
                  <MenuItem value="Viewer">Viewer</MenuItem>
                </Select>
                {errors.role && (
                  <p className={errorStyles.error}>{errors.role.message}</p>
                )}
              </FormControl>
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <TextField
                {...field} 
                className={formStyles.formControl}
                label="Phone Number"
                variant="outlined"
                fullWidth
                margin="normal"
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
              />
            )}
          />
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth margin="normal" error={!!errors.status}>
                <InputLabel>Select Status</InputLabel>
                <Select
                  {...field}
                  label="Select Status"
                  className={formStyles.formControl}
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="InActive">InActive</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                </Select>
                {errors.status && (
                  <p style={{ color: "red", fontSize: "0.8rem" }}>
                    {errors.status.message}
                  </p>
                )}
              </FormControl>
            )}
          />        
       
    </>
  );
};
export default EditUser;
