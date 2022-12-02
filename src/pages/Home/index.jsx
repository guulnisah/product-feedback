import React from 'react';

const LazyHomePage = React.lazy(() => import('./Home'));

const WithSuspense = () => (
    <React.Suspense>
        <LazyHomePage />
    </React.Suspense>
);

export default WithSuspense;