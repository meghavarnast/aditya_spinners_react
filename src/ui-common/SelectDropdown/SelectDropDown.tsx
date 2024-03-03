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
};

const SelectDropDown = ({
  label = "Dropdown",
  minWidth = 150,
  data = [],
}: SelectDropDownProps) => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: minWidth }}>
        <InputLabel id="select-dropdown-label">{label}</InputLabel>
        <Select
          labelId="select-dropdown-label"
          id="select-dropdown"
          value={age}
          onChange={handleChange}
          autoWidth
          label={label}
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
