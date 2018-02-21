import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import Validator from 'validator'
import PropTypes from 'prop-types'
import InlineError from '../messages/InlineError'
const Field = Form.Field


class LoginForm extends React.Component {
    static propTypes = {
        submit: PropTypes.func.isRequired
    }
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    }

    onChange = e => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } })

    onSubmit = () => {
        const errors = this.validate(this.state.data)
        this.setState({ errors })
        if (Object.keys(errors).length === 0) {
            this.props.submit(this.state.data)
        }
    }

    validate = (data) => {
        const errors = {}
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email"
        if (!data.password) errors.password = "Can't be blank"
        return errors
    }

    render() {
        const { data, errors } = this.state
        return (
            <Form onSubmit={this.onSubmit}>
            	<Field>
					<label htmlFor="email">Email</label>
					<input type="email" 
						id="email" 
						name="email"  
						placeholder="example@example.com"
						onChange={this.onChange}
						value={data.email}/>
						{
							errors.email && <InlineError text={errors.email} />
						}
            	</Field>
            	<Field>
					<label htmlFor="password">Password</label>
					<input type="password" 
						id="password" 
						name="password"  
						placeholder="Make it secure"
						onChange={this.onChange}
						value={data.password}/>
						{
							errors.password && <InlineError text={errors.password} />
						}
            	</Field>
				<Button primary>Login</Button>
            </Form>
        );
    }
}

export default LoginForm