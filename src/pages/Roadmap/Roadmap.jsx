import { StyledLink, Button, PurpleHeader, Container, PillButton, UpvoteButton, Feature, Status, RoadmapContainer, RoadmapSection, RoadmapGrid } from '../../components/Styles'
import { Link } from 'react-router-dom'
import displayFeatures from '../../utils/displayFeatures'
import useDB from '../../hooks/useDB'
import RoadmapTabs from '../../components/RoadmapTabs'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useWindowSize from '../../hooks/useWindowSize'

export default function Roadmap() {
    const navigate = useNavigate()
    const { planned, progress, live } = useDB()
    const windowSize = useWindowSize();

    return (
        <RoadmapContainer>
            <PurpleHeader windowSize={windowSize.width}>
                <div>
                    <StyledLink onClick={() => navigate(-1)} color="#fff">
                        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#fff" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
                        Go Back
                    </StyledLink>
                    <h1>Roadmap</h1>
                </div>
                <Button hover="#C75AF6" width="158px" color="#AD1FEA">
                    <Link to="/product-feedback/feedback/new" > + Add Feedback </Link>
                </Button>
            </PurpleHeader>

            {
                windowSize.width < 665 ?
                    <RoadmapTabs /> :
                    <RoadmapGrid>
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
                    </RoadmapGrid>
            }
        </RoadmapContainer>
    )
}