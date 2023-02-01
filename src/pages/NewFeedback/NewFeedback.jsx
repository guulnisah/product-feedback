import { useState } from 'react'
import plus from '../../assets/shared/icon-new-feedback.svg'
import { StyledLabel, StyledInput, UpdateContainer, Button, FormContainer, StyledLink } from '../../components/Styles'
import Dropdown from '../../components/Dropdown'
import { useNavigate } from 'react-router-dom'
import { db } from '../../firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import { features, formDropdownStyles } from '../../utils/dropdownItems'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function NewFeedback() {
    const [category, setCategory] = useState({ label: "Feature", key: "feature" });
    const navigate = useNavigate()
    const { user } = useAuthContext()


    function handleChange(item) {
        setCategory(item);
    }

    async function handleSubmit(e) {
        e.preventDefault()
        const ref = collection(db, 'feedback')
        await addDoc(ref, {
            title: e.target.querySelector('#title').value,
            category: category.key,
            status: 'suggestion',
            upvotes: 0,
            description: e.target.querySelector('#detail').value,
            comments: 0,
            createdBy: user.uid,
        })
        navigate('/product-feedback')
    }

    function invalidForm(e) {
        e.target.style.border = '1px solid red'
        e.target.parentElement.querySelector('.errorText').style.display = 'block'
        e.target.parentElement.querySelector('.errorText').style.color = '#D73737'
    }

    return (
        <UpdateContainer>
            <StyledLink onClick={() => navigate(-1)} color="#647196">
                <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" stroke-width="2" fill="none" fill-rule="evenodd" /></svg>
                Go Back
            </StyledLink>
            <FormContainer>
                <img src={plus} alt="" />
                <h1>Create New Feedback</h1>
                <form onSubmit={handleSubmit}>
                    <div className="title">
                        <StyledLabel htmlFor="title">Feedback Title </StyledLabel>
                        <span>Add a short, descriptive headline</span>
                        <StyledInput required type="text" id="title" onInvalid={invalidForm} />
                        <span className="errorText" style={{ display: 'none' }}>Can't be empty</span>
                    </div>

                    <div className="category">
                        <StyledLabel htmlFor="category">Category</StyledLabel>
                        <span>Choose a category for your feedback</span>
                        <Dropdown styles={formDropdownStyles} items={features} state={category} setState={setCategory} onChange={handleChange} />
                    </div>

                    <div className="detail">
                        <StyledLabel htmlFor="detail">Feedback Detail </StyledLabel>
                        <span>Include any specific comments on what should be improved, added, etc.</span>
                        <StyledInput required height="100px" as="textarea" id="detail" onInvalid={invalidForm} />
                        <span className="errorText" style={{ display: 'none' }}>Can't be empty</span>

                    </div>

                    <div className="buttonGroup">
                        <Button width="144px" color="#AD1FEA">Add Feedback</Button>
                        <Button width="93px" color="#3A4374" onClick={() => { navigate('/') }}>Cancel</Button>
                    </div>
                </form>
            </FormContainer>
        </UpdateContainer>
    )
}