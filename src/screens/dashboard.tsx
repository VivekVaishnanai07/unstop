import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AssessmentsOverview from "../components/assessments-overview/assessments-overview";
import { useState } from 'react';
import MyAssessment from "../components/my-assessment/my-assessment";

const Dashboard = () => {
  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };
  return (
    <Box sx={{
      ml: { sm: `162px` },
      width: { sm: `calc(100% - 183px)` },
      background: "white",
    }}>
      <CssBaseline />
      <Toolbar />
      <div className="dashboard">
        <AssessmentsOverview showDiv={showDiv} />
        <MyAssessment showDiv={showDiv} toggleDiv={toggleDiv} />
      </div>
    </Box>
  )
}

export default Dashboard;