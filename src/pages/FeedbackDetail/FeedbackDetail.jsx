import { Details, ReplyForm, StyledLink, Avatar, DetailsContainer, Comments, AddComment, Comment, Replies, Button, UpvoteButton, PillButton, Suggestion, Nav } from '../../components/Styles'
import { useParams } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import useDB from '../../hooks/useDB'
import { collection, addDoc, doc, updateDoc, getDocs, arrayUnion, increment } from 'firebase/firestore'
import { db } from '../../firebase/config'
import displayFeedback from '../../utils/displayFeedback'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'

export default function FeedbackDetail() {
    const { id } = useParams()
    const { feedback } = useDB()
    const oneFeedback = feedback.filter(elem => elem.id === id)
    const { user } = useAuthContext()
    const [comments, setComments] = useState()
    const [charLeft, setCharLeft] = useState(250)

    async function submitComment(e) {
        e.preventDefault()
        const commentText = e.target.querySelector('#comment').value
        const collectionRef = collection(db, 'feedback', id, 'comments')
        const documentRef = doc(db, 'feedback', id)
        await addDoc(collectionRef, {
            content: commentText,
            user: {
                image: user.photoURL,
                name: user.displayName,
                username: user.email
            },
            replies: []
        })

        await updateDoc(documentRef, {
            comments: increment(1)
        });
        fetchComments()
        e.target.reset()
    }


    useEffect(() => {
        fetchComments()
    }, [])

    async function fetchComments() {
        const ref = collection(db, 'feedback', id, 'comments')
        const snapshot = await getDocs(ref);
        setComments(snapshot.docs.map(
            (doc) => ({ key: doc.id, ...doc.data() })
        ));
    }

    function openReply(e) {
        const form = e.target.parentElement.parentElement.querySelector("#hiddenCommentReply")
        form.style.display === "none" ? form.style.display = "flex" : form.style.display = "none"
    }

    function displayComments(arr) {
        const result = arr.map(elem => {
            return (
                <div key={elem.key}>
                    <Comment>
                        <Avatar width="40px" src={elem.user.image} />
                        <div className="rightSide">
                            <div className="userInfo">
                                <div>
                                    <p>{elem.user.name}</p>
                                    <span>@{elem.user.username.substring(0, elem.user.username.indexOf("@"))}</span>
                                </div>
                                <button onClick={openReply}>Reply</button>
                            </div>
                            <p className="comment">{elem.content}</p>
                            <ReplyForm style={{ display: "none" }} onSubmit={(e) => handleReply(e, elem.key)} id="hiddenCommentReply" data-user={elem.user.username}>
                                <textarea id="reply"></textarea>
                                <Button width="117px" color="#AD1FEA">Post Reply</Button>
                            </ReplyForm>
                        </div>
                    </Comment>

                    {elem.replies && <Replies>
                        {elem.replies.map(reply => {
                            return (
                                <Comment key={nanoid()}>
                                    <Avatar width="40px" src={reply.user.image} />
                                    <div className="rightSide">
                                        <div className="userInfo">
                                            <div>
                                                <p>{reply.user.name}</p>
                                                <span>@{reply.user.username.substring(0, reply.user.username.indexOf("@"))}</span>
                                            </div>
                                            <button onClick={openReply}>Reply</button>
                                        </div>
                                        <p className="comment">
                                            <span style={{ color: "#AD1FEA" }}>@{reply.replyingTo.substring(0, reply.replyingTo.indexOf("@"))}</span> {reply.content}</p>
                                        <ReplyForm style={{ display: "none" }} onSubmit={(e) => handleReply(e, elem.key)} id="hiddenCommentReply" data-user={reply.user.username}>
                                            <textarea id="reply"></textarea>
                                            <Button width="117px" color="#AD1FEA">Post Reply</Button>
                                        </ReplyForm>
                                    </div>
                                </Comment>
                            )
                        })}
                    </Replies>}
                </div>
            )
        })
        return result
    }


    async function handleReply(e, commentId) {
        e.preventDefault()

        const replyText = e.target.querySelector('#reply').value
        const ref = doc(db, 'feedback', id, 'comments', commentId)
        await updateDoc(ref, {
            replies: arrayUnion({
                replyingTo: e.target.dataset.user,
                content: replyText,
                user: {
                    image: user.photoURL,
                    name: user.displayName,
                    username: user.email
                }
            })
        });
        fetchComments()
        e.target.style.display = "none"
        e.target.reset()
    }


    function count(e) {
        let length = e.target.value.length;
        if (length >= 250) {
            event.key !== "Backspace" && e.preventDefault();
        } else {
            setCharLeft(250 - length - 1)
        }
    }

    return (
        <DetailsContainer>
            <div className="flex">
                <StyledLink to="/" color="#647196">
                    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
                    Go Back
                </StyledLink>
                <Button hover="#7C91F9" width="142px" color="#4661E6" >
                    <Link to={`/feedback/${id}/edit`}>
                        Edit Feedback
                    </Link>
                </Button>
            </div>
            <Details>
                {oneFeedback && displayFeedback(oneFeedback)}
                <Comments>
                    <h3>{oneFeedback && oneFeedback[0]?.comments} Comment(s)</h3>
                    {comments && displayComments(comments)}
                </Comments>
                <AddComment onSubmit={submitComment}>
                    <h3>Add Comment</h3>
                    <textarea placeholder="Type your comment here" id="comment" onKeyDown={count} />
                    <div>
                        <span>{charLeft} Characters left</span>
                        <Button hover="#C75AF6" width="9rem" color="#AD1FEA" >Post Comment</Button>
                    </div>
                </AddComment>
            </Details >
        </DetailsContainer>
    )
}