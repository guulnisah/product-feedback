import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { ref, getDownloadURL, uploadBytes } from "firebase/storage"
import { auth, storage } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export default function useSignup() {
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    async function signup(email, password, fullName, avatar) {
        setError(null)

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)

            if (!res) {
                throw new Error('Could not complete signup')
            }

            const avatarRef = ref(storage, `gs://product-feedback-af4ea.appspot.com/avatars/${res.user.uid}/${avatar.name}`)
            await uploadBytes(avatarRef, avatar)
            const avatarURL = await getDownloadURL(ref(storage, avatarRef))
            await updateProfile(auth.currentUser, {
                displayName: fullName,
                photoURL: avatarURL
            })

            await dispatch({ type: 'LOGIN', payload: res.user })
        }
        catch (err) {
            setError(err.message)
        }
    }

    return [error, signup]
}