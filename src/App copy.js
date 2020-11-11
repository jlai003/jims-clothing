import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Homepage = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)
const TopicList = () => (
  <div>
    <h1>Topic List!</h1>
  </div>
)
const TopicDetail = () => (
  <div>
    <h1>HATS PAGE!</h1>
  </div>
)
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/topics' component={TopicList} />
        <Route path='/topics/:topicId' component={TopicDetail} />
      </Switch>
    </div>
  );
}

export default App;
