import React from 'react';

const LazyEditFeedback = React.lazy(() => import('./EditFeedback'));

const WithSuspense = () => (
    <React.Suspense>
        <LazyEditFeedback />
    </React.Suspense>
);

export default WithSuspense;