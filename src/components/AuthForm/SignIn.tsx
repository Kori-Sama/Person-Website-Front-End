import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { LoginAPI } from '../../request/api';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function SignIn() {
    const navigate = useNavigate();
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
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

        let loginAPIRes = await LoginAPI({
            username: username,
            password: password,
        })

        if (loginAPIRes.code === 200) {

            navigate("/");
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