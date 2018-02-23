import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'
import ResetPasswordForm from '../forms/ResetPasswordForm'
import { validateToken } from '../../actions/auth'

class ResetPasswordPage extends React.Component {
    static propTypes = {
        validateToken: PropTypes.func.isRequired
    }
    state = {
        success: false,
        loading: true
    }
    componentDidMount() {
        this.props.validateToken(this.props.match.params.token)
            .then(() => this.setState({ loading: false, success: true }))
            .catch(() => this.setState({ loading: false, success: false }))
    }
    // submit = (data) => this.props.
    render() {
        const { loading, success } = this.state
        const token = this.props.match.params.token

        return (
            <div>
            	{loading && <Message> loading </Message>}
            	{!loading && success &&  <ResetPasswordForm  submit={this.submit} token={token}/>}
            	{!loading && !success && <Message> Invalid Token </Message>}
            </div>
        );
    }
}

export default connect(null, { validateToken })(ResetPasswordPage)