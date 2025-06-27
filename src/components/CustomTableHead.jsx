import { TableCell, TableHead, TableRow } from "@mui/material";
import { memo } from "react";

const CustomTableHead = ({ columns }) => {
  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell  key={column.id}  align={column.align || "left"} style={{ minWidth: column.minWidth }}>
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default memo(CustomTableHead);