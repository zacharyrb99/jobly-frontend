import { useState } from "react";
import { useHistory } from "react-router";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import JoblyAPI from "../JoblyAPI";
import './SignUpForm.css';

const SignUpForm = ({setToken}) => {
    const INITIAL_STATE = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    }

    const history = useHistory();
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [formErrors, setFormErrors] = useState([]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData((formData) => ({
          ...formData,
          [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let token = await JoblyAPI.signUp(formData.username, formData.password, formData.firstName, formData.lastName, formData.email);
            setToken(token);
            history.push('/');
        } catch(e) {
            setFormErrors(e);
        }
    }

    return (
        <div>
            <Form className='SignUpForm' onSubmit={handleSubmit}>
                <FormGroup row>
                    <Label for='username'>Username:</Label>
                    <Input type='text' name='username' id='username' placeholder='Username' value={formData.username} onChange={handleChange}/>
                </FormGroup>

                <FormGroup row>
                    <Label for='password'>Password:</Label>
                    <Input type='password' name='password' id='password' placeholder='Password' value={formData.password} onChange={handleChange} />
                </FormGroup>

                <FormGroup row>
                    <Label for='firstName'>First Name:</Label>
                    <Input type='text' name='firstName' id='firstName' placeholder='First Name' value={formData.firstName} onChange={handleChange} />
                </FormGroup>

                <FormGroup row>
                    <Label for='lastName'>Last Name:</Label>
                    <Input type='text' name='lastName' id='lastName' placeholder='Last Name' value={formData.lastName} onChange={handleChange} />
                </FormGroup>

                <FormGroup row>
                    <Label for='email'>Email:</Label>
                    <Input type='email' name='email' id='email' placeholder='Email' value={formData.email} onChange={handleChange} />
                </FormGroup>

                {formErrors.length ? 
                    <div className='alert alert-danger' role='alert'>
                        {formErrors.map(e => (
                            <p className='mb-0 small'>
                                {e}
                            </p>
                        ))}
                    </div>
                    : null}

                <Button className='SignUpForm-button' outline color='primary'>Sign Up</Button>
            </Form>
        </div>
    )
}

export default SignUpForm;
