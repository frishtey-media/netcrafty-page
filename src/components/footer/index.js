import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <Divider sx={{ borderColor: 'white' }} />
            <footer className="rn-footer footer-style-default variation-two text-center">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
                                <div className="rn-footer-widget">
                                    <h4 className="title">
                                        <span className="theme-gradient text-golden">Services</span>
                                    </h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover color-light ">
                                            <li><a href="https://www.netcrafty.com/services" target="_blank">Web Development</a></li>
                                            <li><a href="https://www.netcrafty.com/services" target="_blank">Graphic Designing</a></li>
                                            <li><a href="https://www.netcrafty.com/services" target="_blank">Digital Marketing</a></li>
                                            <li><a href="https://www.netcrafty.com/services" target="_blank">Analytics</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <div className="widget-menu-top">
                                        <h4 className="title">
                                            <span className="theme-gradient text-golden">Solutions</span>
                                        </h4>
                                        <div className="inner ">
                                            <ul className="footer-link link-hover">
                                                <li><a href="https://www.netcrafty.com/services" target="_blank">SEO</a></li>
                                                <li><a href="https://www.netcrafty.com/services" target="_blank">Brand Building</a></li>
                                                <li><a href="https://www.netcrafty.com/services" target="_blank">Case Study</a></li>
                                                <li><a href="https://www.netcrafty.com/services" target="_blank">Technical Support</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">
                                        <span className="theme-gradient text-golden">Company</span>
                                    </h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li><a href="https://www.netcrafty.com/pricing" target="_blank">Pricing</a></li>
                                            <li><a href="https://www.netcrafty.com/about" target="_blank">About Us</a></li>
                                            <li><a href="https://www.netcrafty.com/testimonial" target="_blank">Testimonial</a></li>
                                            <li><a href="https://www.netcrafty.com/#portfolio" target="_blank">Portfolio</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <h4 className="title">
                                        <span className="theme-gradient text-golden">Stay With Us.</span>
                                    </h4>
                                    <div className="inner">
                                        <h6 className="subtitle text-center">2000+ Our clients are subscribe Around the World</h6>
                                        <ul className="social-icon social-default justify-content-center">
                                            <li><Link href="https://www.facebook.com/netcrafty"><svg stroke="currentColor" fill="none" strokeWidth="2"
                                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                                                </path>
                                            </svg></Link></li>
                                            <li><Link href="https://twitter.com/Netcrafty_com"><svg stroke="currentColor" fill="none" strokeWidth="2"
                                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                                                </path>
                                            </svg></Link></li>
                                            <li><Link href="https://www.instagram.com/netcrafty"><svg stroke="currentColor" fill="none" strokeWidth="2"
                                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                            </svg></Link></li>
                                            <li><Link href="https://in.linkedin.com/company/netcrafty"><svg stroke="currentColor" fill="none" strokeWidth="2"
                                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
                                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                                </path>
                                                <rect x="2" y="9" width="4" height="12"></rect>
                                                <circle cx="4" cy="4" r="2"></circle>
                                            </svg></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area copyright-style-one no-border">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="copyright-left">
                                    <ul className="ft-menu link-hover justify-content-center">
                                        <li>
                                            <Link href="/">
                                                <span className="theme-gradient" style={{ fontWeight: '600' }}>
                                                    Privacy Policy
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <span className="theme-gradient" style={{ fontWeight: '600' }}>
                                                    Terms and Conditions
                                                </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/">
                                                <span className="theme-gradient" style={{ fontWeight: '600' }}>
                                                    Contact Us
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="copyright-right text-center text-md-center">
                                    <span className="copyright-text text-light align-items-center justify-content-end">© NetCrafty 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;
