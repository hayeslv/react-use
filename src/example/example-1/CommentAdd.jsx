import React from 'react';
import PropTypes from 'prop-types';

class CommentAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      content: '',
    };
  }

  changeUsername = (event) => {
    console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  };

  changeContent = (event) => {
    this.setState({
      content: event.target.value,
    });
  };

  handleSubmit = () => {
    const { add } = this.props;
    const { username, content } = this.state;
    add({ username, content });
    this.setState({
      username: '',
      content: '',
    });
  };

  render() {
    return (
      <div className="col-md-4">
        <form className='form-horizontal'>
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className='form-control' placeholder='用户名'
              value={this.state.username}
              onChange={this.changeUsername} />
          </div>
          <div className="form-group">
            <label>吐槽内容</label>
            <textarea className='form-control' rows="6" placeholder="吐槽内容"
              value={this.state.content} onChange={this.changeContent} ></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type='button' className='btn btn-default pull-right' onClick={this.handleSubmit}>提交</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

CommentAdd.propTypes = {
  add: PropTypes.func.isRequired,
};

export default CommentAdd;
