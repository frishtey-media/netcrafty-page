import React from 'react';
import { styled } from '@mui/system';
import { AppBar as MuiAppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Stack } from '@mui/material';
import { List as ListIcon } from 'phosphor-react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
//import MenuIcon from '@mui/icons-material/Menu';

const AppBar = styled(MuiAppBar)`
    background-color: rgba(0,0,0,0.9);
  /* Add your custom styles here */
`;

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [openDrawer, setOpenDrawer] = useState(false);

    const router = useRouter();

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    {isMobile && (
                        <IconButton color="inherit" edge="end" onClick={toggleDrawer}>
                            <ListIcon />
                        </IconButton>
                    )}

                    {
                        isMobile ?
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <Link href="/">
                                    <Image src="/netc2.png"
                                        alt='NetCrafty'
                                        width={180}
                                        height={50}
                                        style={{
                                            display: "flex",
                                            marginLeft: "auto",
                                            marginRight: "auto"
                                        }}
                                        priority
                                    />
                                </Link>
                            </Typography>
                            :
                            <Typography variant="h6" component="div" sx={{ flexGrow: 0.9 }}>
                                <Link href="/">
                                    <Image src="/netc2.png"
                                        alt='NetCrafty'
                                        width={200}
                                        height={60}
                                        style={{
                                            display: "flex",
                                            marginLeft: "30px"
                                        }}
                                        priority
                                    />
                                </Link>
                            </Typography>
                    }

                    {
                        !isMobile && (
                            <Stack spacing={4} p={2}
                                direction={"row"}
                                alignItems={"center"}
                                justifyContent={"center"}
                            >
                                <Link href="/" className={`navbar-links ${router.pathname === '/' ? 'active' : ''}`}>
                                    Home
                                </Link>
                                <Link href="/services" className={`navbar-links ${router.pathname === '/services' ? 'active' : ''}`}>
                                    Services
                                </Link>
                                <Link href="/about" className={`navbar-links ${router.pathname === '/about' ? 'active' : ''}`}>
                                    About
                                </Link>
                                <Link href="/contact" className={`navbar-links ${router.pathname === '/contact' ? 'active' : ''}`}>
                                    Contact
                                </Link>
                            </Stack>
                        )
                    }
                </Toolbar>
            </AppBar>
            <Drawer variant='temporary' anchor="left" open={openDrawer} onClose={toggleDrawer}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '240px' },
                }}>
                <List>
                    <ListItem>
                        <ListItemText >
                            <Link href="/" className={`navbar-links ${router.pathname === '/' ? 'active' : ''}`}>
                                Home
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText >
                            <Link href="/services" className={`navbar-links ${router.pathname === '/services' ? 'active' : ''}`}>
                                Services
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText >
                            <Link href="/about" className={`navbar-links ${router.pathname === '/about' ? 'active' : ''}`}>
                                About
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText >
                            <Link href="/contact" className={`navbar-links ${router.pathname === '/contact' ? 'active' : ''}`}>
                                Contact
                            </Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default Navbar;
