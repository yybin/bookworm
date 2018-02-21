import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions/auth'

class HomePage extends React.Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        logout: PropTypes.func.isRequired
    }
    render() {
        return (
            <div>
				<h1>Home Page</h1>
				{ this.props.isAuthenticated ? 
					<button onClick={() => this.props.logout()}>Logout</button> 
					:(<div><Link to="/login">Login</Link> or <Link to="/signup">Sign up</Link></div>)}
			</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token,
    }
}

export default connect(mapStateToProps, { logout: actions.logout })(HomePage)