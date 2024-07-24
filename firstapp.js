import React from 'react';
import ReactDOM from 'react-dom';


/* createElement method returns a js object which contains children, attributes in props key and element name in type key */

// const heading = React.createElement('h2', {id: "h2-element"}, 'Hello World from React Js!');

// console.log("heading===>", heading)

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);    // takes the js object and converts it in DOM node

/* Exercise:- Create structure using React

<div id="parent">
    <div id="child">
        <h2>I'm h1 Tag</h2>
    </div>
</div>

*/

const parent = React.createElement('div', {id: 'parent'}, [React.createElement('div', {id: 'child'},[ React.createElement('h1', {key: 'h1'}, "Hello, I'm h1 tag"), React.createElement('h2', {key: 'h2'}, "Hello, I'm h2 tag")]), React.createElement('div', {id: 'child2'},[ React.createElement('h1', {key: 'h1'}, "Hello, I'm h1 tag"), React.createElement('h2', {key: 'h2'}, "Hello, I'm h2 tag")])])
console.log("===parent===", parent);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);