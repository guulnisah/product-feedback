import { useState } from 'react'
import { PillButton } from './Styles'
import { nanoid } from 'nanoid'

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

    const handleClick = (newFilter) => {
        setCurrentFilter(newFilter)
        changeFilter(newFilter)
    }

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
        <div className="labels">
            {labels}
        </div>
    )
}