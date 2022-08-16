import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Pic1 from "../../images/pic1.png";
import "./profile.css";
import { LinearProgress, linearProgressClasses } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

function Profile() {
  return (
    <div>
      <h1>My Patient Profiles</h1>

      <div className="Main_card">
        <Card sx={{ maxWidth: 345 }} className="Card__Contentet">
          <CardHeader
            avatar={
              <h3 style={{ padding: "10px", fontWeight: "lighter" }}>2d ago</h3>
            }
            action={
              <IconButton aria-label="settings" className="More__Icon">
                <MoreHorizIcon />
              </IconButton>
            }
          />
          <CardMedia
            component="img"
            className="Profile__image"
            image={Pic1}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="h5" color="black" className="card_profilename">
              Jonathan <br /> smith
            </Typography>

            <Typography
              variant="inherit"
              color="aqua"
              className="card_profilename"
            >
              Active
            </Typography>

            <Typography>
              <BorderLinearProgress
                variant="determinate"
                value={35}
                className="Borderliner"
              />
            </Typography>
            <Typography>
              <h3 className="Profile__Card-storage"> Storage 45% </h3>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Profile;
