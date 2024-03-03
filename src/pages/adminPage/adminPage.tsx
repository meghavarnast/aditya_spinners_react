import React from "react";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

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
      label: "Counr Wise Fourties Conversion",
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
              Some table - Read / Write
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </>
  );
};

export default AdminPage;
