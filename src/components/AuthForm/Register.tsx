import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const USER_REGEX = /^[a-zA-z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^[\w_-]{6,16}$/;

export default function Register() {

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // const [userLabel, setUserLabel] = useState("Username");
    // const [pwdLabel, setPwdLabel] = useState("Password");

    const [isValid, setValid] = useState(true);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
    }, [pwd])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (!validName || !validPwd) {
            setValid(false);
            setErrMsg('Invalid username or password');
            return;
        }


        setValid(true);
        setSuccess(true)
        console.log({
            username: data.get('username'),
            password: data.get('password'),
        });
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
                                    onChange={(e) => setUser(e.target.value)}
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
                                    onChange={(e) => setPwd(e.target.value)}
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
}