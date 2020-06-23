import React from 'react'
import { DatePicker } from 'antd';
import { Select } from 'antd';
import { Input } from 'antd';
import { List, Typography, Divider } from 'antd';
import { Pagination } from 'antd';
const { Search } = Input;
const { Option } = Select;

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

export default function ListAllTasks() {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
      }
    return (
        <div>
            <DatePicker />
            <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />

            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>

            <Divider orientation="left">Large Size</Divider>
            <List
                size="large"
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
            />

            <Pagination defaultCurrent={1} total={50} />
        </div>
    )
}
