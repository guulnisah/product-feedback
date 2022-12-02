import React from 'react';

const LazyRoadmap = React.lazy(() => import('./Roadmap'));

const WithSuspense = () => (
    <React.Suspense>
        <LazyRoadmap />
    </React.Suspense>
);

export default WithSuspense;