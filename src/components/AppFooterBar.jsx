import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import SchoolIcon from "@mui/icons-material/School";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

export const AppFooterBar = () => {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Repo de git" icon={<GitHubIcon />} />
        <BottomNavigationAction
          label="Alexander Chávez"
          icon={<SchoolIcon />}
        />
        <BottomNavigationAction
          label="Actividad 2"
          icon={<DoneOutlineIcon />}
        />
      </BottomNavigation>
    </Box>
  );
};
