import React from 'react';
 
var App = React.createClass({
	mixins: [ReactFireMixin],
    render: function(){
 
        return (
                <h1>This is my first react app!</h1>
        );
    }
});
 
ReactDOM.render(<App />, document.getElementById('root')); 
export default App;