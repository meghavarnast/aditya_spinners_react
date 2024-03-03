import React from "react";
import ResponsiveAppBar from "../../components/ResponsiveAppBar/ResponsiveAppBar";
import {
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Paper,
  Typography,
} from "@mui/material";
import SimpleDatePicker from "../../ui-common/DatePicker/SimpleDatePicker";
import SelectDropDown, {
  SelectDataType,
} from "../../ui-common/SelectDropdown/SelectDropDown";

const RawMaterialPage = () => {
  const dropDownData: SelectDataType[] = [
    {
      label: "None",
      value: "",
    },
    {
      label: "Twenty",
      value: "10",
    },
    {
      label: "Twenty one",
      value: "20",
    },
    {
      label: "wenty one and a half",
      value: "22",
    },
  ];

  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="md">
        <div style={{ backgroundColor: "red" }}>hi</div>

        <Paper elevation={3} style={{ padding: 10 }}>
          <Typography textAlign="center"> Raw Material Inputs</Typography>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
            <SimpleDatePicker label="Date" />
            <SelectDropDown label="Material Type" data={dropDownData} />
          </FormControl>
        </Paper>
      </Container>
    </>
  );
};

export default RawMaterialPage;
