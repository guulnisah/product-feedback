import { useState } from 'react'
import useSignup from '../hooks/useSignup'
import { Link } from 'react-router-dom'
import { Button, RegistrationContainer, StyledInput, StyledLabel, RegistrationForm } from '../components/Styles'
import { db } from '../firebase/config'
import { setDoc, collection, addDoc, doc, updateDoc, getDocs, arrayUnion, increment } from 'firebase/firestore'



export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, signup] = useSignup()
    const [fullName, setFullName] = useState('')
    const [avatar, setAvatar] = useState(null)
    const [avatarError, setAvatarError] = useState(null)


    async function handleSubmit(e) {
        e.preventDefault()
        signup(email, password, fullName, avatar)
    }


    function handleFileChange(e) {
        setAvatar(null)
        let selected = e.target.files[0]

        if (!selected) {
            setAvatarError('Please select a file')
            return
        }
        if (!selected.type.includes('image')) {
            setAvatarError('Selected file must be an image')
            return
        }
        if (selected.size > 100000) {
            setAvatarError('Image file size must be less than 100kb')
            return
        }

        setAvatarError(null)
        setAvatar(selected)
    }

    return (
        <RegistrationContainer>
            <RegistrationForm>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <StyledLabel htmlFor="email">E-mail</StyledLabel>
                        <StyledInput
                            required
                            id="email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div>
                        <StyledLabel htmlFor="password">Password</StyledLabel>
                        <StyledInput
                            required
                            id="password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <div>
                        <StyledLabel htmlFor="fullName">Full Name</StyledLabel>
                        <StyledInput
                            required
                            id="fullName"
                            type="text"
                            onChange={(e) => setFullName(e.target.value)}
                            value={fullName}
                        />
                    </div>
                    <div>
                        <StyledLabel htmlFor="file">Profile Picture</StyledLabel>
                        <StyledInput
                            required
                            id="file"
                            type="file"
                            onChange={handleFileChange}
                        />
                    </div>

                    {avatarError && <div className="error">{avatarError}</div>}

                    <div className="footer">
                        <Button width="144px" hover="#C75AF6" color="#AD1FEA">Sign up</Button>
                        <span>Already have an account? <Link to="/product-feedback/login">Login</Link></span>
                    </div>

                    {error && <div className="error">{error}</div>}
                </form>
            </RegistrationForm>
        </RegistrationContainer>
    )
}