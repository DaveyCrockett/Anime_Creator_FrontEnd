import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import React from 'react';

const { TextArea } = Input;

const CommentList = ({ comments, deleteComment, count, incrementMe, incrementMe2, count2 }) => (
    <div>
      
    <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <div><Comment {...props}/><button type="button" onClick={() => deleteComment(props, comments)}>Delete</button><button onClick={incrementMe}>Likes: {count}</button><button onClick={incrementMe2}>Dislikes: {count2}</button></div>}
  />
    </div>
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

class Comments extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
    count: 0,
    count2: 0,
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          ...this.state.comments,
          {
            author: 'Han Solo',
            avatar: '',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
        ],
      });
    }, 1000);
  };

  incrementMe = () => {
    console.log('add likes')
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  incrementMe2 = () => {
    console.log('add likes')
    let newCount = this.state.count2+ 1
    this.setState({
      count2: newCount
    })
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  
    deleteComment = (props, comments) => {
      debugger
      console.log(props)
      for(let index = 0; index < comments.length; index++){
        if(comments[index] === props){
          const newComments = comments.splice(comments[index], index);
          this.setState({
            comments: newComments
          });
        }
      }
      
    
  }

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <>
        {comments.length > 0 && <CommentList incrementMe={this.incrementMe} incrementMe2={this.incrementMe2} count2={this.state.count2} count={this.state.count} comments={comments} deleteComment={this.deleteComment.bind(this)} />}
        <Comment
          avatar={
            <Avatar
              src=""
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </>
    );
  }
}
 
export default Comments;