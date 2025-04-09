import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films, { FilmType } from './top100Films';
import { Box, Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

const options = ['Option 1', 'Option 2'];

export function ControllableStates() {
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
        renderOption={(props, option, { selected }) => {
            console.log(props,option, selected)
            return (
                <Box component="li" {...props}>
                    <Checkbox
                        icon={<CheckBoxOutlineBlankIcon />}
                        checkedIcon={<CheckBoxIcon />}
                        checked={selected}
                    />
                    {option}
                </Box>
            )
        }}
      />
    </div>
  );
}

export default function ComboBox() {
    const [value, setValue] = React.useState<FilmType | null>(null);
  const [inputValue, setInputValue] = React.useState<string | undefined>(undefined);
    return (
        <Autocomplete
            value={value}
            onChange={(event: any, newValue: FilmType | null) => {
                setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            disablePortal
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => {
                console.log(params)
                // return <TextField {...params} label="Movie" />
                return (
                    <div ref={params.InputProps.ref}>
                        <label {...params.InputLabelProps}>My Label </label>
                        <input {...params.inputProps} autoFocus/>
                    </div>
                )
            }}
            // renderOption={(props, option, { selected }) => {
            //     console.log(props,option, selected)
            //     return (
            //         <Box component="li" {...props}>
            //             <Checkbox
            //                 icon={<CheckBoxOutlineBlankIcon />}
            //                 checkedIcon={<CheckBoxIcon />}
            //                 checked={selected}
            //             />
            //             {option.label}
            //         </Box>
            //     )
            // }}
        />
    );
}