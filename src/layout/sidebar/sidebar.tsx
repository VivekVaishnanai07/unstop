import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import AdminMedsIcon from "../../assets/icon/admin-meds";
import CloseIcon from "../../assets/icon/close";
import DashboardIcon from "../../assets/icon/dashboard-icon";
import NoteAltIcon from "../../assets/icon/note-alt";
import QuizIcon from "../../assets/icon/quiz";
import "./sidebar.css"

const drawerWidth = 140;

interface Props {
  window?: () => Window;
  mobileOpen: any;
  handleDrawerToggle: any;
}

const webViewDrawerData = [
  {
    title: "Dashboard",
    icon: <DashboardIcon className="drawer-icon" />,
  },
  {
    title: "Assessment",
    icon: <NoteAltIcon className="drawer-icon" />,
  },
  {
    title: "My Library",
    icon: <QuizIcon className="drawer-icon" />,
  },
];

const mobileViewDrawerData = [
  {
    title: "Dashboard",
    icon: <DashboardIcon className="sidebar-menu-icon" />,
  },
  {
    title: "Assessment",
    icon: <NoteAltIcon className="sidebar-menu-icon" />,
  },
  {
    title: "My Library",
    icon: <QuizIcon className="sidebar-menu-icon" />,
  },
];


const Sidebar = (props: Props) => {
  const { window, mobileOpen, handleDrawerToggle } = props;

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* mobile view drawer */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "275px",
            background: "var(--secondary-5, #F2F8FE)",
            padding: "0 !important"
          },
        }}
      >
        <div className="mb-sidebar-main-box">
          <div className="sidebar-header">
            <div className="header-title">Menu</div>
            <CloseIcon className="header-icon" onClick={handleDrawerToggle} />
          </div>
          {mobileViewDrawerData.map((data, index: number) => (
            <div
              className={
                data.title === "Assessment"
                  ? "sidebar-first-section sidebar-active-section"
                  : "sidebar-first-section"
              }
              key={index + 1}
            >
              {data.icon}
              <div
                className={(data.title !== "Assessment" && "sidebar-menu-title") || ""}
              >
                {data.title}
              </div>
            </div>
          ))}
          <div className="sidebar-divider" />
          <div className="sidebar-first-section" style={{ position: "relative" }}>
            <AdminMedsIcon className="sidebar-menu-icon" />
            <div className="sidebar-menu-title">Round Status</div>
            <div className="admin-box">
              <div className="admin-text">Admin</div>
            </div>
          </div>
        </div>
      </Drawer>

      {/* web view drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        <div className="drawer-main-box">
          {webViewDrawerData.map((data, index) => (
            <div
              className={
                data.title === "Assessment"
                  ? "drawer-first-section drawer-active-section"
                  : "drawer-first-section"
              }
              key={index + 1}
            >
              {data.icon}
              <div
                className={(data.title !== "Assessment" && "drawer-title") || ""}
              >
                {data.title}
              </div>
            </div>
          ))}
          <div className="drawer-second-section" style={{ position: "relative" }}>
            <div className="divider" />
            <div className="admin-text">Admin</div>
          </div>
          <div className="drawer-first-section">
            <AdminMedsIcon className="drawer-icon" />
            <div className="drawer-title">Round Status</div>
          </div>
        </div>
      </Drawer>
    </Box>
  )
}

export default Sidebar;