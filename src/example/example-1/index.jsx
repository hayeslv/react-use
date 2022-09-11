// 评论
import React from 'react';
import CommentAdd from './CommentAdd';
import CommentList from './CommentList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    // 模拟异步获取数据
    setTimeout(() => {
      const comments = [
        {
          username: 'Tom',
          content: '现在的电影越来越难看了',
          id: Date.now(),
        },
        {
          username: 'JACK',
          content: '为什么现在看啥都要VIP',
          id: Date.now() + 20,
        },
      ];
      this.setState({
        comments,
      });
    }, 1000);
  }

  handleAdd = (comment) => {
    const { comments } = this.state;
    comments.unshift(comment);
    this.setState({
      comments,
    });
  };

  handleDelete = (index) => {
    const { comments } = this.state;
    comments.splice(index, 1);
    this.setState({ comments });
  };

  render() {
    const { comments } = this.state;
    return (
      <div>
        <header className='site-header jumbotron'>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>欢迎来到吐槽大会</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd add={this.handleAdd}></CommentAdd>
          <CommentList comments={comments} delete={this.handleDelete}></CommentList>
        </div>
      </div>
    );
  }
}

export default App;
