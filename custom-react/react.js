const root = document.querySelector("#root")

// jo ap banana chahte ho 

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "Visit google"
}

// function to render your element 

function customRender(reactElement, root){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
       domElement.setAttribute(prop, reactElement.props[prop]);
    }
    root.appendChild(domElement);
}

customRender(reactElement, root);