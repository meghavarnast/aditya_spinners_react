import React from "react";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import { red } from "@mui/material/colors";
import SimpleDatePicker from "../../ui-common/DatePicker/SimpleDatePicker";
import SelectDropDown, {
  SelectDataType,
} from "../../ui-common/SelectDropdown/SelectDropDown";

const productionDetailPage = () => {
  const dummyDropDownData: SelectDataType[] = [
    {
      label: "40s / 5214",
      value: "40s / 5214",
    },
    {
      label: "25s / 6800",
      value: "25s / 6800",
    },
  ];

  const reasonForStopping = [
    "Maintenance Cleaning",
    "Maintenance Work",
    "Mechanical Repair",
    "Electrical Repair",
    "Back Stuff Shortage",
    "Power Failure",
    "Hand Shortage",
    "Lot Change and Run Out",
    "Empty Bobbin Shortage",
    "Travellers Change",
    "Modernisation",
    "Miscellaneous",
  ];
  // Get today's date
  // eslint-disable-next-line no-undef
  const today = dayjs();

  // Format date as "MMMM D, YYYY" (e.g., "July 14, 2023")
  const formattedTodayDate = today.format("DD MMMM, YYYY");

  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="md">
        <div style={{ backgroundColor: "red" }}>test</div>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Paper elevation={4} sx={{ marginTop: "8rem" }}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500], padding: "0.2rem" }}
                    aria-label="recipe"
                  >
                    PDI
                  </Avatar>
                }
                title={
                  <Typography variant="h6">Production Detail Input</Typography>
                }
                subheader={formattedTodayDate}
              />
              <CardContent>
                <FormControl>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={4} md={4}>
                      <SelectDropDown
                        label="Department"
                        data={dummyDropDownData}
                        autoWidth={false}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <SelectDropDown
                        label="Shift"
                        data={dummyDropDownData}
                        autoWidth={false}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <SimpleDatePicker label="Production Date" />
                    </Grid>
                  </Grid>

                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={4} md={4}>
                      <SelectDropDown
                        label="Count / Blend"
                        data={dummyDropDownData}
                        autoWidth={false}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <TextField
                        label="Hanks Produced"
                        id="hanks-produced"
                        sx={{ m: 1 }}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <TextField
                        label="Waste (in Kg)"
                        id="waste-in-kg"
                        sx={{ m: 1 }}
                        variant="outlined"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">Kg</InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Divider
                    orientation="horizontal"
                    variant="middle"
                    flexItem
                    sx={{ marginTop: "1rem", marginBottom: "1rem" }}
                  />
                  <Typography variant="h6" sx={{ m: "0 0.5rem 1rem 0.5rem" }}>
                    Reasons for Stopping{" "}
                    <span style={{ fontSize: "medium" }}>(in minutes)</span>
                  </Typography>

                  <Grid container spacing={1}>
                    {reasonForStopping.map((data) => {
                      return (
                        <Grid item xs={12} sm={4} md={4}>
                          <TextField
                            label={data}
                            id={data}
                            sx={{ m: 1 }}
                            variant="outlined"
                            // InputProps={{
                            //   endAdornment: (
                            //     <InputAdornment position="start">
                            //       Mins
                            //     </InputAdornment>
                            //   ),
                            // }}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>

                  <div
                    id="production-submit"
                    style={{ marginTop: "1rem", textAlign: "center" }}
                  >
                    <Button variant="contained">Submit</Button>
                  </div>
                </FormControl>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Container>
    </>
  );
};

export default productionDetailPage;
