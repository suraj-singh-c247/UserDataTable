import { memo } from "react";
import Button from "@mui/material/Button";
function CustomButton({ variant, label, startIcon, onClick, ...props }) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      startIcon={startIcon}
      {...props}
    >
      {label}
    </Button>
  );
}

export default memo(CustomButton);
