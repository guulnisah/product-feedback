import { useState, useEffect } from 'react'
import { Header_Labels, PillButton } from './Styles'
import { nanoid } from 'nanoid'
import useWindowSize from '../hooks/useWindowSize'

const labelTags = [
    { label: "All", key: "all" },
    { label: "UI", key: "ui" },
    { label: "UX", key: "ux" },
    { label: "Enhancement", key: "enhancement" },
    { label: "Bug", key: "bug" },
    { label: "Feature", key: "feature" },
]

export default function ProjectFilter({ changeFilter }) {
    const [currentFilter, setCurrentFilter] = useState({ label: "All", key: "all" })
    const windowSize = useWindowSize();

    const handleClick = (newFilter) => {
        setCurrentFilter(newFilter)
        changeFilter(newFilter)
    }

    useEffect(() => {
        if (windowSize.width < 768) {
            setCurrentFilter({ label: "All", key: "all" })
            changeFilter({ label: "All", key: "all" })
        }
    }, [windowSize])

    const labels = labelTags.map(elem => {
        return (
            <PillButton
                key={nanoid()}
                onClick={() => handleClick(elem)}
                className={elem.key === currentFilter.key ? 'active' : ''}>
                {elem.label}
            </PillButton>)
    })

    return (
        <Header_Labels>
            {labels}
        </Header_Labels>
    )
}