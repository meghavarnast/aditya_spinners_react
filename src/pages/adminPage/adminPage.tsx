import React from "react";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import SpinningProdConstant from "../../components/SpinningProdConstant/SpinningProdConstant";
import CountWise40Conversion from "../../components/CountWise40Conversion/CountWise40Conversion";

const AdminPage = () => {
  const tabs = [
    {
      label: "Machine Wise Spindles",
      value: "1",
    },
    {
      label: "Spinning Production Constants",
      value: "2",
    },
    {
      label: "Count Wise Fourties Conversion",
      value: "3",
    },
  ];

  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{ width: "100%", typography: "body1", paddingTop: "0.5rem" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              variant="scrollable"
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              {tabs.map((tab) => (
                <Tab label={tab.label} value={tab.value} />
              ))}
            </TabList>
          </Box>

          {tabs.map((tab) => (
            <TabPanel value={tab.value} sx={{ padding: 3 }}>
              {tab.label}
              <br />

              {tab.value === "2" && <SpinningProdConstant />}
              {tab.value === "3" && <CountWise40Conversion />}
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </>
  );
};

export default AdminPage;
