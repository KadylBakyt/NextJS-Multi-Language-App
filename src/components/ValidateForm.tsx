import * as yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountBox from '@mui/icons-material/AccountBox';
import EmailRounded from '@mui/icons-material/EmailRounded';
import PasswordRounded from '@mui/icons-material/PasswordRounded';
import PasswordOutlined from '@mui/icons-material/PasswordOutlined';
import {useTranslations} from 'next-intl';

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, 'name must be at least 3 characters')
    .max(25, 'name must be at most 25 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, "Your password must be longer than 8 characters.")
    .max(25)
    .required('Password is required')
    .matches(/^(?=.{8,})/, "Must Contain 8 Characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])/,
        "Must Contain One Uppercase, One Lowercase"
      )
      .matches(
        /^(?=.*[!@#\$%\^&\*])/,
        "Must Contain One Special Case Character"
      )
      .matches(/^(?=.{6,20}$)\D*\d/, "Must Contain One Number"),
  passwordConfirmation: yup
    .string()
    .required('Please retype your password.')
    .oneOf([yup.ref('password')], 'Your passwords do not match.')
});


export default function ValidateForm() {

  const t = useTranslations('UserRegistrationPage');

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const handleClickShowPasswordConfirmation = () => setShowPasswordConfirmation(!showPasswordConfirmation);
  const handleMouseDownPasswordConfirmation = () => setShowPasswordConfirmation(!showPasswordConfirmation);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Grid container direction='column'>
      <form onSubmit={formik.handleSubmit}>
        
        <Box>
          <TextField
            fullWidth
            id="name"
            name="name"
            label={t('name')}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBox />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{mt:3}}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label={t('email')}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailRounded />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        
        <Box sx={{mt:3}}>
          <TextField
            fullWidth
            id="password"
            name="password"
            label={t('password')}
            value={formik.values.password}
            onChange={formik.handleChange}
            type={showPassword ? "text" : "password"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordRounded />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Box>

        <Box sx={{mt:3}}>
          <TextField
            fullWidth
            id="passwordConfirmation"
            name="passwordConfirmation"
            label={t('password-confirmation')}
            value={formik.values.passwordConfirmation}
            onChange={formik.handleChange}
            type={showPasswordConfirmation ? "text" : "password"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordOutlined />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPasswordConfirmation}
                    onMouseDown={handleMouseDownPasswordConfirmation}
                  >
                    {showPasswordConfirmation ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            onBlur={formik.handleBlur}
            error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
            helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
          />
        </Box>
        
        <Box sx={{mt:3}}>
          <Button color="primary" variant="contained" fullWidth type="submit">
            {t('submit')}
          </Button>
        </Box>
      
      </form>
    </Grid>
  );
};

