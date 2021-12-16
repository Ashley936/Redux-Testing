import React from "react";
import CommentArea from "components/CommentArea";
import CommentList from "components/CommentList";

class App extends React.Component{
    render() {
        return (
            <div>
                <CommentArea />
                <CommentList />
            </div>
        )
    }
}

export default App;