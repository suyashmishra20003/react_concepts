# Angular and React Similarities
| React  | Angular | 
|--------|---------|
| Props | @Input() | 


# Angular Vs React Life Cycle hooks

React has lifecycle methods that are similar to Angular's lifecycle hooks. These methods allow you to run code at specific stages of a component's life cycle, such as when the component is being created, updated, or destroyed. In modern React (with functional components), these lifecycle methods are implemented using hooks like useEffect, but here’s a comparison of both class-based and functional components:

## React Lifecycle Methods in Class Components
- ***constructor(props):*** Initializes the component state. It's called before the component is mounted.

- ***componentDidMount():*** Called once after the component is mounted (i.e., inserted into the tree). It’s a good place to fetch data.

- ***componentDidUpdate(prevProps, prevState):*** Called after the component has been updated. It’s a good place to perform operations based on the change in state or props.

- ***componentWillUnmount():*** Called just before the component is unmounted and destroyed. It's used to clean up resources like timers or cancel network requests.

- ***shouldComponentUpdate(nextProps, nextState):*** Determines whether the component should re-render in response to a change in state or props. By default, it returns true.

- ***getDerivedStateFromProps(nextProps, prevState):*** A static method that allows the state to be updated based on changes in props. It’s called before every render.

- ***getSnapshotBeforeUpdate(prevProps, prevState):*** Called before the rendered output is committed to the DOM. The value returned by this method is passed to componentDidUpdate.

## React Lifecycle with Hooks (Functional Components)
***useEffect()***: This hook can mimic componentDidMount, componentDidUpdate, and componentWillUnmount depending on how it’s used:

If you pass an empty array as the second argument, useEffect acts like componentDidMount.
If you pass an array with specific dependencies, it acts like componentDidUpdate.
If you return a cleanup function from useEffect, it acts like componentWillUnmount.

```jsx
import React, { useEffect } from 'react';

function MyComponent() {
    useEffect(() => {
        console.log('Component did mount or update');

        return () => {
            console.log('Component will unmount');
        };
    }, []); // Empty array means it only runs once like componentDidMount

    return <div>My Component</div>;
}
```
***useLayoutEffect()***: Similar to useEffect, but it fires synchronously after all DOM mutations. It’s useful for tasks like measuring the DOM.

## Comparison to Angular Lifecycle Hooks
- ngOnInit is similar to componentDidMount in React.
- ngOnChanges corresponds to getDerivedStateFromProps or logic inside componentDidUpdate.
- ngOnDestroy is similar to the cleanup function inside useEffect or componentWillUnmount in class components.
In summary, React provides lifecycle methods both in its class-based API and with hooks in functional components, allowing you to control how your components behave during their lifecycle, similar to Angular's lifecycle hooks.

| **Concept**            | **React (Class Components)**                            | **React (Functional Components with Hooks)**       | **Angular**                                      |
|------------------------|---------------------------------------------------------|---------------------------------------------------|--------------------------------------------------|
| **Initialization**     | `constructor(props)`                                    | N/A (Initialization typically done within the component or `useState`) | `ngOnInit()`                                      |
| **On Component Mount** | `componentDidMount()`                                   | `useEffect(() => { ... }, [])`                     | `ngOnInit()`                                      |
| **On Props/State Change** | `componentDidUpdate(prevProps, prevState)`              | `useEffect(() => { ... }, [dependencies])`         | `ngOnChanges(changes)`                            |
| **Control Update**     | `shouldComponentUpdate(nextProps, nextState)`           | `React.memo` for pure components, `useMemo` or custom hooks for more control | `ngOnChanges(changes)`                            |
| **Before Re-render**   | `getSnapshotBeforeUpdate(prevProps, prevState)`         | N/A                                               | N/A (Handled differently in Angular)             |
| **On Component Unmount** | `componentWillUnmount()`                               | Cleanup function returned in `useEffect`          | `ngOnDestroy()`                                   |
| **Error Handling**     | `componentDidCatch(error, info)`                        | `useEffect` or custom error boundary components   | `ngOnChanges()` (for change errors)               |
| **DOM Manipulation**   | N/A (Directly in component or use refs)                 | `useLayoutEffect` for synchronous updates         | `AfterViewInit`, `AfterViewChecked` for direct DOM manipulation |
