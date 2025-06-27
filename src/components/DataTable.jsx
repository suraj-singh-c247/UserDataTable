import { Table, TableBody } from "@mui/material";

import TableContainer from "@mui/material/TableContainer";
import { memo } from "react";
import CustomTableHead from "./CustomTableHead";
import CustomTableBody from "./CustomTableBody";

const DataTable = ({ userData, columns }) => {

  return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
        <CustomTableHead columns={columns} />
        <CustomTableBody userData={userData}/>
      </Table>
    </TableContainer>
  );
};

export default memo(DataTable);
