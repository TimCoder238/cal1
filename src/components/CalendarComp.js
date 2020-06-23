import React, { useState } from 'react'
import { Calendar, Alert } from 'antd';
import moment from 'moment';
// import Alert from './Alert'

import { Layout } from 'antd';

const { Content } = Layout;


export default function CalendarComp() {


    const [value, setValue]  = useState(moment('2017-01-25'));
    const [ selectedValue, setSelectedValue ] = useState(moment('2017-01-25'));
  
    const onPanelChange = (val, mode) => {
        console.log(val.format('YYYY-MM-DD'), mode);
        setValue(val => val)
      }

      const onSelect = val => {
        setValue(() => val)
        setSelectedValue(() => val)
      };

    //   const onChange = val => {
    //     console.log(val);
          
    //     setValue(val => moment(val._i))
    //     setSelectedValue(val => moment(val._i))
    //     console.log(selectedValue);
        
    //   };

    return (
        <Content style={{ padding: '0 50px' }}>
            <h1>Calendar</h1>
            
            <Alert
                message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
            />
            <Calendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />
        </Content>
    )
}
