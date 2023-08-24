import { Divider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import MenuIcon from "../../assets/icon/segment";
import "./header.css";
import BasicTabs from "../../components/tab/basic-tabs";

export default function Header({ handleDrawerToggle }: any) {

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className="header"
        sx={{
          width: { sm: `calc(100% - 182px)` },
          mr: { sm: `20px` },
          background: "white",
          boxShadow: "none",
          padding: "0 !important",
          justifyContent: "flex-start"
        }}
      >
        <Toolbar className="header-box">
          <div className="header-first-section">
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2, display: { sm: "none" },
                width: "40px",
                height: "40px",
                padding: "10px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "60px",
                background: "var(--secondary-5, #F2F8FE)"
              }}
            >
              <MenuIcon className="menu-icon" />
            </IconButton>
            <div className="header-title">Assessment</div>
          </div>
          <Divider className="header-divider" variant="middle" orientation="vertical" flexItem />
          <div className="header-second-section">
            <BasicTabs />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
