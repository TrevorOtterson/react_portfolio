import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import trevor from '../trevor.JPG'

class Landing extends Component {
    render() {
        return (
            <div style={{ height: 'auto', width: '100%' }}>
                <Grid className='landing-grid' style={{overflow: 'auto'}}>
                    <Cell col={12} style={{overflow: 'auto'}}>
                        <img
                            src={trevor}
                            alt='Trevor Otterson'
                            className='self-img'
                        />
                        <div className='banner-text'>
                            <h1>Software Engineer</h1>
                        <hr/>
                        <p>JavaScript | NodeJS | Python | SQL | MongoDB | REST | React</p>
                        <div className='social-links'>
                            
                            {/* GitHub */}
                            <a href='https://github.com/TrevorOtterson' title="Github" rel='noopener noreferrer' target='_blank'>
                                <i className='fa fa-github fa-1x' aria-hidden='true'/>
                            </a>

                            {/* LinkedIn */}
                            <a href='https://www.linkedin.com/in/trevor-otterson-667a34149/' title="Linkedin" rel='noopener noreferrer' target='_blank'>
                                <i className='fa fa-linkedin fa-1x' aria-hidden='true'/>
                            </a>

                            {/* Instagram */}
                            <a href='https://www.instagram.com/trevorotterson/?hl=en' title="Instagram" rel='noopener noreferrer' target='_blank'>
                                <i className='fa fa-instagram fa-1x' aria-hidden='true'/>
                            </a>

                            {/* Facebook */}
                            <a href='https://www.facebook.com/trevor.otterson.9' title="Facebook" rel='noopener noreferrer' target='_blank'>
                                <i className='fa fa-facebook fa-1x' aria-hidden='true'/>
                            </a>

                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;