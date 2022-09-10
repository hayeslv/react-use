import React from 'react';
import PropTypes from 'prop-types';
import './comment-list.css';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { comments } = this.props;
    const display = comments.length ? 'none' : 'block';

    return (
      <div className='col-md-8'>
        <h3 className="reply">吐槽大会列表</h3>
        <h2 style={{ display: display }}>暂无评论</h2>
        <ul className='list-group'>
          {
            comments.map((comment, index) => (
              <li key={index} className='list-group-item'>
                <div className="handle">
                  <a href="javascript;" onClick={() => this.deleteComment(comment.username, index)}>删除</a>
                </div>
                <p className="user">
                  <span>{comment.username}</span>
                  <span>说：</span>
                </p>
                <p className='centence'>{comment.content}</p>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  delete: PropTypes.func.isRequired,
};

export default CommentList;
