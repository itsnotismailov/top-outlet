import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const Category = ({ setCategory, category }) => {
  return (
    <div>
      <FormControl sx={{ width: "300px" }}>
        <InputLabel id="demo-simple-select-label">Категория</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          required
          label="Age"
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="Футболки">Футболки</MenuItem>
          <MenuItem value="Гантель">Гантель</MenuItem>
          <MenuItem value="Скакалка">Скакалка</MenuItem>
          <MenuItem value="Тренажер">Тренажер</MenuItem>
          <MenuItem value="Спортивный инвентарь">Спортивный инвентарь</MenuItem>
          <MenuItem value="Кроссовки">Кроссовки</MenuItem>
          <MenuItem value="Шапки">Шапки</MenuItem>
          <MenuItem value="Сланцы">Сланцы</MenuItem>
          <MenuItem value="Ботинки">Ботинки</MenuItem>
          <MenuItem value="Кеды">Кеды</MenuItem>
          <MenuItem value="Рюкзаки">Рюкзаки</MenuItem>
          <MenuItem value="Панамы">Панамы</MenuItem>
          <MenuItem value="Носки">Носки</MenuItem>
          <MenuItem value="Перчатки">Перчатки</MenuItem>
          <MenuItem value="Кепки">Кепки</MenuItem>
          <MenuItem value="Толстовки">Толстовки</MenuItem>
          <MenuItem value="Куртки">Куртки</MenuItem>
          <MenuItem value="Брюки">Брюки</MenuItem>
          <MenuItem value="Жилетки">Жилетки</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Category;
