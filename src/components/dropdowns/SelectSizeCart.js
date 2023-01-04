import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectSizeCart = ({ sizes, item, cartItems, setCartItems }) => {
  console.log(sizes);

  const handleSizeChange = (id, size) => {
    const newTodoList = cartItems.map((todo) => {
      if (todo.id === id) return { ...todo, selectedSize: size };
      return todo;
    });
    setCartItems(newTodoList);
    console.log(newTodoList);
  };

  return (
    <div>
      <FormControl sx={{ width: "150px", marginBottom: "15px" }}>
        <InputLabel id="demo-simple-select-label">Размер</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={item?.selectedSize}
          required
          label="Age"
        >
          {sizes.map((size) => (
            <MenuItem
              onClick={() => handleSizeChange(item.id, size)}
              value={size}
            >
              {size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectSizeCart;
