import * as yup from 'yup';
import { useState } from 'react';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountBox from '@mui/icons-material/AccountBox';
import EmailRounded from '@mui/icons-material/EmailRounded';
import PasswordRounded from '@mui/icons-material/PasswordRounded';
import PasswordOutlined from '@mui/icons-material/PasswordOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import {useTranslations} from 'next-intl';

export default function ValidateForm() {

  const t = useTranslations('UserRegistrationPage');
  const validation = useTranslations('ValidationMessages');

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, t('name') + ': ' + validation("must_be_at_least_3_characters"))
      .max(25, t('name') + ': ' + validation("must_be_at_most_25_characters"))
      .required(t('name') + ' - ' + validation("is_required")),
    email: yup
      .string()
      .email(validation('valid_email'))
      .required(t('email') + ' - ' + validation("is_required")),
    password: yup
      .string()
      .min(8, validation("password_must_be_longer_than_8_characters"))
      .max(25)
      .required(t('password') + ' - ' + validation("is_required"))
      .matches(/^(?=.{8,})/, validation("must_contain_8_characters"))
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])/,
          validation("must_contain_one_uppercase_one_lowercase")
        )
        .matches(
          /^(?=.*[!@#\$%\^&\*])/,
          validation("must_contain_one_special_case_character")
        )
        .matches(/^(?=.{6,20}$)\D*\d/, validation("must_contain_one_number")),
    passwordConfirmation: yup
      .string()
      .required(validation("pls_retype_your_password"))
      .oneOf([yup.ref('password')], validation("passwords_do_not_match"))
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertContent, setAlertContent] = useState('');
  const [formContent, setFormContent] = useState('');
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
      setShowAlert(true);
      setAlertContent(validation("form_submitted_success"));
      setFormContent(JSON.stringify(values, null, 3));
    },
  });

  return (
    <>
    { showAlert ?
        
        <>
          <Alert
              severity="success"
              variant="filled"
              sx={{ width: '100%', marginBottom: '10px' }}
          >
            {alertContent}
          </Alert>
          <Alert
              severity="info"
              variant="filled"
              sx={{ width: '100%', marginBottom: '40px' }}
          >
            <pre>{formContent}</pre>
          </Alert>
        </>
      : <></>
    }

    <Grid container direction='column'>
      <form onSubmit={formik.handleSubmit}>
        
        <Box>
          <TextField
            autoComplete='off'
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
              )
            }}
          />
        </Box>

        <Box sx={{mt:3}}>
          <TextField
            autoComplete='off'
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
            autoComplete='off'
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
            autoComplete='off'
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
          <Button color="success" variant="contained" fullWidth type="submit">
            <CheckCircleOutlineOutlinedIcon/> &nbsp;
            {t('submit')}
          </Button>
        </Box>
      
      </form>
    </Grid>
    </>
  );
};

