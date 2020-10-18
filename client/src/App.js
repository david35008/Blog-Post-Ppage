import React, { useState, lazy, Suspense } from 'react';
import ControlSection from './components/control-section/Control-Section';
import ErrorBoundry from './components/Error-Buundry/ErrorBoundry';

const Comments = lazy(() => import("./components/view-section/comments-box/comments-box"))

function App() {

  const [comments, setComments] = useState([{ title: 'title:', content: 'content:' }])

  return (
    <div className="App">
      <ErrorBoundry>
        <h1>My Blog</h1>
        <Suspense fallback={<h1>loading...</h1>}>
          <Comments comments={comments} setComments={setComments} />
        </Suspense>
        <ControlSection setComments={setComments} />
      </ErrorBoundry>
    </div>
  );
}

export default App;
