var nav = React.createElement(
'nav',{className : "links"},
    React.createElement("ul",
    null,
        React.createElement("li",
        null,
            React.createElement("a",
                {href :'#'},
                    "Home"
                ),
            ),
       
            React.createElement("li",
            null,
                React.createElement("a",
                {href : '#'},
                "Empresa"
               
                ), 
            ),
            React.createElement("li",
            null,
                React.createElement("a",
                {href : '#'},
                "Contato"
               
                ), 
            ),
       )
        
        
);





ReactDOM.render(nav, document.getElementById('root'));