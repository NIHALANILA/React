/*const head=React.createElement('h1',{},'helo from react')
    const root=ReactDOM.createRoot(document.getElementById('hello'))
    root.render(head)*/
    const parent=React.createElement('div',{id:"parent"},[React.createElement('div',{id:'child'},[React.createElement('h1',{},"iam an h1"),React.createElement('h2',{},"iam h2 tag")])])
    const root=ReactDOM.createRoot(document.getElementById('hello'))
    root.render(parent)