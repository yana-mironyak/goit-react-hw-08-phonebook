import css from '../views/views.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux'; 
import { useState } from 'react';
import authOperations from '../redux/auth/authOperations';
import { Box, TextField, Button, FormControl } from '@mui/material';

const RegisterView = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    }

    const onSubmit = data => {
        console.log(data);
        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
        reset();
    }

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
                    label='Name'
                    error={!!errors?.name}
                    helperText={errors?.name ? errors?.namr?.message : null}
                    {...register("name", { required: 'This is required' })}
                    // placeholder="Name"
                    onChange={handleChange} />
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
                    error={!!errors?.password}
                    helperText={errors?.email ? errors?.password?.message : null}
                    {...register("password", { required: 'This is required', minLength: { value: 4, message: 'Min length is 4' } })}
                    type='password'
                    // placeholder="Password"
                    onChange={handleChange} />
                <Button
                    className={css.form__button}
                    type='submit'
                    variant="contained"
                    size="small">
                    LogIn
                </Button>
            </FormControl>
        </Box>
        // <form onSubmit={handleSubmit(onSubmit)}>
    
        //     <input {...register("name", { required: 'This is required' })} placeholder="Login" onChange={handleChange}/>
        //     <p>{errors.name?.message}</p>
        //     <input  {...register("email", { required: 'This is required', pattern: { value: emailValidation, message: 'Check your email' } })} placeholder="Email" onChange={handleChange}/>
        //     <p>{errors.email?.message}</p>
        //     <input {...register("password", { required: 'This is required', minLength: { value: 4, message: 'Min length is 4'} })} type='password' placeholder="Password" onChange={handleChange}/>
        //     <p>{errors.password?.message}</p>
      
        //     <input type="submit" />
        // </form>
    );
}

export default RegisterView;