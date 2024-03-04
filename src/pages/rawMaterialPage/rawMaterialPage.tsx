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
import SelectDropDown, {
  SelectDataType,
} from "../../ui-common/SelectDropdown/SelectDropDown";
import { red } from "@mui/material/colors";
import dayjs from "dayjs";

const RawMaterialPage = () => {
  const dropDownData: SelectDataType[] = [
    {
      label: "Polyster",
      value: "polyster",
    },
    {
      label: "Viscosc",
      value: "viscosc",
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
          <Paper elevation={4} sx={{ maxWidth: 400, marginTop: "8rem" }}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500], padding: "0.2rem" }}
                    aria-label="recipe"
                  >
                    RMI
                  </Avatar>
                }
                title={<Typography> Raw Material Inputs</Typography>}
                subheader={formattedTodayDate}
              />
              <CardContent>
                <FormControl>
                  <div id="raw-material-datepicker" style={{ margin: "8px" }}>
                    <SimpleDatePicker label="Raw Material Date" />
                  </div>
                  <SelectDropDown
                    label="Material Type"
                    data={dropDownData}
                    autoWidth={false}
                    minWidth={250}
                  />
                  <TextField
                    label="Qunatity (in Kg)"
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: "25ch" }}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">Kg</InputAdornment>
                      ),
                    }}
                  />
                  <div
                    id="raw-material-submit"
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

export default RawMaterialPage;
