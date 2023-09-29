import React,{ useEffect, useState }from 'react';
import './Footer.css';
import logo from './logo-dark.png';
import footerImage from './footer_blue-ear-muffs-.png';

function Footer() {
    const [allFooterProduct, setAllFooterProduct] = useState([])
    const fetchData = async () => {
        const response = await fetch('https://fakestoreapi.com/products?limit=3');
        const data = await response.json();
        console.log(data)
        setAllFooterProduct(data)

    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className='footerContainer'>
            <div className='footerSection'>
                <div className="footer-bar section-left section-1" style={{width:'400px'}}>
                    <div data-aos="fade-right">
                        <div className="footer-logo">
                            <img src={logo} alt="" />
                        </div>
                        <div>
                            <i className="fa-solid fa-phone me-3"></i>
                            +00 123 456 789
                        </div>
                        <div>
                            <i className="fa-regular fa-envelope me-3"></i>
                            support@atonal.com
                        </div>
                        <div>
                            <i className="fa-solid fa-location-dot me-3"></i>
                            4967 Sardis Sta, Victoria 8007, Montreal.
                        </div>


                        <div>
                            <ul className="social-media">
                                <li><a href=""><i className="fa-brands fa-facebook fa-1x"></i></a></li>
                                <li><a href=""><i className="fa-brands fa-instagram fa-1x"></i></a></li>
                                <li><a href=""><i className="fa-brands fa-whatsapp fa-1x"></i></a></li>
                                <li><a href=""><i className="fa-brands fa-twitter fa-1x"></i></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bar section-2">
                    <div data-aos="fade-right">
                        <div className="section-heading">
                            Menu
                        </div>
                        <ul className="section-list">
                            <li> Products</li>
                            <li> Home Page</li>
                            <li> Single Product</li>
                            <li> About Us</li>
                            <li> Blog</li>
                            <li> Single Blog</li>
                            <li> Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bar section-3">
                    <div data-aos="fade-right">
                        <div className="section-heading"> Utility Pages </div>
                        <ul className="section-list">

                            <li> Password Protected</li>
                            <li> Instructions Page</li>
                            <li> 404 Not Found</li>
                            <li> Sign Up Page</li>
                            <li> Style Guide</li>
                            <li>Licenses</li>
                            <li> Change Log</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bar section-4">
                    <div data-aos="fade-right">
                        <div className="section-heading">New Product</div>
                    </div>
                    {allFooterProduct?.map(item => (
                    <div data-aos="fade-right">
                        <div className="footer-card">
                            <div className="img-section footer-img">
                                <img src={item?.image} alt="" />
                            </div>
                            <div className="footer-card-details">
                                <div>B{item?.title?.slice(0,10)}...</div>
                                <div className="footer-card-price">$  {item?.price} USD</div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>

            </div>
        </div>
    )
}

export default Footer