import React from 'react';
import { Route, Routes, Link, useParams } from 'react-router-dom';

const messageDetail = [
  { id: '1', title: '消息1', content: '我是消息1' },
  { id: '2', title: '消息2', content: '我是消息2' },
  { id: '3', title: '消息3', content: '我是消息3' },
];
function MessageDetail() {
  const { id } = useParams();
  const item = messageDetail.find(v => v.id === id);
  return (
    <ul>
      <li>id: {item.id}</li>
      <li>title: {item.title}</li>
      <li>content: {item.content}</li>
    </ul>
  );
}

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { id: 1, title: 'vue' },
        { id: 2, title: 'react' },
        { id: 3, title: 'node' },
      ],
    };
  }

  render() {
    const { messages } = this.state;
    const show = messages.length ? 'none' : 'block';

    return (
      <div>
        <p style={{ display: show }}>loading......</p>
        <ul>
          {
            messages.map((message, index) => (
              <li key={index}>
                <Link to={`/home/message/${message.id}`}>{message.title}</Link>
              </li>
            ))
          }
        </ul>
        <Routes>
          <Route path=":id"  element={<MessageDetail />}></Route>
        </Routes>
      </div>
    );
  }
}

export default Message;
