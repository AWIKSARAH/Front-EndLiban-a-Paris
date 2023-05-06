import React, { useState } from "react";
// import Select from '@material-ui//Select';
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
function MenuList(props) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    props.onItemSelected(item);
  };

  const listItems = props.items.map((item, index) => {
    return (
      <MenuItem
        className="dropdown__list-item"
        key={index}
        style={{ "--delay": `0.${index + 2}s` }}
        onClick={() => handleItemClick(item)}
      >
        {item}
      </MenuItem>
    );
  });

  console.log(props.title);
  return (
    <FormControl>
      <InputLabel htmlFor={props.title} shrink={false} sx={{
          lineHeight: '0.9em',

      }}>{props.title}</InputLabel>
      <Select
        id={props.title}
        sx={{
          backgroundColor: '#437c2461',
          color: "white",
          border: "none",
          borderRadius: "5px",
          height: "40px",
          minWidth: "150px",
          fontWeight: "700",
          cursor: "pointer",
          "&:active": {
            bordercolor: "red",
            border: "none",
            boxShadow: "none",
          },
        }}
      >
        {listItems}
      </Select>
    </FormControl>
  );
}

export default MenuList;
