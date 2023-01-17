import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { StyledLink, Button, PurpleHeader, Container, PillButton, UpvoteButton, Feature, Status, RoadmapContainer, RoadmapSection } from './Styles'
import { Link } from 'react-router-dom'
import displayFeatures from '../utils/displayFeatures'
import useDB from '../hooks/useDB'

const TabsContainer = styled.div`
.react-tabs__tab-list {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #979797;
    gap: 2rem;
    margin-bottom: 1.5rem;
    
     li {
    padding-bottom: 1rem;
    cursor: pointer;
        
     }
        [aria-selected="true"] {
            border-bottom: 4px solid ${({ tabIndex }) => tabIndex === 0 ? '#F49F85' : tabIndex === 1 ? '#AD1FEA' : '#62BCFA'};
            font-weight: 700;
            text-align: center;
            letter-spacing: -0.180556px;
            color: #3A4374;
        }
        
        [aria-selected="false"] {
            color: #979797;
        }
}
`

export default function RoadmapTabs() {
    const [tabIndex, setTabIndex] = useState(0);
    const { planned, progress, live } = useDB()

    return (
        <TabsContainer tabIndex={tabIndex}>
            <Tabs
                selectedIndex={tabIndex}
                onSelect={(tabIndex) => setTabIndex(tabIndex)}
            >
                <TabList>
                    <Tab>
                        Planned ({planned.length})
                    </Tab>
                    <Tab>
                        In-Progress ({progress.length})
                    </Tab>
                    <Tab>
                        Live ({live.length})
                    </Tab>
                </TabList>
                <Container>
                    <TabPanel>
                        <RoadmapSection className="planned">
                            <div>
                                <h2>Planned ({planned.length})</h2>
                                <p>Ideas prioritized for research</p>
                            </div>
                            {planned && displayFeatures(planned)}
                        </RoadmapSection>
                    </TabPanel>
                    <TabPanel>
                        <RoadmapSection className="in-progress">
                            <div>
                                <h2>In-Progress ({progress.length})</h2>
                                <p>Currently being developed</p>
                            </div>
                            {progress && displayFeatures(progress)}
                        </RoadmapSection>
                    </TabPanel>
                    <TabPanel>
                        <RoadmapSection className="live">
                            <div>
                                <h2>Live ({live.length})</h2>
                                <p>Released features</p>
                            </div>
                            {live && displayFeatures(live)}
                        </RoadmapSection>
                    </TabPanel>
                </Container>
            </Tabs>
        </TabsContainer>
    );
}