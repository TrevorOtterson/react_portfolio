import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText } from 'react-mdl';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className='projects-grid'>

                    {/* employee directory */}
                    <Grid container spacing={1}>
                        <Grid container item xs={6} spacing={3}>
                            <Card shadow={5} style={{ minWidth: '350', margin: '20px' }}>
                                <CardTitle style={{ color: 'black', height: '150px', background: 'linear-gradient(to top, white, #56B4D3, #348F50) center / cover' }}>Employee Directory</CardTitle>
                                <CardText style={{ height: '100px', overflow: 'auto' }}>
                                    Created an employee directory with React. This app breaks up the application's UI into components, manage component state, and respond to user events. It sorts employees by name and assigns them each a picture.
                            </CardText>
                                <CardActions border>
                                    <Button href='https://github.com/TrevorOtterson/employee_directory' colored ripple>Github</Button>
                                    <Button colored ripple>Website</Button>
                                </CardActions>
                                <CardMenu style={{ color: 'black' }}>
                                </CardMenu>
                            </Card>

                            {/* burger logger */}
                        <Card shadow={5} style={{ minWidth: '350', margin: '20px' }}>
                            <CardTitle style={{ color: 'black', height: '150px', background: 'linear-gradient(to top, white, #56B4D3, #348F50) center / cover' }}>Burger Logger</CardTitle>
                            <CardText style={{ height: '100px', overflow: 'auto' }}>
                                This application allows the user to sort burger data if they've eaten the burger or not. The user can add in burgers into the database and can delete them from the database as well from the application.
                    </CardText>
                            <CardActions border>
                                <Button href='https://github.com/TrevorOtterson/burger_logger' colored ripple>Github</Button>
                                <Button href="https://thawing-eyrie-87269.herokuapp.com/" colored ripple>Website</Button>
                            </CardActions>
                            <CardMenu style={{ color: 'black' }}>
                            </CardMenu>
                        </Card>

                        {/* google books */}
                    <Card shadow={5} style={{ minWidth: '350', margin: '20px' }}>
                            <CardTitle style={{ color: 'black', height: '150px', background: 'linear-gradient(to top, white, #56B4D3, #348F50) center / cover' }}>Google Books</CardTitle>
                            <CardText style={{ height: '100px', overflow: 'auto' }}>
                                This application allows the user to search, and save book titles and descriptions to their profile. It is a single page react application and uses a google book API.
                    </CardText>
                            <CardActions border>
                                <Button colored ripple>Github</Button>
                                <Button colored ripple>Website</Button>
                            </CardActions>
                            <CardMenu style={{ color: 'black' }}>
                            </CardMenu>
                        </Card>

                        </Grid>
                        <Grid container item xs={6} spacing={3}>
                            
                            {/* note taker */}
                        <Card shadow={5} style={{ minWidth: '350', margin: '20px' }}>
                            <CardTitle style={{ color: 'black', height: '150px', background: 'linear-gradient(to top, white, #56B4D3, #348F50) center / cover' }}>Note Taker</CardTitle>
                            <CardText style={{ height: '100px', overflow: 'auto' }}>
                                This application was created to help people organize information, creating and saving data into a database, and allowing the user to delete notes when needed easily.
                                Application allows users to create and save notes, view previously saved notes, and delete previously saved notes.
                    </CardText>
                            <CardActions border>
                                <Button href='https://github.com/TrevorOtterson/note_taker' colored ripple>Github</Button>
                                <Button href="https://fast-stream-99918.herokuapp.com/" colored ripple>Website</Button>
                            </CardActions>
                            <CardMenu style={{ color: 'black' }}>
                            </CardMenu>
                        </Card>

                        {/* fitness tracker */}
                        <Card shadow={5} style={{ minWidth: '350', margin: '20px' }}>
                            <CardTitle style={{ color: 'black', height: '150px', background: 'linear-gradient(to top, white, #56B4D3, #348F50) center / cover' }}>Fitness Tracker</CardTitle>
                            <CardText style={{ height: '100px', overflow: 'auto' }}>
                                Creates and tracks daily workouts. User is able to log multiple exercises in a workout on a given day. Allows user to track the name, type, weight, sets, reps, and duration of exercise.
                                If the exercise is a cardio exercise, tracks distance traveled.
                    </CardText>
                            <CardActions border>
                                <Button href='https://github.com/TrevorOtterson/fitness_tracker' colored ripple>Github</Button>
                                <Button href="https://still-caverns-76274.herokuapp.com/" colored ripple>Website</Button>
                            </CardActions>
                            <CardMenu style={{ color: 'black' }}>
                            </CardMenu>
                        </Card>

                        {/* budget tracker */}
                        <Card shadow={5} style={{ minWidth: '350', margin: '20px' }}>
                            <CardTitle style={{ color: 'black', height: '150px', background: 'linear-gradient(to top, white, #56B4D3, #348F50) center / cover' }}>Budget Tracker</CardTitle>
                            <CardText style={{ height: '100px', overflow: 'auto' }}>
                                This is my first progressive web application. This app allows the user to add funds into their database, subtract funds, and label all of their transactions. It creates a graph with all
                                the new data so the user can visually see how they spend their money. It runs offline using a service worker and can be downloaded as an PWA on mobile devices.
                    </CardText>
                            <CardActions border>
                                <Button href='https://github.com/TrevorOtterson/budget_tracker' colored ripple>Github</Button>
                                <Button href="https://thawing-meadow-47918.herokuapp.com/" colored ripple>Website</Button>
                            </CardActions>
                            <CardMenu style={{ color: 'black' }}>
                            </CardMenu>
                        </Card>

                        </Grid>
                    </Grid>

                </div>
            )
        }

        else if (this.state.activeTab === 1) {
            return (
                <div className='projects-grid'>
                    {/* Project 1 */}
                    <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                    <Card shadow={5} style={{ minWidth: '350', margin: '20px' }}>
                            <CardTitle style={{ color: 'black', height: '150px', background: 'linear-gradient(to top, white, #56B4D3, #348F50) center / cover' }}>Papyromancy</CardTitle>
                            <CardText style={{ height: '100px', overflow: 'auto' }}>
                                Allows anyone to convert their currency to any another countries currency to see the actual exchange rate in real time.
                    </CardText>
                            <CardActions border>
                                <Button href='https://github.com/dylandewey/Papyromancy' colored ripple>Github</Button>
                                <Button href='https://dylandewey.github.io/Papyromancy/' colored ripple>Website</Button>
                            </CardActions>
                            <CardMenu style={{ color: 'black' }}>
                            </CardMenu>
                        </Card>

                        {/* Project 2 */}
                        <Card shadow={5} style={{ minWidth: '350', margin: '20px' }}>
                            <CardTitle style={{ color: 'black', height: '150px', background: 'linear-gradient(to top, white, #56B4D3, #348F50) center / cover' }}>League Manager</CardTitle>
                            <CardText style={{ height: '100px', overflow: 'auto' }}>
                                This program is a user inputed database that anyone can access to see their sports team data. This includes athletes,
                                coaches, and parent data. This helps keep everyone on the team more organized and informed.
                    </CardText>
                            <CardActions border>
                                <Button href='https://github.com/dgr993/League_Manager' colored ripple>Github</Button>
                                <Button href='https://leaguemanager01.herokuapp.com/' colored ripple>Website</Button>
                            </CardActions>
                            <CardMenu style={{ color: 'black' }}>
                            </CardMenu>
                        </Card>

                        {/* Project 3 */}
                        <Card shadow={5} style={{ minWidth: '350', margin: '20px' }}>
                            <CardTitle style={{ color: 'black', height: '150px', background: 'linear-gradient(to top, white, #56B4D3, #348F50) center / cover' }}>Hang</CardTitle>
                            <CardText style={{ height: '100px', overflow: 'auto' }}>
                                This is a social media for people looking for other people to do hobbies/ sports with. Rather than a typical dating
                                app, this app connects people in a friendlier setting and hopefully creates longer connections with individuals. You
                                are able to select skill level and hobby/ sport data to tailor your matches better.
                    </CardText>
                            <CardActions border>
                                <Button href='https://github.com/TrevorOtterson/hang' colored ripple>Github</Button>
                                <Button colored ripple>Website</Button>
                            </CardActions>
                            <CardMenu style={{ color: 'black' }}>
                            </CardMenu>
                        </Card>
                    </Grid>
                    </Grid>
                </div>
            )
        }
    }

    render() {
        return (
            <div className='category-tabs' style={{ width: '100%', height: '100%', margin: 'auto' }}>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Individual Projects</Tab>
                    <Tab>Group Projects</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className='content'>{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Portfolio;