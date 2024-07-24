import React from 'react';
import ReactDOM from 'react-dom';

// const jsxHeading = <h1>Hello, This is JSX Heading</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

const Title = () => {
    return (
        <div>This is Title Component</div>
    )
}

const HeadingComponent = () => {
    return (
        <div>
            <Title />
            <h2>This is Heading Component</h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)