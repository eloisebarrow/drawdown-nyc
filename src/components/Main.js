import React, { Suspense } from 'react';
import About from './About';
import Aside from './Aside';
const IntroPhoto = React.lazy(() => import('./IntroPhoto'));

export default function Main() {
  
  // const import('./IntroPhoto')
  //   .then(({ IntroPhoto }) => {
  //     return <IntroPhoto />
  //   })
  //   .catch(err => {
  //     console.log(err, "IntroPhoto code split didn't work")
  //   });

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <IntroPhoto />
      </Suspense>
      <About />
      <Aside />
    </div>
  )
}
