import { PillButton, UpvoteButton, Feature, Status } from '../components/Styles'
import { Link } from 'react-router-dom'

export default function displayFeatures(arr) {
    return arr.map(elem => {
        return (
            <Feature key={elem.id} status={elem.status}>
                <Status status={elem.status}>{elem.status}</Status>
                <div>
                    <h3><Link to={`/product-feedback/feedback/${elem.id}`}>{elem.title}</Link></h3>
                    <p>{elem.description}</p>
                </div>
                <PillButton as={'span'}>{elem.category}</PillButton>
                <div className="lastRow">
                    <UpvoteButton column={false}>
                        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
                        {elem.upvotes}
                    </UpvoteButton>
                    <span>
                        <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fillRule="nonzero" /></svg>
                        {elem.comments ? elem.comments : 0}
                    </span>
                </div>
            </Feature>
        )
    })
}
