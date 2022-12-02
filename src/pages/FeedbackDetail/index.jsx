import React from 'react';

const LazyFeedbackDetail = React.lazy(() => import('./FeedbackDetail'));

const WithSuspense = () => (
    <React.Suspense>
        <LazyFeedbackDetail />
    </React.Suspense>
);

export default WithSuspense;