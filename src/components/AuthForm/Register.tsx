import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useStore } from '../../store';

const defaultTheme = createTheme();

const USER_REGEX = /^[a-zA-z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^[\w_-]{6,16}$/;

export default function Register() {

    const { registerStore } = useStore;

    const navigate = useNavigate();

    const [errMsg, setErrMsg] = useState('');

    const [isValid, setValid] = useState(true);



    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const username = data.get('username') + "";
        const password = data.get('password') + "";

        if (username === '' || password === '') {
            setValid(false);
            setErrMsg("Value can't be null")
            return;
        }

        if (!USER_REGEX.test(username) || !PWD_REGEX.test(password)) {
            setValid(false);
            setErrMsg("Invalid username or password")
            return;
        }

        try {
            await registerStore.getTokenAsync({
                username: username,
                password: password,
            })
            if (registerStore.status === 2001) {
                setValid(false);
                setErrMsg(registerStore.data);
            } else {
                navigate("/");
            }

        } catch {
            setValid(false);
            setErrMsg("Fail to sign up");
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    error={!isValid}
                                    fullWidth
                                    id="username"
                                    label={isValid ? "Username" : errMsg}
                                    name="username"
                                    autoComplete="username"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    error={!isValid}
                                    fullWidth
                                    name="password"
                                    label={isValid ? "Password" : errMsg}
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2, width: 160 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container >
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );

};