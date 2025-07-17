import { Autocomplete, TextField } from "@mui/material"
import ButtonsForm from "src/components/form/ButtonsForm"
import Form from "src/components/form/Form"
import Select from "src/components/form/Select"

const DetentionIDSelect = ({ machines, onChange, onSubmit, value }) => {
    return (
        <div className="p-4 bg-white mb-4 shadow rounded">
            <Form onSubmit={onSubmit}>
                {/* <Select onChange={onChange} name='matri' options={machines} label='Máquinas' /> */}
                <Autocomplete
                    disablePortal
                    options={machines}
                    getOptionLabel={(option) => option.name}
                    isOptionEqualToValue={(option, val) => {
                        console.log(option, val)
                        return option.idmatri === val.idmatri
                    }}
                    value={value}
                    onChange={onChange}
                    // sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Equipos" />}
                />
                <ButtonsForm withCancel={false} submitText="Consultar" />
            </Form>
        </div>
    )
}

export default DetentionIDSelect