import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Navfor({ onClick, primary, className, to, icon, selected, sx }) {
  return (
    <div>
      <Link to={to} className={className}>
        <ListItemButton sx={sx} selected={selected} onClick={onClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={primary} />
        </ListItemButton>
      </Link>
    </div>
  );
}

export default Navfor;
