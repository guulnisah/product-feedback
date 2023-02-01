import { useState } from 'react'
import useLogin from '../hooks/useLogin'
import { Link } from 'react-router-dom'
import { RegistrationForm, Button, RegistrationContainer, StyledInput, StyledLabel } from '../components/Styles'

export default function Login() {
    const [email, setEmail] = useState('demo@guulnisah.com')
    const [password, setPassword] = useState('demodemo')
    const [error, login] = useLogin()

    function handleLogin(e) {
        e.preventDefault()
        login(email, password)
    }

    return (
        <RegistrationContainer>
            <RegistrationForm>
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
                    <div class="footer" >
                        <Button width="144px" hover="#C75AF6" color="#AD1FEA">Log In</Button>
                        <span>Don't have an account? <Link to="/product-feedback/signup">Signup</Link></span>
                    </div>
                </form>
                {error && error}
            </RegistrationForm>
        </RegistrationContainer>
    )

}