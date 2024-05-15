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
                                        <span className="theme-gradient text-blue">Services</span>
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
                                            <span className="theme-gradient text-blue">Solutions</span>
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
                                        <span className="theme-gradient text-blue">Company</span>
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
                                        <span className="theme-gradient text-blue">Stay With Us.</span>
                                    </h4>
                                    <div className="inner">
                                        <h6 className="subtitle text-center">2000+ Our clients are subscribe Around the World</h6>
                                        <Stack spacing={1}
                                            direction={"row"}
                                            justifyContent={'center'}
                                            sx={{ width: '100%' }}
                                            className="icon-container"
                                        >
                                            <a href="https://twitter.com/Netcrafty_com" target="_blank" rel="noopener">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    version="1.1"
                                                    width="2.5rem"
                                                    height="2.5rem"
                                                    viewBox="-2 -5 95 95"
                                                >
                                                    <circle className="backgroundCircle" cx="44.5" cy="44.5" r="43.5" fill="#ffffff"></circle>
                                                    <polygon
                                                        points="24.89,23.01 57.79,66.99 65.24,66.99 32.34,23.01 "
                                                        style={{
                                                            stroke: "none",
                                                            strokeWidth: 1,
                                                            strokeDasharray: "none",
                                                            strokeLinecap: "butt",
                                                            strokeLinejoin: "miter",
                                                            strokeMiterlimit: 10,
                                                            fill: "#393939",
                                                            fillRule: "nonzero",
                                                            opacity: 1
                                                        }}
                                                        transform="  matrix(1 0 0 1 0 0) "
                                                    />
                                                    <path
                                                        d="M 45 0 L 45 0 C 20.147 0 0 20.147 0 45 v 0 c 0 24.853 20.147 45 45 45 h 0 c 24.853 0 45 -20.147 45 -45 v 0 C 90 20.147 69.853 0 45 0 z M 56.032 70.504 L 41.054 50.477 L 22.516 70.504 h -4.765 L 38.925 47.63 L 17.884 19.496 h 16.217 L 47.895 37.94 l 17.072 -18.444 h 4.765 L 50.024 40.788 l 22.225 29.716 H 56.032 z"
                                                        style={{
                                                            stroke: "none",
                                                            strokeWidth: 1,
                                                            strokeDasharray: "none",
                                                            strokeLinecap: "butt",
                                                            strokeLinejoin: "miter",
                                                            strokeMiterlimit: 10,
                                                            fill: "#393939",
                                                            fillRule: "nonzero",
                                                            opacity: 1
                                                        }}
                                                        transform=" matrix(1 0 0 1 0 0) "
                                                        strokeLinecap="round"
                                                    />
                                                </svg>

                                            </a>
                                            <a href="https://www.facebook.com/netcrafty" target="_blank" rel="noopener">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27" width="2.5em" height="2.5em" aria-label="Facebook" className="FacebookIcon__Container-sc-1dug6zt-1 ctmpoG">
                                                    <title>Facebook</title>
                                                    <circle className="backgroundCircle" cx="13.5" cy="13.5" r="12.5" fill="#393939"></circle>
                                                    <path fill="#ffffff" d="M11.202 20.5v-6.429h-.182c-.622 0-1.244-.001-1.866.002-.103 0-.155-.015-.154-.132.005-.865.003-1.73.003-2.596 0-.031.006-.062.01-.107h2.19c0-.066-.002-.118 0-.17.017-.52-.018-1.048.063-1.559.163-1.026.69-1.869 1.597-2.478a3.095 3.095 0 0 1 1.76-.53h2.225c.042 0 .085.003.138.005V9.33c-.063.004-.124.01-.184.01h-2.067c-.419 0-.686.205-.713.606-.027.42-.006.841-.006 1.28h2.973c.003.066.007.114.007.163 0 .843-.002 1.686.004 2.528.001.13-.044.157-.17.157-.881-.005-1.762-.003-2.642-.003h-.185v.163l.001 6.132c0 .045.008.09.012.134h-2.814z"></path>
                                                </svg>
                                            </a>
                                            <a href="https://www.instagram.com/netcrafty" target="_blank" rel="noopener">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27" width="2.5em" height="2.5em" aria-label="Instagram" className="InstagramIcon__Container-sc-hmev78-1 iScppI">
                                                    <title>Instagram</title>
                                                    <circle className="backgroundCircle" cx="13.5" cy="13.5" r="12.5" fill="#393939"></circle>
                                                    <path fill="#ffffff" d="M18.823 13.394c0-.513.01-1.026-.003-1.538a19.733 19.733 0 0 0-.082-1.477c-.111-1.098-.765-1.856-1.848-2.06-.578-.11-1.178-.125-1.77-.136a95.287 95.287 0 0 0-3.246-.001c-.559.009-1.123.028-1.673.114-.94.146-1.582.685-1.841 1.616a3.818 3.818 0 0 0-.14.925 128.57 128.57 0 0 0-.04 3.53c.002.749.02 1.5.084 2.246.097 1.103.756 1.858 1.84 2.065.581.112 1.186.126 1.782.138 1.077.02 2.155.014 3.233.002a17.361 17.361 0 0 0 1.505-.083 2.368 2.368 0 0 0 1.269-.493c.604-.48.836-1.14.872-1.874.048-.99.067-2.974.058-2.974m-7.961 6.569c-.758-.022-1.492-.159-2.15-.562-.861-.53-1.387-1.307-1.555-2.294-.1-.591-.136-1.197-.145-1.798-.02-1.285-.012-2.572.002-3.858.007-.682.03-1.367.257-2.023.436-1.257 1.321-2.02 2.615-2.269.586-.113 1.196-.138 1.796-.147 1.291-.02 2.582-.012 3.873.002.678.008 1.358.03 2.01.255 1.263.436 2.03 1.323 2.277 2.623.112.587.137 1.197.146 1.797.02 1.286.012 2.572-.002 3.858-.007.682-.03 1.367-.257 2.023-.436 1.258-1.321 2.021-2.614 2.27-.587.113-1.197.124-1.797.148-.607.024-1.215.005-1.823.005 0 .006-1.756-.005-2.633-.03"></path><path fill="#ffffff" d="M13.503 15.77a2.282 2.282 0 0 0 2.268-2.273 2.282 2.282 0 0 0-2.274-2.268 2.282 2.282 0 0 0-2.268 2.274 2.282 2.282 0 0 0 2.274 2.268M13.489 17C11.546 16.999 10 15.436 10 13.474c.001-1.933 1.573-3.476 3.54-3.474 1.921.002 3.462 1.58 3.46 3.54-.002 1.91-1.576 3.46-3.51 3.46M17.022 9c.56.005.985.446.978 1.018a1 1 0 0 1-1.004.982A1.013 1.013 0 0 1 16 9.983 1 1 0 0 1 17.022 9"></path>
                                                </svg>
                                            </a>
                                            <a href="https://in.linkedin.com/company/netcrafty" target="_blank" rel="noopener">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27" width="2.5em" height="2.5em" aria-label="LinkedIn" className="LinkedinIcon__Container-sc-17ttqcs-1 gFzvrA">
                                                    <title>LinkedIn</title>
                                                    <circle className="backgroundCircle" cx="13.5" cy="13.5" r="12.5" fill="#393939"></circle>
                                                    <path fill="#ffffff" d="M8 19h3v-8H8v8zM9.51 7.5C8.596 7.5 8 8.148 8 9c0 .833.58 1.5 1.474 1.5h.018C10.422 10.5 11 9.833 11 9c-.018-.852-.578-1.5-1.49-1.5zm10.99 7.018V19h-2.62v-4.182c0-1.05-.38-1.767-1.328-1.767-.724 0-1.154.483-1.344.95-.07.167-.087.4-.087.634V19H12.5s.035-7.083 0-7.816h2.62v1.108l-.016.025h.017v-.025c.348-.532.97-1.292 2.362-1.292 1.724 0 3.017 1.117 3.017 3.518z"></path>
                                                </svg>
                                            </a>
                                        </Stack>
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
                                    <span className="copyright-text text-black align-items-center justify-content-end">© NetCrafty 2023</span>
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
