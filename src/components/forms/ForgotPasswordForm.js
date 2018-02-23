import React from 'react'
import { Form, Button, Message } from 'semantic-ui-react'
import Validator from 'validator'
import PropTypes from 'prop-types'
import InlineError from '../messages/InlineError'
const Field = Form.Field

class ForgotPasswordForm extends React.Component {
    static propTypes = {
        submit: PropTypes.func.isRequired
    }
    state = {
        data: {
            email: 'yanbin5506559@163.com',
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
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email"
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
					<label htmlFor="email">Email</label>
					<input type="email" 
						id="email" 
						name="email"  
						placeholder="example@example.com"
						onChange={this.onChange}
						value={data.email}/>
						{errors.email && <InlineError text={errors.email} />}
            	</Field>
				<Button primary>Forgot password</Button>
            </Form>
        );
    }
}

export default ForgotPasswordForm