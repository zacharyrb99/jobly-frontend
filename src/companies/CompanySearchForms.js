import { useState } from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './CompanySearchForm.css'

const CompanySearchForm = ({search}) => {
    const INITIAL_STATE = {
        name: '',
        minEmployees: '',
        maxEmployees: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = e => {
        const {name, value} = e.target;
        console.log(value);
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        search(formData.name.trim(), formData.minEmployees, formData.maxEmployees);
        setFormData(INITIAL_STATE);
    }

    return (
        <Form className='CompanySearchForm' onSubmit={handleSubmit}>
            <FormGroup row>
                <Label for='name'>Name:</Label>
                <Input type='text' name='name' id='name' placeholder='Company Name' value={formData.name} onChange={handleChange}/>
            </FormGroup>

            <FormGroup row>
                <Label for='minEmployees'>Minimum Employees:</Label>
                <Input type='number' name='minEmployees' id='minEmployees' placeholder='Minimum Employees' value={formData.minEmployees} onChange={handleChange} />
            </FormGroup>

            <FormGroup row>
                <Label for='maxEmployees'>Maximum Employees:</Label>
                <Input type='number' name='maxEmployees' id='maxEmployees' placeholder='Maximum Employees' value={formData.maxEmployees} onChange={handleChange} />
            </FormGroup>

            <Button className='CompanySearchForm-button' outline color='primary'>Submit</Button>
        </Form>
    )
}

export default CompanySearchForm;