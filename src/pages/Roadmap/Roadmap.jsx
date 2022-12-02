import { StyledLink, Button, Nav, Container, PillButton, UpvoteButton, Feature, Status, RoadmapContainer, RoadmapSection } from '../../components/Styles'
import { Link } from 'react-router-dom'
import displayFeatures from '../../utils/displayFeatures'
import useDB from '../../hooks/useDB'

export default function Roadmap() {

    const { planned, progress, live } = useDB()

    return (
        <Container>
            <Nav>
                <div>
                    <StyledLink to="/" color="#fff">
                        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#fff" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
                        Go Back
                    </StyledLink>
                    <h1>Roadmap</h1>
                </div>
                <Button hover="#C75AF6" width="158px" color="#AD1FEA">
                    <Link to="/feedback/new" > + Add Feedback </Link>
                </Button>
            </Nav>
            <RoadmapContainer>
                <RoadmapSection className="planned">
                    <div>
                        <h2>Planned ({planned.length})</h2>
                        <p>Ideas prioritized for research</p>
                    </div>
                    {planned && displayFeatures(planned)}
                </RoadmapSection>
                <RoadmapSection className="in-progress">
                    <div>
                        <h2>In-Progress ({progress.length})</h2>
                        <p>Currently being developed</p>
                    </div>
                    {progress && displayFeatures(progress)}
                </RoadmapSection>
                <RoadmapSection className="live">
                    <div>
                        <h2>Live ({live.length})</h2>
                        <p>Released features</p>
                    </div>
                    {live && displayFeatures(live)}
                </RoadmapSection>
            </RoadmapContainer>
        </Container>
    )
}