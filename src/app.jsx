const myElement = React.createElement(
    'p',
    {},
    'Das ist mein erstes React-Element'
);

const myJSXElement = <p id='my-id'>das erste JSX Element</p>;

ReactDOM.render(
    myJSXElement,
    document.getElementById('react-app')
)