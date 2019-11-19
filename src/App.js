import React from 'react';
import Tweet from './Tweet';

function App(){
  return (
    <div className="app">
      <Tweet name="Al" message="Hello there!"/>
      <Tweet name="Mark" message="What's up?"/>
      <Tweet name="Mason" message="How you doin?"/>

    </div>

  );
}

export default App;
