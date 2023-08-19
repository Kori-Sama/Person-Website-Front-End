import { useState } from 'react';
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


export default function SignIn() {
    const { loginStore } = useStore;
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
            await loginStore.getTokenAsync({
                username: username,
                password: password,
            })
            navigate("/");
        } catch (e) {
            setErrMsg("Fail to login")
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
                        textAlign: 'center'
                    }}
                >
                    <Typography component="h1" variant="h5">
                        KoriのWebsite
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            error={!isValid}
                            fullWidth
                            id="username"
                            label={isValid ? "Username" : errMsg}
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            error={!isValid}
                            fullWidth
                            name="password"
                            label={isValid ? "Password" : errMsg}
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            size='large'
                            sx={{ mt: 3, mb: 2, width: 160 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}