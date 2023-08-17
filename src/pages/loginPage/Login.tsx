import { Outlet } from 'react-router-dom';
import SideAvatar from '../../components/AuthForm/SideAvatar';
import Stack from '@mui/material/Stack';
import styles from './Login.module.scss';


const Login = () => {
    return (
        <div className={styles.container}>
            <Stack direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={2}>
                <div className={styles.form}>
                    <Outlet />
                </div>
                <div className={styles.img}>
                    <div className={styles.avatar}>
                        <SideAvatar />
                    </div>
                </div>
            </Stack>
        </div>
    )
}

export default Login;