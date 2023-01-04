import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const Type = ({ setType, type }) => {
  return (
    <div>
      <FormControl sx={{ width: "300px" }}>
        <InputLabel id="demo-simple-select-label">Тип</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          required
          label="Age"
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="Для всех">Для всех</MenuItem>
          <MenuItem value="Для женщин">Для женщин</MenuItem>
          <MenuItem value="Для мужчин">Для мужчин</MenuItem>
          <MenuItem value="Для детей">Для детей</MenuItem>
          <MenuItem value="Для спорта">Для спорта</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Type;
