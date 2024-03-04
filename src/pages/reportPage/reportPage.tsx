import React from "react";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const ReportPage = () => {
  const tabs = [
    {
      label: "Spinning Machine Wise Report",
      value: "1",
    },
    {
      label: "Spinning Production & Down Time Details",
      value: "2",
    },
    {
      label: "Daily Report",
      value: "3",
    },
    {
      label: "Monthly Report",
      value: "4",
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
              Some table - Read only and PDF
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </>
  );
};

export default ReportPage;
