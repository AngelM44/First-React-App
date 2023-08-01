// Wrapper.js

//React is imported as a default import, without {}
import React from 'react';
//Greeting is imported with {} because it is a named export
//import { Greeting } from './Greeting';

//Wrapper component with nested Greeting component used as a React element
const Wrapper = () => {
  return (
    <div>
      The greeting is:
      <br/>
      <Greeting />
    </div>
  )
}

const Greeting = () => {
  return (
    <h6>Hello!</h6>
  )
}
//`Wrapper` exported for use/reuse as a default export
export default Wrapper;