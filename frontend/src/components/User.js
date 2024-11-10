import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Paper, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function User() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);
    const classes = useStyles();

    const handleClick = (e) => {
        e.preventDefault();
        const user = { name, email, password };
        console.log(user);
        fetch('http://localhost:8080/user/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        }).then((response) => {
            if (response.ok) {
                alert('Form submitted successfully');
                // Optionally clear form fields here
                setName('');
                setEmail('');
                setPassword('');
            } else {
                alert('Submission failed');
            }
        });
    };

    useEffect(() => {
        fetch('http://localhost:8080/user/getAll')
            .then((res) => res.json())
            .then((result) => {
                setUsers(result);
            });
    }, []);

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: 'blue' }}>
                    <u>Add User</u>
                </h1>

                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        id="outlined-basic"
                        label="User Name"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="User email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="User password"
                        variant="outlined"
                        fullWidth
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleClick}
                    >
                        Submit
                    </Button>
                </form>
            </Paper>
            <h1>Users</h1>

            <Paper elevation={3} style={paperStyle}>
                {users.map((user) => (
                    <Paper
                        elevation={6}
                        style={{ margin: '10px', padding: '15px', textAlign: 'left' }}
                        key={user.id}
                    >
                        Id: {user.id}
                        <br />
                        Name: {user.name}
                        <br />
                        Email: {user.email}
                        <br />
                        Password: {user.password}
                    </Paper>
                ))}
            </Paper>
        </Container>
    );
}

