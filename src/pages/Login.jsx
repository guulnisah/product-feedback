import { useState } from 'react'
import useLogin from '../hooks/useLogin'
import { Link } from 'react-router-dom'
import { Button, RegistrationContainer, StyledInput, StyledLabel } from '../components/Styles'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, login] = useLogin()

    function handleLogin(e) {
        e.preventDefault()
        login(email, password)
    }

    return (
        <RegistrationContainer>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <StyledLabel htmlFor="email">Email</StyledLabel>
                    <StyledInput
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <StyledLabel htmlFor="password">Password</StyledLabel>
                    <StyledInput
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button hover="#C75AF6" color="#AD1FEA">Login</Button>
                <span>Don't have an accout? <Link to="/signup">Signup</Link></span>

            </form>
            {error && error}
        </RegistrationContainer>
    )

}