import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'

import { useAuthContext } from './useAuthContext'

export default function useLogout() {
    const { dispatch } = useAuthContext()

    function logout() {
        signOut(auth)
            .then(() => {
                dispatch({ type: 'LOGOUT' })
            })
            .catch((err) => console.log(err.message))
    }

    return { logout }

}