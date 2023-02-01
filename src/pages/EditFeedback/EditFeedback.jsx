import { useEffect, useState } from 'react'
import edit from '../../assets/shared/icon-edit-feedback.svg'
import { StyledLabel, StyledInput, Button, FormContainer, StyledLink, UpdateContainer } from '../../components/Styles'
import Dropdown from '../../components/Dropdown'
import { useNavigate } from 'react-router-dom'
import { db } from '../../firebase/config'
import { updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import { features, statuses, formDropdownStyles } from '../../utils/dropdownItems'
import useDB from '../../hooks/useDB'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function EditFeedback() {
    const { id } = useParams()
    const { feedback } = useDB()
    const { user } = useAuthContext()
    const [category, setCategory] = useState({});
    const [status, setStatus] = useState({});
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()

    const oneFeedback = feedback.find(elem => elem.id === id)

    function handleCategory(item) {
        setCategory(item);
    }

    function handleStatus(item) {
        setStatus(item);
    }

    function invalidForm(e) {
        e.target.style.border = '1px solid red'
        e.target.parentElement.querySelector('.errorText').style.display = 'block'
        e.target.parentElement.querySelector('.errorText').style.color = '#D73737'
    }

    useEffect(() => {
        getData()
    }, [oneFeedback])

    function getData() {
        let feedbackCategory = oneFeedback?.category
        let feedbackStatus = oneFeedback?.status
        let initialFeature = features.find(elem => elem.key === feedbackCategory)
        let initialStatus = statuses.find(elem => elem.key === feedbackStatus)

        setTitle(oneFeedback?.title)
        setDescription(oneFeedback?.description)
        setCategory(initialFeature)
        setStatus(initialStatus)
    }


    async function handleSubmit(e) {
        e.preventDefault()
        const ref = doc(db, 'feedback', id)
        await updateDoc(ref, {
            title: title,
            category: category.key,
            status: status.key,
            description: description
        })
        navigate('/product-feedback')
    }

    async function handleDelete(e) {
        e.preventDefault()
        await deleteDoc(doc(db, 'feedback', id))
        navigate('/product-feedback')
    }

    const notAllowedToEdit = oneFeedback && oneFeedback.createdBy !== user.uid

    return (
        <UpdateContainer>
            <StyledLink onClick={() => navigate(-1)} color="#647196">
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
                Go Back
            </StyledLink>
            <FormContainer>
                <img src={edit} alt="" />
                <h1>Editing '{oneFeedback && oneFeedback.title}'</h1>
                <form>
                    <div className="title">
                        <StyledLabel htmlFor="title">Feedback Title <span>Add a short, descriptive headline</span></StyledLabel>
                        <StyledInput required onInvalid={invalidForm} type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="category">
                        <StyledLabel htmlFor="category">Category <span>Choose a category for your feedback</span></StyledLabel>
                        <Dropdown styles={formDropdownStyles} items={features} state={category} setState={setCategory} onChange={handleCategory} />
                    </div>
                    <div className="status">
                        <StyledLabel htmlFor="status">Update Status <span>Change feedback state</span></StyledLabel>
                        <Dropdown styles={formDropdownStyles} items={statuses} state={status} setState={setStatus} onChange={handleStatus} />
                    </div>
                    <div className="detail">
                        <StyledLabel htmlFor="detail">Feedback Detail <span>Include any specific comments on what should be improved, added, etc.</span></StyledLabel>
                        <StyledInput required onInvalid={invalidForm} height="100px" as="textarea" id="detail" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="buttonGroup">
                        <Button disabled={notAllowedToEdit} hover="#C75AF6" width="144px" color="#AD1FEA" onClick={handleSubmit}>Save Changes</Button>
                        <Button disabled={notAllowedToEdit} hover="#656EA3" width="93px" color="#3A4374" onClick={() => { navigate('/') }}>Cancel</Button>
                        <Button disabled={notAllowedToEdit} className="first" hover="#E98888" width="93px" color="#D73737" onClick={handleDelete}>Delete</Button>
                    </div>
                </form>
            </FormContainer>
        </UpdateContainer>
    )
}