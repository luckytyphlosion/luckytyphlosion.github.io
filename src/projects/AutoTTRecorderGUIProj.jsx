import React from 'react';
import autoTTRecGUIWindowPng from "../images/auto-tt-recorder-gui-window.png";

function AutoTTRecorderYTProj() {
  return (
    <div>
      <h1>Auto-TT-Recorder GUI</h1>
      <img width="50%" src={autoTTRecGUIWindowPng} alt="Screenshot of auto-tt-recorder-gui"></img> 
      <p><a href="https://github.com/luckytyphlosion/auto-tt-recorder-gui">GitHub link</a></p>
      <p>To ease use of Auto-TT-Recorder, I created a GUI wrapper over the program using Electron, React, and TypeScript. I chose Electron as a way to learn how to use React, and for me to step out of my comfort zone in terms of programming.</p>
      <p>I learned many concepts about Electron, React, and Typescript during development. I had to learn the basics of TypeScript’s type checking, such as typed arguments, but I also learned about generic interfaces, keyof, and the as keyword. I learned about how React manages state via the state field and setState method of a React.Component. I learned about how React handles event changes using custom element attributes to be supplied with callbacks. I learned about the fundamentals of Electron to the point that I could release a basic application. I learned about Electron’s process model of having two processes, the main and renderer process, and how to communicate between them securely without exposing the renderer process to node.js using a preload script. I learned how to build a node.js app for distribution, and then use those built files in an Electron app.</p>
    </div>
  );
}

export default AutoTTRecorderYTProj;
