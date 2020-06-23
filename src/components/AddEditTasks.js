import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { DatePicker } from 'antd';
import { Layout } from 'antd';

const { Content } = Layout;

export default function AddEditTasks(props) {

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };

    
        const onFinish = values => {
          console.log('Success:', values);
        };
  
      
        const onFinishFailed = errorInfo => {
          console.log('Failed:', errorInfo);
        };

    return (
      <Content style={{ padding: '0 50px' }}>
          <DatePicker />
             <Form
            
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >

            {
                props.tasksOfDay.map((tasks, index) => 
                    
                    <Form.Item
                      label={index+'x'}
                      name={index}
                      rules={[{ required: false }]}
                    >

                  <Input />
                        </Form.Item>
                  )
            }
            

            </Form>
            </Content>
    )
}
