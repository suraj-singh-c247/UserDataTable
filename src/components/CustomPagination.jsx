import { TablePagination } from "@mui/material";
import { memo } from "react";

const CustomPagination = ({
  count,
  page,
  rowsPerPage,
  onPageChange,
  onRowChange,
}) => {
  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      onPageChange={onPageChange}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={onRowChange}
      rowsPerPageOptions={[5, 10, 25, 50]}
    />
  );
};

export default memo(CustomPagination);
