import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import resume from './resume.pdf';

class App extends Component {
  render() {
    return (
      <div style={{ height: '300px'}}>
        <Layout fixedHeader>
          <Header className='header-color' title='Trevor Otterson' scroll>
            <Navigation>
              <Link id='navbar-link' to='/'>Home</Link>
              <Link id='navbar-link' to='/aboutMe' >About Me</Link>
              <Link id='navbar-link' to='/portfolio' >Portfolio</Link>
              <a href={resume} title='Resume' target='_blank' rel='noopener noreferrer'>Resumé</a>
            </Navigation>
          </Header>
          <Drawer className='drawer-color' title='Trevor Otterson' scroll>
            <Navigation>
              <Link to='/' >Home</Link>
              <Link to='/aboutMe' >About Me</Link>
              <Link to='/portfolio' >Portfolio</Link>
              <a href={resume} title='Resume' target='_blank' rel='noopener noreferrer'>Resumé</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className='page-content' />
            <Main />
          </Content>
        </Layout>
      </div>
    )
  }
}

export default App;