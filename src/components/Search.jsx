import { Box, TextField } from "@mui/material";
import { memo } from "react";

const Search = ({placeholder,type, label, variant, className, searchTerm, setSearchTerm }) => {
  return (
    <Box
      className="search-container"
      component={"form"}
      noValidate
      autoComplete="off"
    >
      <TextField
       fullWidth
        type={type||"text"}
        id="outlined-basic"
        label={label}
        variant={variant}
        className={className}
        value={searchTerm}
        placeholder={placeholder || "Search..."}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </Box>
  );
};

export default memo(Search);
