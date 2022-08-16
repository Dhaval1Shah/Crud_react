import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "./navbar.css";
import { alpha, Button, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Navfor from "../Nav/Navfor";
import HomeIcon from "@mui/icons-material/Home";
import PaymentIcon from "@mui/icons-material/Payment";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import BorderAllIcon from "@mui/icons-material/BorderAll";

const drawerWidth = 340;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "136ch",
    },
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function Navbar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(4);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} className="appbar">
          <Toolbar>
            <IconButton
              color="inherit"
              style={{ color: "black" }}
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Search>
              <SearchIconWrapper>
                <SearchIcon style={{ color: "black" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Typography variant="h6" noWrap component="div">
              {/* Persistent drawer */}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              background: "#f5f6f8",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <h1 className="Main_headerTitle">PATIENT</h1>
          <List className="NavList">
            <Navfor
              onClick={(event) => handleListItemClick(event, 1)}
              to="/dashboard"
              primary="Dashboard"
              icon={
                <HomeIcon
                  className={selectedIndex === 1 ? "nav_selected" : ""}
                />
              }
              selected={selectedIndex === 1}
              className={
                selectedIndex === 1 ? "TextLink nav_selected" : "TextLink"
              }
            />
            <Navfor
              onClick={(event) => handleListItemClick(event, 2)}
              to="/enquires"
              primary="Enquires"
              icon={
                <BorderAllIcon
                  className={selectedIndex === 2 ? "nav_selected" : ""}
                />
              }
              selected={selectedIndex === 2}
              className={
                selectedIndex === 2 ? "TextLink nav_selected" : "TextLink"
              }
            />

            <Navfor
              onClick={(event) => handleListItemClick(event, 3)}
              to="/pay"
              primary="Payment"
              icon={
                <PaymentIcon
                  className={selectedIndex === 3 ? "nav_selected" : ""}
                />
              }
              selected={selectedIndex === 3}
              className={
                selectedIndex === 3 ? "TextLink nav_selected" : "TextLink"
              }
            />

            <Navfor
              onClick={(event) => handleListItemClick(event, 4)}
              to="/profile"
              primary="Profile"
              icon={
                <ManageAccountsIcon
                  className={selectedIndex === 4 ? "nav_selected" : ""}
                />
              }
              selected={selectedIndex === 4}
              className={
                selectedIndex === 4 ? "TextLink nav_selected" : "TextLink"
              }
            />
          </List>

          <div className="Sidebar__Button">
            <h3>Need Our Help?</h3>
            <Button
              variant="contained"
              className="Contact_button"
              style={{ textTransform: "none" }}
            >
              Contact Us
            </Button>
          </div>
        </Drawer>
        <Main open={open} style={{ padding: 0 }}></Main>
      </Box>
    </div>
  );
}

export default Navbar;
