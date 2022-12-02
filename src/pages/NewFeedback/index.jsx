import React from 'react';

const LazyNewFeedback = React.lazy(() => import('./NewFeedback'));

const WithSuspense = () => (
    <React.Suspense>
        <LazyNewFeedback />
    </React.Suspense>
);

export default WithSuspense;