import { memo } from "react";
import Button from "@mui/material/Button";
function CustomButton({ variant, label, startIcon, onClick, ...props }) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      {...props}
      startIcon={startIcon}
    >
      {label}
    </Button>
  );
}

export default memo(CustomButton);
