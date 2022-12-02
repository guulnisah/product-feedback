import useCollection from '../hooks/useCollection'

export default function useDB() {
    const { documents: feedback } = useCollection('feedback')
    const suggestions = feedback.filter(elem => elem.status === 'suggestion')
    const planned = feedback.filter(elem => elem.status === 'planned')
    const progress = feedback.filter(elem => elem.status === 'in-progress')
    const live = feedback.filter(elem => elem.status === 'live')

    return { feedback, suggestions, planned, progress, live }
}