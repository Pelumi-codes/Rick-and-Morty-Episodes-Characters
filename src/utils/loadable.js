import { lazy, Suspense } from "react";

const loader = (component) => {
  const Component = lazy(component);

  return props => (
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props}/>
      </Suspense>
  );
};

export default loader;
