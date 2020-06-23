import React, { useState } from 'react';
import CalendarComp from './components/CalendarComp'
import AddEditTasks from './components/AddEditTasks'
import ListAllTasks from './components/ListAllTasks'

import 'antd/dist/antd.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  const [tasksOfDay, settasksOfDay] = useState(Array(18).fill(0))

  console.log(tasksOfDay);
  


  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1"><Link to="/">Calendar</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/AddTasks">Add Tasks</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/ListTasks">Show Tasks</Link></Menu.Item>
          </Menu>
        
        
        </Header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <CalendarComp />
          </Route>
          <Route path="/AddTasks">
            <AddEditTasks tasksOfDay={tasksOfDay}/>
          </Route>
          <Route path="/ListTasks">
          <ListAllTasks />
          </Route>
        </Switch>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>,
    </Router>
  );
}

export default App;
