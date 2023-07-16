import React from "react";
import "./PartyComponent.css";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const PartyComponent = ({ searchValue, setSearchValue }) => {
  return (
    <div className="PartyComponent">
      <AccountCircleIcon className="logo" />
      <TextField
        id="standard-basic"
        label="Party Name"
        variant="standard"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="text-area"
      />
    </div>
  );
};

export default PartyComponent;
