import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import './JobSearchForm.css'

const JobSearchForm = ({search}) => {
    const INITIAL_STATE = {
        title: '',
        minSalary: ''
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
        search(formData.title.trim(), formData.minSalary);
        setFormData(INITIAL_STATE);
    }

    return (
        <Form className='JobSearchForm' onSubmit={handleSubmit}>
            <FormGroup row>
                <Label for='title'>Name:</Label>
                <Input type='text' name='title' id='title' placeholder='Job Title' value={formData.title} onChange={handleChange}/>
            </FormGroup>

            <FormGroup row>
                <Label for='minSalary'>Minimum Salary:</Label>
                <Input type='number' name='minSalary' id='minSalary' placeholder='Minimum Salary' value={formData.minSalary} onChange={handleChange} />
            </FormGroup>

            <Button className='JobSearchForm-button' outline color='primary'>Submit</Button>
        </Form>
    )
}

export default JobSearchForm;