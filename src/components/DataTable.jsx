import { Table, TableContainer } from "@mui/material";
import { memo } from "react";
// Components
import CustomTableHead from "./CustomTableHead";
import CustomTableBody from "./CustomTableBody";
import CustomPagination from "./CustomPagination";
// Styles
import tableStyle from "@/styles/Table.module.css";

const DataTable = ({
  userData,
  columns,
  count,
  page,
  rowsPerPage,
  onPageChange,
  onRowChange,
}) => {
  return (
    <>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table
          stickyHeader
          aria-label="sticky table"
          className={tableStyle.table}
        >
          <CustomTableHead columns={columns} />
          <CustomTableBody userData={userData} />
        </Table>
      </TableContainer>
      <CustomPagination
        page={page}
        rowsPerPage={rowsPerPage}
        count={count}
        onPageChange={onPageChange}
        onRowChange={onRowChange}
      />
    </>
  );
};

export default memo(DataTable);
