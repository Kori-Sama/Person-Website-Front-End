
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function NavBar() {

    const navigate = useNavigate();
    const handleHome = () => { navigate("/") };
    const handleBlog = () => { navigate("/blog") };
    const handleProject = () => { navigate("/project") };
    const handleLogin = () => { navigate("/login") };

    return (
        <Stack direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}>
            <Button variant="text"
                onClick={handleHome}
                sx={{ fontSize: 25 }}>Home</Button>
            <Button variant="text"
                onClick={handleBlog}
                sx={{ fontSize: 25 }}>Blog</Button>
            <Button variant="text"
                onClick={handleProject}
                sx={{ fontSize: 25 }}>Project</Button>
            <Button variant="contained"
                onClick={handleLogin}
                sx={{ fontSize: 25 }}>Login</Button>
        </Stack>
    );
}