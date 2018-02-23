import React from 'react'
import { Form, Button, Message } from 'semantic-ui-react'
import Validator from 'validator'
import PropTypes from 'prop-types'
import InlineError from '../messages/InlineError'
const Field = Form.Field

class ResetPasswordForm extends React.Component {
    static propTypes = {
        submit: PropTypes.func.isRequired
    }
    state = {
        data: {
            token: this.props.token,
            password: '',
            passwordConfirmation: ''
        },
        loading: false,
        errors: {}
    }

    onChange = e => this.setState({ data: { ...this.state.data, [e.target.name]: e.target.value } })

    onSubmit = () => {
        const errors = this.validate(this.state.data)
        this.setState({ errors })
        if (Object.keys(errors).length === 0) {
            this.setState({
                loading: true
            })
            this.props.submit(this.state.data)
                .catch(err => this.setState({ errors: err.response.data.errors, loading: false }))
        }
    }

    validate = (data) => {
        const errors = {}
        if (!data.password) errors.password = "Can't be blank"
        if (data.password !== data.passwordConfirmation) errors.password = "Password must match"
        return errors
    }

    render() {
        const { data, errors, loading } = this.state
        return (
            <Form onSubmit={this.onSubmit} loading={loading}>
                {errors.global && <Message negative>
                    <Message.Header>Something went wrong</Message.Header>
                    <p>{errors.global}</p>
                    </Message>}
            	<Field>
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                        id="password" 
                        name="password"  
                        placeholder="your new password"
                        onChange={this.onChange}
                        value={data.password}/>
                        {errors.password && <InlineError text={errors.password} />}
                </Field>
                <Field>
                    <label htmlFor="passwordConfirmation">Confirm Password</label>
                    <input type="password" 
                        id="passwordConfirmation" 
                        name="passwordConfirmation"  
                        placeholder="confirmation your new password"
                        onChange={this.onChange}
                        value={data.password}/>
                        {errors.password && <InlineError text={errors.password} />}
                </Field>
				<Button primary>Reset password</Button>
            </Form>
        );
    }
}

export default ResetPasswordForm