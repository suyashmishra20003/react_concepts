function customReander(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    
    container.appendChild(domElement);
    */

    // modular approach
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
          domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);

}   

const reactElement = {
    type: 'a',
    props: {
        href:'https://reactjs.org/',
        target:'_blank',
        id:'linkTag'
    },
    children: 'click me to visit reactjs.org'
}

const mainContainer = document.getElementById('root');

customReander(reactElement, mainContainer)