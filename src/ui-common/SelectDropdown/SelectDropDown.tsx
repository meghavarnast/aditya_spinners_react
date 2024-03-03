import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export type SelectDataType = {
  value: string | number;
  label: string;
};

type SelectDropDownProps = {
  label: string;
  minWidth?: number;
  data?: SelectDataType[];
  autoWidth?: boolean;
};

const SelectDropDown = ({
  label = "Dropdown",
  minWidth = 150,
  data = [],
  autoWidth = true,
}: SelectDropDownProps) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: minWidth }}>
        <InputLabel id="select-dropdown-label">{label}</InputLabel>
        <Select
          labelId="select-dropdown-label"
          id="select-dropdown"
          value={selectedValue}
          onChange={handleChange}
          autoWidth={autoWidth}
          label={label}
          fullWidth={true}
        >
          {data.length > 0 ? (
            data.map((item) => {
              return <MenuItem value={item.value}>{item.label}</MenuItem>;
            })
          ) : (
            <MenuItem value="">
              <em>No Data</em>
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectDropDown;
