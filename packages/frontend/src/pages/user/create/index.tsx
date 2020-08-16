import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Paper,
  LinearProgress,
  TextField,
  InputAdornment,
  IconButton,
  Link,
} from '@material-ui/core/';
import {
  AccountCircle,
  Email,
  Visibility,
  VisibilityOff,
  Lock,
} from '@material-ui/icons';
import Api from '@squad_statistics_monorepo/axios-config';
import { Formik, Form, FormikProps } from 'formik';
import Head from 'next/head';
import React from 'react';

import useStyles from './styles';
import userSchema from './yupValidationSchema';

interface ISignUpForm {
  username: string;
  password: string;
  email: string;
}

const Cadastrar: React.FC = () => {
  const classes = useStyles();

  const [passwordIsVisible, setPasswordIsVisible] = React.useState(false);

  return (
    <>
      <Head>
        <title>Squad Statistic | Cadastrar-se</title>
      </Head>
      <Container maxWidth="md" className={classes.content_page}>
        <Grid
          spacing={4}
          container
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <img width="300" src="logo_transparente.png" alt="" />
          </Grid>
          <Grid item>
            <Paper className={classes.paper_form}>
              <Box p={3}>
                <Box m={2}>
                  <Typography variant="h6" align="center">
                    Cadastrar-se
                  </Typography>
                </Box>
                <Formik
                  initialValues={{
                    username: '',
                    password: '',
                    email: '',
                  }}
                  validationSchema={userSchema}
                  onSubmit={async (values, { setFieldError }) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    await Api.post('/register', {
                      ...values,
                    })
                      .then((response) => {
                        console.log({ response });
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}
                >
                  {(props: FormikProps<ISignUpForm>) => {
                    const {
                      submitForm,
                      values,
                      touched,
                      errors,
                      handleBlur,
                      handleChange,
                      isSubmitting,
                    } = props;
                    return (
                      <Form>
                        <Container maxWidth="xs">
                          <Grid
                            container
                            justify="center"
                            direction="row"
                            spacing={4}
                          >
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                              <TextField
                                fullWidth
                                name="username"
                                label="Username"
                                id="username"
                                placeholder="Digite seu username"
                                value={values.username}
                                type="text"
                                variant="outlined"
                                helperText={
                                  errors.username && touched.username
                                    ? errors.username
                                    : ''
                                }
                                error={!!(errors.username && touched.username)}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                InputProps={{
                                  className: classes.fieldTextInputs,
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <AccountCircle color="disabled" />
                                    </InputAdornment>
                                  ),
                                }}
                                InputLabelProps={{
                                  classes: {
                                    root: classes.labelRoot,
                                  },
                                }}
                              ></TextField>
                            </Grid>

                            <Grid item lg={12} md={12} sm={12} xs={12}>
                              <TextField
                                fullWidth
                                name="email"
                                placeholder="Digite aqui o seu email"
                                id="email"
                                label="Email"
                                value={values.email}
                                type="email"
                                variant="outlined"
                                helperText={
                                  errors.email && touched.email
                                    ? errors.email
                                    : ''
                                }
                                error={!!(errors.email && touched.email)}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                InputProps={{
                                  className: classes.fieldTextInputs,
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <Email color="disabled" />
                                    </InputAdornment>
                                  ),
                                }}
                                InputLabelProps={{
                                  classes: {
                                    root: classes.labelRoot,
                                  },
                                }}
                              />
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                              <TextField
                                fullWidth
                                name="password"
                                placeholder="Digite aqui sua senha"
                                id="password"
                                label="Password"
                                value={values.password}
                                type={passwordIsVisible ? 'text' : 'password'}
                                variant="outlined"
                                helperText={
                                  errors.password && touched.password
                                    ? errors.password
                                    : ''
                                }
                                error={!!(errors.password && touched.password)}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                InputProps={{
                                  className: classes.fieldTextInputs,
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <Lock color="disabled" />
                                    </InputAdornment>
                                  ),
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        onClick={() => {
                                          setPasswordIsVisible(
                                            !passwordIsVisible
                                          );
                                        }}
                                        edge="end"
                                      >
                                        {passwordIsVisible ? (
                                          <Visibility />
                                        ) : (
                                          <VisibilityOff />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  ),
                                }}
                                InputLabelProps={{
                                  classes: {
                                    root: classes.labelRoot,
                                  },
                                }}
                              />
                            </Grid>

                            {isSubmitting && (
                              <Grid item lg={12} md={12} sm={12} xs={12}>
                                <LinearProgress />
                              </Grid>
                            )}
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                              <Grid
                                direction="column"
                                container
                                alignItems="center"
                                spacing={3}
                              >
                                <Grid item>
                                  <Button
                                    variant="contained"
                                    className={classes.submitButton}
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                  >
                                    Cadastrar
                                  </Button>
                                </Grid>
                                <Grid item>
                                  <Link href="/entrar" variant="body1">
                                    Entrar
                                  </Link>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Container>
                      </Form>
                    );
                  }}
                </Formik>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Cadastrar;
