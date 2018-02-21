import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { signup } from '../../actions/users'
import SignupForm from '../forms/SignupForm'

class SignupPage extends React.Component {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        }).isRequired,
        signup: PropTypes.func.isRequired
    }
    submit = (data) => this.props.signup(data).then(() => this.props.history.push('/dashboard'))
    render() {
        return (
            <div>
				<SignupForm submit={this.submit}/>
            </div>
        );
    }
}



export default connect(null, { signup })(SignupPage)