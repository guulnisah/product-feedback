import { Link } from 'react-router-dom'
import { MobileMenu, HamburgerIcon, MobileHeader, Container, Avatar, Button, Status, PillButton, HomeContainer, Header, Main, PurpleHeader, Header_Roadmap, Header_Background, Header_User } from '../../components/Styles'
import Dropdown from '../../components/Dropdown'
import { useState, useEffect, useRef } from 'react'
import useLogout from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import useDB from '../../hooks/useDB'
import FeedbackFilter from '../../components/FeedbackFilter'
import FeedbackList from '../../components/FeedbackList'
import { sortItems, navDropdownStyles } from '../../utils/dropdownItems'
import useWindowSize from '../../hooks/useWindowSize'
import useOutsideClick from '../../hooks/useOutsideClick'
import { collection, addDoc, updateDoc, doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false)
    const { logout } = useLogout()
    const { suggestions, planned, progress, live } = useDB()
    const { user } = useAuthContext()
    const windowSize = useWindowSize();
    const wrapperRef = useRef(null);

    useOutsideClick(wrapperRef, () => {
        if (menuOpen) { setMenuOpen(false); }
    });

    const [filter, setFilter] = useState({ label: "All", key: "all" })
    function changeFilter(newFilter) {
        setFilter(newFilter)
    }

    const [sortBy, setSortBy] = useState({ label: "Most Upvotes", key: "upvotes", order: "desc" });

    function handleChange(item) {
        setSortBy(item);
    }

    const filteredSuggestions = suggestions ?
        suggestions.sort((a, b) => {
            if (sortBy.key === 'upvotes') {
                return sortBy.order === 'asc' ? a.upvotes - b.upvotes : b.upvotes - a.upvotes
            }
            if (sortBy.key === 'comments') {
                return sortBy.order === 'asc' ? a.comments - b.comments : b.comments - a.comments
            }
        })
            .filter(elem => {
                if (filter.key === 'all') { return true }
                else { return elem.category === filter.key }
            })
        : null

    useEffect(() => {
        if (windowSize.width > 576) {
            setMenuOpen(false)
        }
    }, [windowSize.width])


    return (
        <HomeContainer>
            {/* <button onClick={addUser} >CLICK</button> */}
            {windowSize.width > 576 &&
                <Header>
                    <Header_Background>
                        <h1>Feedback Board</h1>
                        <div className="greeting">
                            <Avatar width={60} src={user.photoURL} />
                            <div>
                                <p>Hey, {user.displayName}</p>
                                <PillButton onClick={logout}>Logout</PillButton>
                                {/* <svg onClick={logout} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M9.96725 10.2919L8.14641 12.1048C8.07221 12.1784 8.01332 12.266 7.97312 12.3625C7.93293 12.4589 7.91224 12.5624 7.91224 12.6669C7.91224 12.7714 7.93293 12.8749 7.97312 12.9714C8.01332 13.0678 8.07221 13.1554 8.14641 13.229C8.22001 13.3032 8.30757 13.3621 8.40404 13.4023C8.50051 13.4425 8.60399 13.4632 8.7085 13.4632C8.81301 13.4632 8.91648 13.4425 9.01295 13.4023C9.10942 13.3621 9.19698 13.3032 9.27058 13.229L12.4372 10.0623C12.5093 9.98703 12.5658 9.89825 12.6035 9.80108C12.6827 9.60833 12.6827 9.39215 12.6035 9.19941C12.5658 9.10223 12.5093 9.01345 12.4372 8.93816L9.27058 5.77149C9.19677 5.69768 9.10914 5.63913 9.01269 5.59918C8.91625 5.55923 8.81288 5.53867 8.7085 5.53867C8.60411 5.53867 8.50074 5.55923 8.4043 5.59918C8.30786 5.63913 8.22023 5.69768 8.14641 5.77149C8.0726 5.84531 8.01405 5.93294 7.9741 6.02938C7.93415 6.12582 7.91359 6.22919 7.91359 6.33357C7.91359 6.43796 7.93415 6.54133 7.9741 6.63777C8.01405 6.73421 8.0726 6.82184 8.14641 6.89566L9.96725 8.70858H2.37516C2.1652 8.70858 1.96384 8.79198 1.81537 8.94045C1.6669 9.08892 1.5835 9.29028 1.5835 9.50024C1.5835 9.7102 1.6669 9.91157 1.81537 10.06C1.96384 10.2085 2.1652 10.2919 2.37516 10.2919H9.96725ZM9.50016 1.58358C8.02061 1.57697 6.56881 1.98512 5.30945 2.76173C4.05009 3.53833 3.03356 4.65232 2.37516 5.97732C2.28068 6.16629 2.26513 6.38505 2.33194 6.58548C2.39875 6.78591 2.54245 6.95159 2.73141 7.04607C2.92038 7.14056 3.13914 7.15611 3.33957 7.0893C3.54 7.02249 3.70568 6.87879 3.80016 6.68982C4.30065 5.67912 5.06195 4.8204 6.00539 4.2024C6.94883 3.5844 8.04019 3.22954 9.16668 3.1745C10.2932 3.11946 11.4139 3.36623 12.4131 3.88931C13.4123 4.41239 14.2537 5.19281 14.8503 6.1499C15.447 7.107 15.7772 8.20606 15.8069 9.3335C15.8366 10.4609 15.5647 11.5759 15.0193 12.563C14.4739 13.5502 13.6747 14.3739 12.7045 14.9488C11.7342 15.5238 10.628 15.8292 9.50016 15.8336C8.31969 15.8387 7.1617 15.5109 6.15909 14.8877C5.15647 14.2646 4.34986 13.3714 3.83183 12.3107C3.73735 12.1217 3.57167 11.978 3.37124 11.9112C3.17081 11.8444 2.95205 11.8599 2.76308 11.9544C2.57411 12.0489 2.43042 12.2146 2.36361 12.415C2.2968 12.6154 2.31235 12.8342 2.40683 13.0232C3.03448 14.2863 3.9882 15.3588 5.16933 16.1297C6.35045 16.9006 7.7161 17.342 9.12501 17.4082C10.5339 17.4744 11.9349 17.1629 13.1831 16.5061C14.4313 15.8493 15.4813 14.8709 16.2246 13.6722C16.9679 12.4735 17.3775 11.0979 17.4109 9.68787C17.4443 8.2778 17.1004 6.88441 16.4148 5.65182C15.7291 4.41922 14.7266 3.39219 13.511 2.67695C12.2953 1.96171 10.9106 1.58424 9.50016 1.58358V1.58358Z" fill="#F7F8FD" />
                         </svg> */}
                            </div>
                        </div>
                    </Header_Background>
                    <FeedbackFilter changeFilter={changeFilter} />
                    <Header_Roadmap>
                        <div>
                            <h2>Roadmap</h2>
                            <Link to="/product-feedback/roadmap">View</Link>
                        </div>
                        <div>
                            <Status status="planned">Planned</Status>
                            <span>{planned?.length}</span>
                        </div>
                        <div>
                            <Status status="in-progress">In Progress</Status>
                            <span>{progress?.length}</span>
                        </div>
                        <div>
                            <Status status="live">Live</Status>
                            <span>{live?.length}</span>
                        </div>
                    </Header_Roadmap>
                </Header>
            }

            <Main>
                <div className={`overlay ${menuOpen ? 'active' : ''}`}></div>
                {windowSize.width < 576 &&
                    <div ref={wrapperRef}>
                        <MobileHeader>
                            <h1>Frontend Mentor</h1>
                            <h2>Feedback Board</h2>
                            <HamburgerIcon onClick={() => setMenuOpen(!menuOpen)}>
                                <div className={`icon-1 ${menuOpen && 'a'}`} ></div>
                                <div className={`icon-2 ${menuOpen && 'b'}`} ></div>
                                <div className={`icon-3 ${menuOpen && 'c'}`} ></div>
                            </HamburgerIcon>
                        </MobileHeader>
                        {menuOpen &&
                            <MobileMenu menuOpen={menuOpen} >
                                <Header_User>
                                    <Avatar width={60} src={user.photoURL} />
                                    <div>
                                        <p>Hey, {user.displayName}</p>
                                        <PillButton onClick={logout}>Logout</PillButton>
                                    </div>
                                </Header_User>
                                <FeedbackFilter changeFilter={changeFilter} />
                                <Header_Roadmap>
                                    <div>
                                        <h2>Roadmap</h2>
                                        <Link to="/product-feedback/roadmap">View</Link>
                                    </div>
                                    <div>
                                        <Status status="planned">Planned</Status>
                                        <span>{planned?.length}</span>
                                    </div>
                                    <div>
                                        <Status status="in-progress">In Progress</Status>
                                        <span>{progress?.length}</span>
                                    </div>
                                    <div>
                                        <Status status="live">Live</Status>
                                        <span>{live?.length}</span>
                                    </div>
                                </Header_Roadmap>
                            </MobileMenu>
                        }
                    </div>
                }
                <PurpleHeader windowSize={windowSize.width}>

                    {windowSize.width > 576 &&
                        <>
                            <svg width="23" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 2.274c2.237 0 4.339.854 5.923 2.408a8.123 8.123 0 012.465 5.839 8.084 8.084 0 01-1.7 4.979 8.457 8.457 0 01-3.652 2.71l-.31.112.003.826h.369c.262 0 .475.21.475.469a.47.47 0 01-.39.46l-.085.008h-.365l.004 1.02h.36c.263 0 .476.21.476.469a.47.47 0 01-.39.461l-.085.008h-.358l.006 1.487a.466.466 0 01-.381.46l-.094.01H9.23a.478.478 0 01-.466-.378l-.01-.092.006-1.487h-.357a.472.472 0 01-.475-.47.47.47 0 01.39-.46l.085-.008h.361l.004-1.02h-.365a.472.472 0 01-.475-.468.47.47 0 01.39-.462l.085-.007h.368l.004-.826a8.452 8.452 0 01-3.996-2.867 8.08 8.08 0 01-1.666-5.056c.032-2.127.923-4.152 2.511-5.7 1.508-1.471 3.448-2.322 5.493-2.416l.324-.009h.06zm1.791 19.769H9.709l-.004 1.02h3.59l-.004-1.02zm-.007-1.958H9.716l-.003 1.02h3.574l-.003-1.02zM11.5 3.212h-.054c-3.946.027-7.327 3.325-7.384 7.2-.048 3.266 2.14 6.192 5.322 7.118.174.05.3.193.332.364l.008.088-.004 1.166h3.56l-.004-1.166a.47.47 0 01.34-.452c3.134-.912 5.323-3.794 5.323-7.01a7.197 7.197 0 00-2.185-5.173A7.453 7.453 0 0011.5 3.212zm.829 1.782a.4.4 0 01.401.397v.322c.48.12.932.307 1.346.552l.228-.226a.405.405 0 01.569 0L16.046 7.2a.393.393 0 010 .56l-.23.228c.247.41.437.858.557 1.333h.323a.4.4 0 01.402.397v1.645a.4.4 0 01-.402.396h-.323c-.12.476-.31.924-.557 1.333l.23.228a.393.393 0 010 .56l-1.173 1.163a.405.405 0 01-.57 0l-.227-.227a5.02 5.02 0 01-1.346.553v.322a.4.4 0 01-.401.396H10.67a.4.4 0 01-.402-.396v-.322a5.022 5.022 0 01-1.345-.553l-.228.227a.405.405 0 01-.569 0L6.954 13.88a.393.393 0 010-.56l.23-.228a4.924 4.924 0 01-.557-1.333h-.324a.4.4 0 01-.401-.396V9.719a.4.4 0 01.401-.397h.324c.12-.475.31-.923.557-1.333l-.23-.228a.393.393 0 010-.56L8.127 6.04a.405.405 0 01.569 0l.228.226a5.021 5.021 0 011.345-.552V5.39a.4.4 0 01.402-.397zM11.5 7.721c-1.572 0-2.846 1.263-2.846 2.82 0 1.558 1.274 2.82 2.846 2.82s2.846-1.262 2.846-2.82c0-1.557-1.274-2.82-2.846-2.82zm11.025 4.152c.262 0 .475.21.475.469a.47.47 0 01-.39.461l-.085.008h-.498a.472.472 0 01-.475-.469.47.47 0 01.39-.461l.085-.008h.498zm-21.552 0c.262 0 .475.21.475.469a.47.47 0 01-.39.461l-.085.008H.475A.472.472 0 010 12.342a.47.47 0 01.39-.461l.085-.008h.498zM3.112 3.45l.074.06.46.451c.185.183.186.48 0 .663a.476.476 0 01-.596.062l-.075-.06-.459-.451a.465.465 0 01-.001-.663.48.48 0 01.597-.062zm17.373.062c.162.16.182.408.06.59l-.061.073-.46.45a.476.476 0 01-.67 0 .464.464 0 01-.06-.59l.06-.074.46-.45a.48.48 0 01.671 0zM11.5 0c.233 0 .427.166.467.384l.008.085v.49a.472.472 0 01-.475.468.473.473 0 01-.467-.384l-.008-.084v-.49c0-.26.213-.469.475-.469z" fill="#FFF" fillRule="nonzero" /></svg>
                            <span> {suggestions?.length} Suggestions</span>
                        </>
                    }

                    <Dropdown mobile={windowSize.width < 576} styles={navDropdownStyles} text="Sort by: " items={sortItems} state={sortBy} setState={setSortBy} onChange={handleChange} />

                    <Button hover="#C75AF6" width="10rem" color="#AD1FEA">
                        <Link to="/product-feedback/feedback/new" > + Add Feedback </Link>
                    </Button>

                </PurpleHeader>
                <Container>
                    <FeedbackList feedback={filteredSuggestions} />
                </Container>
            </Main>
        </HomeContainer>
    )
}