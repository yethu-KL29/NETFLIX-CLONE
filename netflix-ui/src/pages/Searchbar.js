import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import "./searchStyle.css";
function Searchbar() {
    const [search, setSearch] = useState("");
    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    return (
        <div className="search">
        <TextField
           sx={{
            width:"15vw",
          
           }}
          
            label="Search"
            variant="outlined"
            value={search}
            onChange={handleChange}
        />
        </div>
    );
    }
    export default Searchbar;