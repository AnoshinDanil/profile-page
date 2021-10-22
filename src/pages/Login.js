import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux';
import { setUsername, setPassword, setError } from '../services/State';
import { connect } from 'react-redux';
import { useHistory, withRouter } from "react-router-dom";

const Login = ({ setUsername, setPassword, setError, username, password, error }) => {
    const history = useHistory()

    function handleSubmit(evt) {
        evt.preventDefault();

        if (username !== "developer21" && password !== "123456" ) {
            setError("Имя пользователя или пароль введены не верно");
        } else {
            setError("");
            localStorage.setItem("isAdmin", true);
            history.push('/profile');
        }
    }
        return (
            <div>
            <form  onSubmit = {handleSubmit}>
                {
                    error &&
                    <h3>
                        {error}
                    </h3>
                }

                <div>
                    <TextField type="text"
                                placeholder="Login"
                               value={username}
                               onChange={(event) => {setUsername(event.target.value)}}>
                               
                    </TextField>
                </div>
                <div>
                    <TextField type="password"
                                placeholder="password"
                               value={password}
                               onChange={(event) => {setPassword(event.target.value)}}>
                    </TextField>
                </div>

                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"

                    >
                        LogIn
                    </Button>
                </div>
            </form>
            </div>
        )
}

const mapStateToProps = ({ username, password, error}) => ({ username, password, error })

const mapDispatchToProps = (dispatch) => ({
        setUsername: bindActionCreators(setUsername, dispatch),
        setPassword: bindActionCreators(setPassword, dispatch),
        setError: bindActionCreators(setError, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));