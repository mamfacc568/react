const heading = React.createElement("h1",{id:"color"},
    ["hello from react",React.createElement("h1",{id:"text"},"child")])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)