import {useFormContext } from 'react-hook-form'
import {Stack, TextField} from '@mui/material'
import {Schema } from '../types/schema'
import { RHFAutocomplete } from '../../components/RHFAutocomplete'
import { useLanguages, useStates } from '../services/queries'
import { RHFToggleButtonGroup } from '../../components/RHFToggleButtonGroup'

export function Users() {
    const statesQuery = useStates()
    const languagesQuery = useLanguages()
    const { register, formState: {errors} } = useFormContext<Schema>()
    return(
        <Stack sx={{gap: 2}}>
            <TextField {...register('name')} label="Name" 
                error={!!errors.name}
                helperText={errors.name?.message}/>
            <TextField {...register('email')} label="Email"
                error={!!errors.email}
                helperText={errors.email?.message}/>
            {/* <Autocomplete
                options={[{id: '1', label: 'Texas'}]} 
                renderInput={(params) => <TextField {...params} label="states"/>}/> */}
            <RHFAutocomplete<Schema> name="states" label="States" options={
                statesQuery.data
            }/>
            <RHFToggleButtonGroup<Schema> name="languagesSpoken" options={languagesQuery.data}/>
        </Stack>
    ) 
}