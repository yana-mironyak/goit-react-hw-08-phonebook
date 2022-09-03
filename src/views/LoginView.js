import css from '../views/views.module.css';
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import authOperations from '../redux/auth/authOperations';
import { Box, TextField, Button, FormControl } from '@mui/material';

const LoginView = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const onSubmit = data => {
        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
        reset();
    }; 

    const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    return (
        <Box sx={{ maxWidth: '375px', mx: 'auto' }}
            className={css.form}
            component='form'
            onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth sx={{ gap: 1 }}>
                <TextField
                    className={css.form__field}
                    size="small"
                    variant="standard"
                    type='email'
                    label='Email'
                    error={!!errors?.email}
                    helperText={errors?.email ? errors?.email?.message : null}
                    {...register("email", { required: 'This is required', pattern: { value: emailValidation, message: 'Check your email' } })}
                    placeholder="email@gmail.com"
                    onChange={handleChange} />
                <TextField
                    className={css.form__field}
                    size="small"
                    label="Password"
                    variant="standard"
                    error={!!errors?.email}
                    helperText={errors?.email ? errors?.email?.message : null}
                    {...register("password", { required: 'This is required', minLength: { value: 4, message: 'Min length is 4' } })}
                    type='password'
                    placeholder="Password" onChange={handleChange} />
                <Button
                    className={css.form__button}
                    type='submit'
                    variant="contained"
                    size="small">
                    LogIn
                </Button>
            </FormControl>
        </Box>
    );
}

export default LoginView;