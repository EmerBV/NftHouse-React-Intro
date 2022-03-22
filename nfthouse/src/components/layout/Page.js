import { Fragment } from 'react';

function Page({ children }) {
  return (
    <Fragment>
      <section>{children}</section>
    </Fragment>
  );
}

// <Fragment></Fragment>
// <></>

export default Page;