import React from "react";
import { connect } from "react-redux";
import { saveComment } from "actions";

class CommentArea extends React.Component {
  state = { comment: "" };
  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.saveComment(this.state.comment);
          this.setState({ comment: "" });
        }}
      >
        <h4>Add a comment</h4>
        <textarea
          value={this.state.comment}
          onChange={(e) => {
            this.setState({ comment: e.target.value });
          }}
        />
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default connect(null, { saveComment })(CommentArea);
