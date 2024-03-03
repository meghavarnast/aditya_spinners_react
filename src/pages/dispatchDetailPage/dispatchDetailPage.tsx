import dayjs from "dayjs";
import React from "react";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import SimpleDatePicker from "../../ui-common/DatePicker/SimpleDatePicker";
import { red } from "@mui/material/colors";
import SelectDropDown, {
  SelectDataType,
} from "../../ui-common/SelectDropdown/SelectDropDown";

const DispatchDetailPage = () => {
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

  // Get today's date
  const today = dayjs();

  // Format date as "MMMM D, YYYY" (e.g., "July 14, 2023")
  const formattedTodayDate = today.format("DD MMMM, YYYY");

  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="md">
        {/* <div style={{ backgroundColor: "red" }}>test</div> */}

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Paper elevation={4} sx={{ maxWidth: 600, marginTop: "8rem" }}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500], padding: "0.2rem" }}
                    aria-label="recipe"
                  >
                    DD
                  </Avatar>
                }
                title={<Typography>Dispatch Details</Typography>}
                subheader={formattedTodayDate}
              />
              <CardContent>
                <FormControl>
                  <div id="dispatch-datepicker" style={{ margin: "8px" }}>
                    <SimpleDatePicker label="Dispatch Date" />
                  </div>
                  <TextField
                    label="Lot Numner"
                    id="lot-number"
                    sx={{ m: 1, width: "25ch" }}
                    variant="outlined"
                  />
                  <TextField
                    label="Tint Color"
                    id="tint-color"
                    sx={{ m: 1, width: "25ch" }}
                    variant="outlined"
                  />
                  <SelectDropDown
                    label="Count / Blend"
                    data={dummyDropDownData}
                    autoWidth={false}
                    minWidth={250}
                  />

                  <TextField
                    label="No.of Bags"
                    id="number-of-bags"
                    sx={{ m: 1, width: "25ch" }}
                    variant="outlined"
                  />
                  <TextField
                    label="Bag Number"
                    id="bag-number-from"
                    sx={{ m: 1, width: "25ch" }}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">From</InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    label="Bag Number"
                    id="bag-number-to"
                    sx={{ m: 1, width: "25ch" }}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">To</InputAdornment>
                      ),
                    }}
                  />
                  <div
                    id="dispatch-submit"
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

export default DispatchDetailPage;
