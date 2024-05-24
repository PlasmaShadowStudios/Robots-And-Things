import React, { lazy, Suspense } from 'react';

const LazyEmbeddedContent = lazy(() => import('./EmbeddedContent'));

const EmbeddedContent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyEmbeddedContent id={''} type='' {...props} />
  </Suspense>
);

export default LazyEmbeddedContent;
