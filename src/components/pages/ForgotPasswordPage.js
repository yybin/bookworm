import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'
import { resetPasswordRequest } from '../../actions/auth'

import ForgotPasswordForm from '../forms/ForgotPasswordForm'

class ForgotPasswordPage extends React.Component {
    static propTypes = {
        resetPasswordRequest: PropTypes.func.isRequired
    }
    state = {
        success: false
    }

    submit = (data) => this.props.resetPasswordRequest(data).then(() => this.setState({ success: true }))

    render() {
        return (
            <div>
				{this.state.success ? <Message>Email has benn sent</Message>: 
					<ForgotPasswordForm submit={this.submit}/>}
            </div>
        );
    }
}

export default connect(null, { resetPasswordRequest })(ForgotPasswordPage)