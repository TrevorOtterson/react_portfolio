import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div style={{ width: '100%', height: '100%', margin: 'auto' }}>
                <Grid className='landing-grid' style={{overflow: 'auto'}}>
                    <Cell col={12}>
                        <div className='banner-text'>
                            <h1>About Trevor</h1>
                        <hr/>
                        <p className='bio-text'>                        
                        Trevor Otterson is 23 years old and grew up in Orem, Utah. He is currently a Sophomore in Computer Science at Utah Valley Univiersity. Trevor is wishing to do software engineering after graduation. Trevor has many hobbies including: snowboarding, skateboarding, drawing, jewelry designing, rock climbing, and camping. An aspiring entreprnuer creating his own jewelry brand called <a className='blur-link' href='http://www.blurjewelry.com' title='Blur Jewelry' target='_blank' rel='noopener noreferrer'>Blur Designs</a>, and working towards a career in software. Trevor Comes from a family of 7 kids, born and raised in Utah, and spends a lot of time being with family. With a new growing passion for computer science, this website reflects some of his accomplishments and current projects he is working on.
                        </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;