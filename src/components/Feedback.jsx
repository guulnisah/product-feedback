import { UpvoteButton, PillButton, Suggestion } from './Styles'
import { Link } from 'react-router-dom'
import { db } from '../firebase/config'
import { useAuthContext } from '../hooks/useAuthContext'
import { doc, updateDoc, arrayUnion, increment, arrayRemove } from "firebase/firestore";

import useCollection from '../hooks/useCollection'


export default function Feedback({ arr }) {

    const { user } = useAuthContext()
    const { documents: users } = useCollection('users')

    const currentUser = users.find(elem => elem.id === user.uid)

    async function handleUpvote(id) {
        const userRef = doc(db, 'users', user.uid)
        const documentRef = doc(db, 'feedback', id)

        const upvotedArray = currentUser.upvotedOn

        if (upvotedArray.includes(id)) {
            await updateDoc(userRef, {
                upvotedOn: arrayRemove(id)
            });
            await updateDoc(documentRef, {
                upvotes: increment(-1)
            });
        } else {
            await updateDoc(userRef, {
                upvotedOn: arrayUnion(id)
            });
            await updateDoc(documentRef, {
                upvotes: increment(1)
            });
        }
    }

    const result = arr.map((elem) => {
        return (
            <Suggestion key={elem.id}>
                <div className="upvotes">
                    <UpvoteButton
                        className={currentUser?.upvotedOn.includes(elem.id) ? 'active' : ''}
                        column
                        onClick={() => handleUpvote(elem.id)}>
                        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
                        {elem.upvotes}
                    </UpvoteButton>
                </div>
                <div className="description">
                    <h3><Link to={`/product-feedback/feedback/${elem.id}`}>{elem.title}</Link></h3>
                    <p>{elem.description}</p>
                    <PillButton as={'span'}>{elem.category}</PillButton>
                </div>
                <span className="comments">
                    <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fillRule="nonzero" /></svg>
                    {elem.comments ? elem.comments : 0}
                </span>
            </Suggestion >
        )
    })
    return result
}