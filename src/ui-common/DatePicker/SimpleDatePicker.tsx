import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

type SimpleDatePickerProps = {
  label?: string;
  defaultDate?: Date;
  width?: number;
};
const dateFormat = "DD/MM/YYYY";

const SimpleDatePicker = ({
  label = "Basic date picker",
  defaultDate = new Date(),
  width = 200,
}: SimpleDatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]} sx={{ width: width }}>
        <DatePicker
          label={label}
          format={dateFormat}
          defaultValue={dayjs(defaultDate)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default SimpleDatePicker;
