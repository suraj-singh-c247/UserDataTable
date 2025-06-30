import { Box, IconButton, TextField } from "@mui/material";
import { memo } from "react";
import CloseIcon from "@mui/icons-material/Close";
import searchStyles from "@/styles/Search.module.css";
const Search = ({
  placeholder,
  type,
  label,
  variant,
  className,
  searchTerm,
  handleSearch,
  handleClear,
}) => {
  return (
    <Box
      className={searchStyles.searchForm}
      component={"form"}
      noValidate
      autoComplete="off"
    >
      <TextField
        fullWidth
        type={type || "text"}
        id="outlined-basic"
        label={label}
        variant={variant}
        className={className}
        value={searchTerm}
        placeholder={placeholder || "Search..."}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {searchTerm && searchTerm.length > 0 && (
        <IconButton
          aria-label="clear"
          onClick={handleClear}
          className={searchStyles.clearButton}
        >
          <CloseIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default memo(Search);
