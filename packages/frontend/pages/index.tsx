import { Container, Typography, Box, Button } from '@material-ui/core/'
import Head from 'next/head'
import React from 'react'

import styles from '../styles/Home.module.css'

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Squad Statistic | Home</title>
      </Head>

      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Hello NextJs with Material UI
          </Typography>
          <Button variant="contained" color="primary">
            Click me
          </Button>
        </Box>
      </Container>
    </div>
  )
}
