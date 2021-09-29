import { useState } from "react";
import { useHistory } from "react-router";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import JoblyAPI from "../JoblyAPI";
import './LoginForm.css'

const LoginForm = ({setToken}) => {
    const INITIAL_STATE = {
        username: '',
        password: ''
    }

    const history = useHistory();
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [formErrors, setFormErrors] = useState([]);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let token = await JoblyAPI.login(formData.username, formData.password);
            setToken(token);
            history.push('/');
        } catch(e) {
            setFormErrors(e);
        }
    }

    return (
        <Form className='LoginForm' onSubmit={handleSubmit}>
            <FormGroup row>
                <Label for='username'>Username:</Label>
                <Input type='text' name='username' id='username' placeholder='Username' value={formData.username} onChange={handleChange}/>
            </FormGroup>

            <FormGroup row>
                <Label for='password'>Password:</Label>
                <Input type='password' name='password' id='password' placeholder='Password' value={formData.password} onChange={handleChange} />
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

            <Button className='LoginForm-button' outline color='primary'>Login</Button>
        </Form>
    )
}

export default LoginForm;