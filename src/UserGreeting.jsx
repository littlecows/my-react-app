import PropTypes from 'prop-types'

function UserGreeting(props) {

    const style_welcome = {
        FontSize: "2.5em",
        backgroundColor: "hsl(120, 100%, 42%)",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        margin: "0",
    }

    const login_propmt = {
        FontSize: "2.5em",
        backgroundColor: "hsl(0, 100%, 42%)",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        margin: "0",
    }

    if(props.isLoggedIn) {
        return <h2 className="welcome-message" style={style_welcome}>Welcome {props.username}</h2>
    }
    return <h2 className="login-propmt" style={login_propmt}>Please Login to continue</h2>

}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
UserGreeting.proptypes = {
    isLoggedIn: false,
    username: 'Guest'
}

export default UserGreeting