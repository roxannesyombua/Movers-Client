import React from "react"
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';



export default function SearchBox() {
    const [value, setValue] = React.useState("");

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
            <OutlinedInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search..."
            />
            <Button variant="contained" color="primary" onClick={() => console.log(value)}>
                Search
            </Button>
        </div>
    )
}