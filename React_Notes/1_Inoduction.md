# React Intorduction

## Principle on Which React Works:
React operates on the principle of declarative programming and component-based architecture. Here’s a breakdown:

### Declarative UI:

- React allows developers to describe what the UI should look like for any given state of the application.
- It automatically updates the UI when the underlying data changes.

### Component-Based Architecture:

- React applications are built using components, which are reusable and independent pieces of UI.
- Each component can manage its own state and can be composed to form complex UIs.

### Virtual DOM:

- React maintains a lightweight copy of the actual DOM called the Virtual DOM.
- When the state of a component changes, React updates the Virtual DOM and efficiently determines the minimal set of changes to apply to the real DOM, improving performance.

### One-Way Data Binding:

- Data flows in one direction, from parent to child components, making the application predictable and easier to debug.

### How a Root Component is Initialized:

#### Entry Point:
In a typical React application created with tools like create-react-app, the entry point is usually the index.js or index.tsx file.

#### Rendering the Root Component:

- The ***ReactDOM.render()*** function is used to render the root component into the actual DOM.

Example:
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
In this code:
- App is the root component, which is the top-level component of the application.
- document.getElementById('root') refers to the HTML element where the React application will be mounted.

#### Root Component (App):

- The root component (App) is typically a function or class component that serves as the entry point for all other components in the application.
- It renders the initial layout or structure of the application and may include routing logic to display different components based on the URL.

#### Component Hierarchy:

- The App component often contains other components, which in turn can contain their own sub-components, forming a tree-like structure.
- This process initializes the React application, with the App component serving as the root of the component tree. As users interact with the application, React updates the Virtual DOM, which efficiently synchronizes changes with the actual DOM.

----------------------------------------------------------------------
### How the Virtual DOM Works:

#### Purpose:
- The Virtual DOM is an in-memory representation of the real DOM elements. It is a lightweight copy of the actual DOM, allowing React to perform efficient updates and rendering.

#### How it Works:

- When a component's state or props change, React first updates the Virtual DOM.
- React then compares the Virtual DOM with a previous version of itself (using a process called "reconciliation") to determine what has changed. The algorithm React uses to diff one tree with another to determine which parts need to be changed.

- After identifying the changes, React updates only the parts of the real DOM that have changed, minimizing the number of manipulations to the DOM, which is an expensive operation in terms of performance.

#### Key Characteristics:

- ***Efficient Updates:*** The Virtual DOM allows React to update only the necessary parts of the DOM, improving performance.
- ***Simplifies Development:*** Developers don't need to worry about manually updating the DOM, as React handles it based on the component's state and props.
React Fiber

----------------------------------------------------------------------

### How React Fiber Works:
The algo used to update virtual Dom is fibre

#### Purpose:

React Fiber is the underlying algorithm that powers the reconciliation process in React. It is an implementation of React's core architecture designed to improve its ability to handle complex updates and maintain a responsive UI.

#### How it Works:

- Fiber breaks down the rendering work into smaller units (fibers) that can be paused, prioritized, or aborted. This makes React more flexible and allows it to handle updates more efficiently.
- Fiber introduces the ability to prioritize updates based on their urgency, ensuring that more critical tasks (like user input or animations) are processed before less important ones.
- It enables concurrent rendering, allowing React to prepare parts of the UI in the background and apply them when ready.

#### Key Characteristics:

- ***Incremental Rendering:*** Fiber allows React to render in chunks, so it doesn't block the main thread, leading to a more responsive UI.
- ***Concurrency:*** Supports handling multiple tasks simultaneously, which helps in improving the smoothness of complex applications.
- ***Prioritization:*** Fiber can prioritize updates, ensuring that critical tasks are handled first.(like user input or animations)  

#### Summary of Differences

- ***Focus:***
    - The Virtual DOM is primarily concerned with how React updates the DOM efficiently.
    - React Fiber is concerned with how React manages and schedules those updates, particularly in a way that keeps the UI responsive.
- ***Operation:***
    - The Virtual DOM deals with the "what" and "where" of updates in the UI.
    - React Fiber deals with the "how" and "when" of processing those updates.
- ***Impact:***
    - The Virtual DOM improves performance by minimizing direct DOM manipulations.
    - React Fiber enhances the ability of React to handle complex and asynchronous updates smoothly.

----------------------------------------------------------------------
### Key Features of JSX:

React JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. JSX makes it easier to create React components by combining the power of JavaScript with the familiarity of HTML.

- ***HTML-like Syntax:*** JSX allows you to write elements that look like HTML within your JavaScript code. This makes it easier to visualize the structure of your components.
- ***Embedded Expressions:*** You can embed JavaScript expressions inside JSX using curly braces {}. This allows you to dynamically display values, run logic, or render components conditionally.
- ***Babel Compilation:*** JSX is not valid JavaScript. Therefore, it needs to be compiled (typically by Babel) into regular JavaScript that React can understand. During compilation, JSX elements are transformed into React.createElement() calls.
- ***Component Composition:*** JSX is used to create React elements and components. You can nest components inside each other, pass props, and build complex UIs.
----------------------------------------------------------------------

## Different ways to create React apps:

### Using create-react-app (CRA):

The most common way to set up a React app with a pre-configured environment.
```shell
npx create-react-app my-app
``` 

### Using Vite:

A modern build tool that is faster than CRA.
```shell 
npm create vite@latest my-app --template react 
```

### Using Next.js:

A React framework that enables server-side rendering and other features.
```shell
npx create-next-app my-app
``` 

## Expressions and Evaluated Expressions

### Expression

- Definition: An expression in React is any valid JavaScript code that can be placed within curly braces {} in JSX. It could be a variable, function call, arithmetic operation, or any snippet of code that produces a value.
- Example:
```jsx
const name = "Alice";
return <h1>Hello, {name}!</h1>;
```

### Evaluated Expression
- Definition: An evaluated expression is the result of executing or "evaluating" the expression. It's the final value that React uses when rendering the UI.
- Example:
    - In the previous example, the expression {name} is evaluated to "Alice".
    - If you had an expression like {10 + 5}, the evaluated expression would be 15.

```jsx
const age = 25;
return <p>You are {age >= 18 ? "an adult" : "a minor"}.</p>;
```
- Expression: **{age >= 18 ? "an adult" : "a minor"}** is an expression that involves a ternary operator.
- Evaluated Expression: Depending on the value of age, this expression is evaluated. If age is 25, the evaluated expression is **"an adult"**.

## Summary
- Expression: The raw code written in {} within JSX.
- Evaluated Expression: The result or output of that code after it has been processed by JavaScript during the rendering phase.