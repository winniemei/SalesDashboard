import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';

export default function MyCheckbox() {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }

    return(
        <>
        <Checkbox checked={checked} onChange={handleChange} inputProps = {{'aria-label': 'Checkbox'}}/>
        </>
    )
}
