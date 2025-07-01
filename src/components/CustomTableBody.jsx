import {
  Chip,
  Fade,
  IconButton,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
} from "@mui/material";
import { memo } from "react";
import { useRouter } from "next/router";
import PreviewIcon from "@mui/icons-material/Preview";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import tableStyle from "@/styles/Table.module.css";
const CustomTableBody = ({ userData,setViewModal,setEditModal,setDeleteModal }) => {
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
            <Tooltip
              title="View"
              arrow
              placement="top"
              slots={{
                transition: Fade,
              }}
              slotProps={{
                transition: { timeout: 600 },
              }}
            >
              <IconButton onClick={() => setViewModal({id:row.id,open:true})}>
                <PreviewIcon color="secondary" />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Edit"
              arrow
              placement="top"
              slots={{
                transition: Fade,
              }}
              slotProps={{
                transition: { timeout: 600 },
              }}
            >
              <IconButton onClick={() => setEditModal({id:row.id,open:true})}>
                <EditIcon color="info" />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Delete"
              arrow
              placement="top"
              slots={{
                transition: Fade,
              }}
              slotProps={{
                transition: { timeout: 600 },
              }}
            >
              <IconButton onClick={() => setDeleteModal({id:row.id,open:true})}>
                <DeleteIcon color="error" />
              </IconButton>
            </Tooltip>
          </TableCell>
        </TableRow>

      ))}
      {userData.length===0 && <TableRow><TableCell style={{textAlign:"center"}} colSpan={"6"}>No data found...</TableCell></TableRow>}
    </TableBody>
  );
};

export default memo(CustomTableBody);
