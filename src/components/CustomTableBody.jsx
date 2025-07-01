import {
  Chip,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { memo } from "react";
import { useRouter } from "next/router";
import PreviewIcon from "@mui/icons-material/Preview";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import tableStyle from "@/styles/Table.module.css";
const CustomTableBody = ({ userData }) => {
  const router = useRouter();
  return (
    <TableBody className={tableStyle.tableBody}>
      {userData.map((row) => (
        <TableRow hover key={row.id}>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell>{row.role}</TableCell>
          <TableCell>{row.phoneNumber}</TableCell>
          <TableCell>
            {row.status && (
              <Chip
                color={
                  row.status === "Active"
                    ? "success"
                    : row.status === "InActive"
                    ? "warning"
                    : "info"
                }
                label={
                  row.status === "Active"
                    ? "Active"
                    : row.status === "InActive"
                    ? "InActive"
                    : "Pending"
                }
              />
            )}{" "}
          </TableCell>
          <TableCell style={{ display: "flex", gap: "4px" }}>
            <IconButton onClick={() => router.push(`/userData/${row.id}`)}>
              <PreviewIcon color="secondary"/>
            </IconButton>
            <IconButton onClick={() => router.push(`/editUser/${row.id}`)}>
              <EditIcon color="info"/>
            </IconButton>
            <IconButton onClick={() => router.push(`/deleteUser/${row.id}`)}>
              <DeleteIcon color="error"/>
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default memo(CustomTableBody);
