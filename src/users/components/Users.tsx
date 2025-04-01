import { useForm, useFormContext } from 'react-hook-form'
import {Autocomplete, Stack, TextField} from '@mui/material'
import { schema, Schema } from '../types/schema'
import { zodResolver} from '@hookform/resolvers/zod'
import { RHFAutocomplete } from '../../components/RHFAutocomplete'

export function Users() {
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
                [
                    {id: "1", label: "California"},
                    {id: "2", label: "Texas"}
                ]
            }/>
        </Stack>
    ) 
}