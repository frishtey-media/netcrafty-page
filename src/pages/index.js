import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Button, Container, Divider, Grid, Stack, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import Footer from '@/components/footer';
import ContactPopup from '@/components/ContactPopup';
import { useEffect, useState } from 'react';
import CalendlyWidget2 from '@/components/CalendlyWidget2';
import GoogleReviews from '@/components/GoogleReviews';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      handleSignupOpen();
    }, 2500);
  }, []);

  function handleSignupOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Head>
        <title>Netcrafty</title>
        <meta name="description" content="Trusted global software company offering custom IT solutions and digital/social marketing. Build your team with us for success!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/title-logo.png" />
      </Head>

      <div className="slider-area slider-style-8 header-height bKrkJw">
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
                  <h5 className='text-black'>Ready To Scale Your <span className='text-blue fw-bold'>Business?</span></h5>
                  <h1 className='fw-bold text-black' style={{ lineHeight: '1.5' }}>We&#39;ll Manage Your <span className='text-blue'>Advertising Campaigns</span> For You to Yield Best Results!</h1>
                  {/* <Button size='large' className="btn-default" onClick={handleSignupOpen}>
                    <h3 style={{ marginBottom: '0rem' }}>Sign Up</h3>
                  </Button> */}
                  <Button variant='contained' size='large' sx={{
                    backgroundColor: '#05689F',
                    textTransform: 'none',
                    px: 10,
                    py: 3.5,
                    '&:hover': {
                      backgroundColor: "#05689F"
                    }
                  }}
                    onClick={handleSignupOpen}
                  >
                    <Typography variant='body1'>
                      Book a Free Stategy Call
                    </Typography>
                  </Button>
                </Stack>
              </div>
            </div>
          </Container>
        </div>
      </div >

      <Container sx={{ justifyContent: 'center', alignItems: "center", textAlign: 'center' }}>
        <Grid container alignItems={"center"} justifyContent={"center"} textAlign={"start"}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1 className='fw-bold'>Elevate Your Brand with <br /> <span className='text-blue'>Digital Mastery</span>​</h1>
            <br />
            <h5>
              Combining the <span className='text-blue fw-bold'>Science of Sales</span> with the <span className='text-blue fw-bold'>Magic of Marketing</span>
            </h5>
            <br />
            <h5 style={{ lineHeight: '2' }}>
              Welcome to <span className='text-blue fw-bold'>Netcrafty</span>, where innovation meets influence! 🚀<br />
              <span className='text-blue'>Transform</span> your <span className='text-blue'> digital presence</span> and outshine the competition with our cutting-edge <span className='text-blue'>digital marketing solutions.</span><br />
              From captivating content to strategic social media mastery, we’re here to propel your <span className='text-blue'>brand</span> to new <span className='text-blue'>heights</span>.
            </h5>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src='/pic1.png' alt='Netcrafty' style={{ width: '100%', padding: '15%' }} />
          </Grid>
        </Grid>
        <Button onClick={handleSignupOpen} variant='contained' size='large' sx={{
          backgroundColor: '#05689F',
          textTransform: 'none',
          px: 10,
          py: 3.5,
          '&:hover': {
            backgroundColor: "#05689F"
          }
        }}>
          <Typography variant='body1'>
            Book a Free Stategy Call
          </Typography>
        </Button>
      </Container>

      <Toolbar />
      <Toolbar />

      <Container sx={{ justifyContent: 'center', alignItems: "center", textAlign: 'center' }}>
        <Grid container alignItems={"center"} justifyContent={"center"} textAlign={"start"}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src='/pic2.jpg' alt='Netcrafty' style={{ width: '100%', padding: '10%' }} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1 className='fw-bold'>Who we <span className='text-blue'>Are?</span>​</h1>
            <br />
            <br />
            <h5 style={{ lineHeight: '1.25' }}>
              From idea to delivery, <span className='text-blue fw-bold'>Netcrafty</span> is a <span className='text-blue'>Digital Marketing Agency</span> based in India which works with business to create exceptional <span className='text-blue'>results-driven solutions</span>.<br /><br />

              We bridge the gap for <span className='text-blue'>growing business</span> who don’t want to deal with expensive agencies and an in-house Marketing team, but would still like to <span className='text-blue'>grow, develop and succeed</span>.<br /><br />

              We cover the entire <span className='text-blue fw-bold'>digital marketing spectrum</span>.<br /><br />

              We strongly believe that there’s no merit in a ‘one-size-fits-all’ approach when it comes to SEO, content marketing, Performance Marketing or social media.<br /><br />

              If you want clear, honest and tangible results online with the opportunity to learn how they’re achieved then <span className='text-blue fw-bold'>get in touch</span> now to see how we can help. <br /><br />
            </h5>
          </Grid>
        </Grid>
        <br />
        <Button onClick={handleSignupOpen} variant='contained' size='large' sx={{
          backgroundColor: '#05689F',
          textTransform: 'none',
          px: 10,
          py: 3.5,
          '&:hover': {
            backgroundColor: "#05689F"
          }
        }}>
          <Typography variant='body1'>
            Book a Free Stategy Call
          </Typography>
        </Button>
      </Container>

      <Toolbar />
      <Toolbar />

      <Container sx={{ justifyContent: 'center', alignItems: "center", textAlign: 'center' }}>
        <Grid container alignItems={"center"} justifyContent={"center"} textAlign={"start"}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1 className='fw-bold'>What we <span className='text-blue'>Offer?</span>​</h1>
            <br />
            <br />
            <h5 style={{ lineHeight: '1.5' }}>
              We transcend boundaries to elevate your brand’s digital presence. With a diverse suite of services, we bring together innovation, expertise, and passion to propel your business to new heights.
              <br /><br />
              Our Services include:
              <ul style={{ marginTop: '20px' }}>
                <li>Digital Marketing</li>
                <li>Social Media Marketing</li>
                <li>Graphic Designing</li>
                <li>Video Editing</li>
                <li>AdShoot</li>
                <li>Content Marketing</li>
                <li>Search Engine Optimisation</li>
                <li>Digital Consultancy</li>
                <li>Website Design and development</li>
                <li>App Design and development</li>
                <li>Printing</li>
              </ul>
            </h5>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src='/pic3.png' alt='Netcrafty' style={{ width: '100%', padding: '15%' }} />
          </Grid>
        </Grid>
        <br />
        <Button onClick={handleSignupOpen} variant='contained' size='large' sx={{
          backgroundColor: '#05689F',
          textTransform: 'none',
          px: 10,
          py: 3.5,
          '&:hover': {
            backgroundColor: "#05689F"
          }
        }}>
          <Typography variant='body1'>
            Book a Free Stategy Call
          </Typography>
        </Button>
      </Container>

      <Toolbar />
      <Toolbar />

      <Container maxWidth="md" sx={{ justifyContent: 'center', alignItems: "center", textAlign: 'center' }}>
        <h1 className='fw-bold text-center'>Why choose <span className='text-blue'>Us?</span>​</h1>
        <br /><br />

        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <img src='/download.webp' alt='Netcrafty' style={{ width: isMobile ? '50%' : '70%', marginLeft: 'auto', marginRight: 'auto' }} /><br />
            <Typography variant='body1' className='text-center'>
              Expertise that drive results
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <img src='/download-1.webp' alt='Netcrafty' style={{ width: isMobile ? '50%' : '70%', marginLeft: 'auto', marginRight: 'auto' }} /><br />
            <Typography variant='body1' className='text-center'>
              Rapid and Organic Growth
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <img src='/download-2.webp' alt='Netcrafty' style={{ width: isMobile ? '50%' : '70%', marginLeft: 'auto', marginRight: 'auto' }} /><br />
            <Typography variant='body1' className='text-center'>
              Professional Management
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <img src='/download-3.webp' alt='Netcrafty' style={{ width: isMobile ? '50%' : '70%', marginLeft: 'auto', marginRight: 'auto' }} /><br />
            <Typography variant='body1' className='text-center'>
              Niche Metholodologies
            </Typography>
          </Grid>
        </Grid>

        <br /><br />
        <Button onClick={handleSignupOpen} variant='contained' size='large' sx={{
          backgroundColor: '#05689F',
          textTransform: 'none',
          px: 10,
          py: 3.5,
          '&:hover': {
            backgroundColor: "#05689F"
          }
        }}>
          <Typography variant='body1'>
            Book a Free Stategy Call
          </Typography>
        </Button>
      </Container>

      <Toolbar />
      <Toolbar />

      <h1 className='fw-bold text-center'>Book Online Consultation <span className='text-blue'> With Us</span>​</h1>
      <CalendlyWidget2 />

      <Toolbar />

      <h1 className='text-center text-blue fw-bold'>
        Our Awesome Clients
      </h1>

      {/* <Clients /> */}
      <div className="client-slider" >
        <div className="slide-track2">
          <div className="client-slide">
            <img src="/logos/1.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="TCI Immigration" />
          </div>
          <div className="client-slide">
            <img src="/logos/2.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="AVP Immigration" />
          </div>
          <div className="client-slide">
            <img src="/logos/3.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Alpine Education" />
          </div>
          <div className="client-slide">
            <img src="/logos/4.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Lame Salon" />
          </div>
          <div className="client-slide">
            <img src="/logos/5.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Indrani Hospital" />
          </div>
          <div className="client-slide">
            <img src="/logos/6.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Himanshu Advertisers" />
          </div>
          <div className="client-slide">
            <img src="/logos/7.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="P" />
          </div>
          <div className="client-slide">
            <img src="/logos/8.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Joint Emporio" />
          </div>
          <div className="client-slide">
            <img src="/logos/9.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="RG Wealth" />
          </div>
          <div className="client-slide">
            <img src="/logos/10.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Make Easy Job" />
          </div>
          <div className="client-slide">
            <img src="/logos/11.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Vikram Gagan Hospital" />
          </div>
          <div className="client-slide">
            <img src="/logos/12.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Verma Sanitation" />
          </div>
          <div className="client-slide">
            <img src="/logos/13.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Nevatia Diamonds" />
          </div>
          <div className="client-slide">
            <img src="/logos/14.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Innovative Global School" />
          </div>
          <div className="client-slide">
            <img src="/logos/15.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Talk I'll Listen" />
          </div>
          <div className="client-slide">
            <img src="/logos/16.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Enagic Kangen Water" />
          </div>


          <div className="client-slide">
            <img src="/logos/1.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="TCI Immigration" />
          </div>
          <div className="client-slide">
            <img src="/logos/2.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="AVP Immigration" />
          </div>
          <div className="client-slide">
            <img src="/logos/3.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Alpine Education" />
          </div>
          <div className="client-slide">
            <img src="/logos/4.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Lame Salon" />
          </div>
          <div className="client-slide">
            <img src="/logos/5.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Indrani Hospital" />
          </div>
          <div className="client-slide">
            <img src="/logos/6.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Himanshu Advertisers" />
          </div>
          <div className="client-slide">
            <img src="/logos/7.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="P" />
          </div>
          <div className="client-slide">
            <img src="/logos/8.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Joint Emporio" />
          </div>
          <div className="client-slide">
            <img src="/logos/9.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="RG Wealth" />
          </div>
          <div className="client-slide">
            <img src="/logos/10.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Make Easy Job" />
          </div>
          <div className="client-slide">
            <img src="/logos/11.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Vikram Gagan Hospital" />
          </div>
          <div className="client-slide">
            <img src="/logos/12.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Verma Sanitation" />
          </div>
          <div className="client-slide">
            <img src="/logos/13.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Nevatia Diamonds" />
          </div>
          <div className="client-slide">
            <img src="/logos/14.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Innovative Global School" />
          </div>
          <div className="client-slide">
            <img src="/logos/15.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Talk I'll Listen" />
          </div>
          <div className="client-slide">
            <img src="/logos/16.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Enagic Kangen Water" />
          </div>


          <div className="client-slide">
            <img src="/logos/1.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="TCI Immigration" />
          </div>
          <div className="client-slide">
            <img src="/logos/2.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="AVP Immigration" />
          </div>
          <div className="client-slide">
            <img src="/logos/3.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Alpine Education" />
          </div>
          <div className="client-slide">
            <img src="/logos/4.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Lame Salon" />
          </div>
          <div className="client-slide">
            <img src="/logos/5.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Indrani Hospital" />
          </div>
          <div className="client-slide">
            <img src="/logos/6.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Himanshu Advertisers" />
          </div>
          <div className="client-slide">
            <img src="/logos/7.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="P" />
          </div>
          <div className="client-slide">
            <img src="/logos/8.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Joint Emporio" />
          </div>
          <div className="client-slide">
            <img src="/logos/9.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="RG Wealth" />
          </div>
          <div className="client-slide">
            <img src="/logos/10.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Make Easy Job" />
          </div>
          <div className="client-slide">
            <img src="/logos/11.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Vikram Gagan Hospital" />
          </div>
          <div className="client-slide">
            <img src="/logos/12.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Verma Sanitation" />
          </div>
          <div className="client-slide">
            <img src="/logos/13.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Nevatia Diamonds" />
          </div>
          <div className="client-slide">
            <img src="/logos/14.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Innovative Global School" />
          </div>
          <div className="client-slide">
            <img src="/logos/15.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Talk I'll Listen" />
          </div>
          <div className="client-slide">
            <img src="/logos/16.png" alt="Netcrafty" className='align-self-center' data-bs-toggle="tooltip" data-bs-placement="top" title="Enagic Kangen Water" />
          </div>

        </div>
      </div>

      {/* <Container>
        <GoogleReviewsWidget />
      </Container> */}

      <Toolbar />

      <h1 id='testimonials' className='text-center text-blue fw-bold'>
        Some Client Reviews
      </h1>

      <Container>
        <GoogleReviews />
      </Container>

      <Toolbar />
      <Toolbar />

      <ContactPopup open={open} handleClose={handleClose} />

      <Footer />
    </>
  )
}
