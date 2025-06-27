import { TableBody, TableCell, TableRow } from "@mui/material";
import { memo } from "react";
import Button from "./Button";

const CustomTableBody = ({ userData, onEdit, onDelete }) => {

  
  return (
    <TableBody>
      {userData.map((row) => (
        <TableRow hover key={row.id}>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell>{row.role}</TableCell>
          <TableCell>{row.phoneNumber}</TableCell>
          <TableCell>{row.status}</TableCell>
          <TableCell style={{ display: "flex", gap: "10px" }}>
            <Button variant={"outlined"} label={"View"} onClick={() => console.log("View", row.id)} />
            <Button variant={"outlined"} label={"Edit"} onClick={() => onEdit(row.id)}>Edit</Button>
            <Button variant={"outlined"} label={"Delete"} onClick={() => onDelete(row.id)}>Delete</Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default memo(CustomTableBody);
