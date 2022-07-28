import Dispatch from "umi"
import { Table, Space, Button, Form, Input } from 'antd';
import {connect} from 'umi'

const index = () => {
  const [form] = Form.useForm();

//   console.log(Todo)
  const onFinish = (values) => {

    dispatch({
       type:'Todo/Todo_add',
       payload:values
    })
  };
  const handleDelete = (event,record)=>{
    console.log("clicking",record)
  }
  const column = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Task',
      dataIndex: 'task',
      key: 'task',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
    
        <Space size="middle">
          <a>{record.task}</a>
          <Button type="primary" >Edit</Button>
          <Button type="primary" onClick={console.log(record.task)}>Delete</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      id: 12,
      task: 'playing..',
      completed: false,
      description: 'undevvrsta.....',
    },
    {
      id: 13,
      task: 'playing..',
      completed: false,
      description: 'undevvrsta.....',
    },
    {
      id: 14,
      task: 'Swiming',
      completed: false,
      description: 'ppppppppppppp',
    },
  ];

  return (
    <div>
      <Form onFinish={onFinish} placeholder="Add Task" size="large" layout="inline">
        <Form.Item name="task" rules={[{ required: true, message: 'Please input task' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
      <br />
      <br />
      <Table columns={column} dataSource={data} />
    </div>
  );
}

// export default connect(( {Todo}:any )=>({
//   Todo
// }))(index)
 
export default index
