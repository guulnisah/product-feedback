import { db } from '../firebase/config'
import { doc, updateDoc, arrayUnion, increment, arrayRemove } from "firebase/firestore";

export default async function handleUpvote(id, currentUser) {
    const userRef = doc(db, 'users', currentUser.id)
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