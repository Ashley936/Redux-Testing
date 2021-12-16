import React from "react";
import { connect } from "react-redux";

class CommentList extends React.Component{
    renderComments() {
        return this.props.comments.map(comment => {
            return (
                <li key={comment}><h2>{ comment }</h2></li>
            )
        })
    }
    render() {
        return (
            <ul>
                {this.renderComments()}
            </ul>
        )
    }
}


const mapStateToProps = (state) => {
    return {comments: state.comments}
}
export default connect(mapStateToProps)(CommentList);