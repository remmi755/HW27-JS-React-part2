import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box/Box'
import Typography from "@mui/material/Typography";

function App() {
    return (
        <div className="App">
            <Typography variant="h6" color="blue"><h1>Welcome to Health App!</h1></Typography>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="events" element={<Events/>}/>
                <Route path="doctors" element={<Doctors/>}/>
                <Route path="clients" element={<Clients/>}/>
                <Route path="appointments" element={<Appointments/>}/>
            </Routes>
        </div>

    );
}

function Home() {
    return (
        <>
            <Typography variant="h6" color="blue">
                <main>
                    <h2>Welcome to HOME Page</h2>
                    <p>Make a choice</p>
                </main>
            </Typography>
            <nav>
                <Box>
                    <Button sx={{m: 2}} variant="contained" color="primary"><Link to="/events">
                        <Typography variant="h6" color="white">
                            Events
                        </Typography></Link>
                    </Button>
                    <Button sx={{m: 2}} variant="contained" color="primary"><Link to="/doctors">
                        <Typography variant="h6" color="common.white">
                            Doctors
                        </Typography></Link>
                    </Button>
                    <Button sx={{m: 2}} variant="contained" color="primary"><Link to="/events">
                        <Typography variant="h6" color="common.white">
                            Clients
                        </Typography></Link>
                    </Button>
                    <Button sx={{m: 2}} variant="contained" color="primary"><Link to="/events">
                        <Typography variant="h6" color="common.white">
                            Appointments
                        </Typography></Link>
                    </Button>
                </Box>
            </nav>
        </>
    );
}

function Events() {
    return (
        <>
            <Typography variant="h6" color="purple">
                <main>
                    <h2>EVENTS</h2>
                    <p>Select an event</p>
                </main>
            </Typography>
            <nav>
                <Box>
                    <Button sx={{m: 2}} variant="contained" color="secondary"><Link to="/"><Typography variant="h6"
                                                                                                       color="common.white">
                        Home
                    </Typography></Link></Button>
                    <Button sx={{m: 2}} variant="contained" color="secondary"><Link to="/doctors"><Typography
                        variant="h6" color="common.white">
                        Doctors
                    </Typography></Link></Button>
                    <Button sx={{m: 2}} variant="contained" color="secondary"><Link to="/clients"><Typography
                        variant="h6" color="common.white">
                        Clients
                    </Typography></Link></Button>
                    <Button sx={{m: 2}} variant="contained" color="secondary"><Link to="/appointments"><Typography
                        variant="h6" color="common.white">
                        Appointments
                    </Typography></Link></Button>
                </Box>
            </nav>
        </>
    );
}

function Clients() {
    return (
        <>
            <Typography variant="h6" color="green">
                <main>
                    <h2>CLIENTS!</h2>
                    <p>About our clients</p>
                </main>
            </Typography>
            <nav>
                <Box>
                    <Button sx={{m: 2}} variant="contained" color="primary"><Link to="/"><Typography variant="h6"
                                                                                                     color="common.white">
                        Home
                    </Typography></Link></Button>
                    <Button sx={{m: 2}} variant="contained" color="primary"><Link to="/events"><Typography variant="h6"
                                                                                                           color="common.white">
                        Events
                    </Typography></Link></Button>
                    <Button sx={{m: 2}} variant="contained" color="primary"><Link to="/doctors"><Typography variant="h6"
                                                                                                            color="common.white">
                        Doctors
                    </Typography></Link></Button>
                    <Button sx={{m: 2}} variant="contained" color="primary"><Link to="/appointments"><Typography
                        variant="h6" color="common.white">
                        Appointments
                    </Typography></Link></Button>
                </Box>
            </nav>
        </>
    );
}

function Appointments() {
    return (
        <>
            <Typography variant="h6" color="red">
                <main>
                    <h2>APPOINTMENTS</h2>
                    <p>Check your appointments</p>
                </main>
            </Typography>
            <nav>
                <Box>
                    <Button sx={{m: 2}} variant="contained" color="secondary"><Link to="/"><Typography variant="h6"
                                                                                                       color="common.white">
                        Home
                    </Typography></Link></Button>
                    <Button sx={{m: 2}} variant="contained" color="secondary"><Link to="/events"><Typography
                        variant="h6" color="common.white">
                        Events
                    </Typography></Link></Button>
                    <Button sx={{m: 2}} variant="contained" color="secondary"><Link to="/doctors"><Typography
                        variant="h6" color="common.white">
                        Doctors
                    </Typography></Link></Button>
                    <Button sx={{m: 2}} variant="contained" color="secondary"><Link to="/clients"><Typography
                        variant="h6" color="common.white">
                        Clients
                    </Typography></Link></Button>
                </Box>
            </nav>
        </>
    );
}


function Doctors() {
    return (
        <>
            <Typography variant="h6" color="orange">
                <main>
                    <h2>DOCTORS</h2>
                    <p>
                        Choose a doctor
                    </p>
                </main>
            </Typography>
            <nav>
                <Box>
                    <Button sx={{m: 2}} variant="contained" color="secondary"><Link to="/"><Typography variant="h6"
                                                                                                       color="common.white">
                        Home
                    </Typography></Link></Button>
                    <Button sx={{m: 2}} variant="contained" color="secondary"><Link to="/events"><Typography
                        variant="h6" color="common.white">
                        Events
                    </Typography></Link></Button>
                    <Button sx={{m: 2}} variant="contained" color="secondary"><Link to="/clients"><Typography
                        variant="h6" color="common.white">
                        Clients
                    </Typography></Link></Button>
                    <Button sx={{m: 2}} variant="contained" color="secondary"><Link to="/appointments"><Typography
                        variant="h6" color="common.white">
                        Appointments
                    </Typography></Link></Button>
                </Box>
            </nav>
        </>
    );
}


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.querySelector("#root"),
);


