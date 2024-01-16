import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Button, Container, Divider, Grid, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import Footer from '@/components/footer'
import ContactPopup from '@/components/ContactPopup'
import { useState } from 'react'
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import CalendlyWidget from '@/components/CalendlyWidget'
import CalendlyWidget2 from '@/components/CalendlyWidget2'
import Clients from '@/components/Clients'
import ClientWidget from '@/components/ClientWidget'

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(false);

  function handleSignupOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Head>
        <title>NetCrafty</title>
        <meta name="description" content="Trusted global software company offering custom IT solutions and digital/social marketing. Build your team with us for success!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/title-logo.png" />
      </Head>

      <div className="slider-area slider-style-8 header-height">
        <div className="single-slide">
          <Container maxWidth="md">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <Stack spacing={4}
                  textAlign={"center"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Link href="/">
                    <Image src="/netc2.png"
                      alt='NetCrafty'
                      width={isMobile ? 250 : 300}
                      height={isMobile ? 83 : 100}
                      style={{
                        display: "flex",
                        marginLeft: "auto",
                        marginRight: "auto"
                      }}
                      priority
                    />
                  </Link>
                  <h5>Ready To Scale Your Business?</h5>
                  <h1 className='fw-bold'>We&#39;ll Manage Your Advertising Campaigns For FREE Until You Get Results!</h1>
                  <Button size='large' className="btn-default" onClick={handleSignupOpen}>
                    <h3 style={{ marginBottom: '0rem' }}>Sign Up</h3>
                  </Button>
                </Stack>
              </div>
            </div>
          </Container>
        </div>
      </div >

      <Toolbar />
      {/* <Divider sx={{ borderColor: '#F8AC23', borderWidth: '2.5px' }} /> */}

      <Container>
        <Stack spacing={4} alignItems={"center"} justifyContent={"center"}>
          <h1 className='text-center text-golden fw-bold'>
            How does it work?
          </h1>
          <h3 className='text-center text-light'>
            Our process is simple...
          </h3>
        </Stack>
        <Toolbar />

        <Stack spacing={10}>
          <Grid container spacing={1} alignItems={"center"} justifyContent={"center"}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <img
                src={"/pic-1.png"}
                style={{
                  width: '60%',
                  display: "flex",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Stack sx={{ height: '100%' }}
                justifyContent={"center"}
              >
                <h3 className='text-golden text-center'>
                  Meta Ad Campaign
                </h3><br />
                <h5 style={{ lineHeight: '1.5' }}>
                  We&#39;ll create, manage and optimise a highly effective ad campaign to drive qualified leads to your customised landing page. We&#39;ll use precise targeting options to find your ideal prospects and make them want to click your ad.
                </h5>
              </Stack>
            </Grid>
          </Grid>

          {
            isMobile ?
              <Grid container spacing={1} alignItems={"center"} justifyContent={"center"}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <img
                    src={"/pic-2.png"}
                    style={{
                      width: '60%',
                      display: "flex",
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Stack sx={{ height: '100%' }}
                    justifyContent={"center"}
                  >
                    <h3 className='text-golden text-center'>
                      Landing Page
                    </h3><br />
                    <h5 style={{ lineHeight: '1.5' }}>
                      We&#39;ll design and build a landing page explicitly engineered for conversions. We&#39;ll align the landing page&#39;s intentions with the ad&#39;s messaging to ensure the prospect flows effortlessly through your sales funnel.
                    </h5>
                  </Stack>
                </Grid>
              </Grid>
              :
              <Grid container spacing={1} alignItems={"center"} justifyContent={"center"}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <Stack sx={{ height: '100%' }}
                    justifyContent={"center"}
                  >
                    <h3 className='text-golden text-center'>
                      Landing Page
                    </h3><br />
                    <h5 style={{ lineHeight: '1.5' }}>
                      We&#39;ll design and build a landing page explicitly engineered for conversions. We&#39;ll align the landing page&#39;s intentions with the ad&#39;s messaging to ensure the prospect flows effortlessly through your sales funnel.
                    </h5>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <img
                    src={"/pic-2.png"}
                    style={{
                      width: '60%',
                      display: "flex",
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                  />
                </Grid>
              </Grid>
          }

          <Grid container spacing={1} alignItems={"center"} justifyContent={"center"}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <img
                src={"/pic-3.png"}
                style={{
                  width: '60%',
                  display: "flex",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Stack sx={{ height: '100%' }}
                justifyContent={"center"}
              >
                <h3 className='text-golden text-center'>
                  Booking System
                </h3><br />
                <h5 style={{ lineHeight: '1.5' }}>
                  We&#39;ll create an automated booking system for your business.<br /><br />
                  A seamless process that allows your prospects to select their own call/appointment time.<br /><br />
                  If you&#39;re an E-commerce brand, we&#39;ll install a product page for prospects to buy from you instantly.
                </h5>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Container>

      <Toolbar />

      <CalendlyWidget2 />

      <Toolbar />
      <Toolbar />

      {/* <Clients /> */}
      <h1 className='text-center text-golden fw-bold'>
        Our Awesome Clients
      </h1>
      <ClientWidget />

      <Toolbar />

      <Container>
        <GoogleReviewsWidget />
      </Container>

      <Toolbar />

      <ContactPopup open={open} handleClose={handleClose} />

      <Footer />
    </>
  )
}
