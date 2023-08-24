import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AssessmentsOverview from "../components/assessments-overview/assessments-overview";

const Dashboard = () => {
  return (
    <Box sx={{
      ml: { sm: `162px` },
      width: { sm: `calc(100% - 183px)` },
      background: "white",
    }}>
      <CssBaseline />
      <Toolbar />
      <AssessmentsOverview />
    </Box>
  )
}

export default Dashboard;