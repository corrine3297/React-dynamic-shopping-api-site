import React from 'react';
import './Banner.css'
import MyStyles from '../components/MyStyles.module.css'
import bannerPost1 from '../components/poster-touch-motion-controllers.png';
import bannerPost2 from '../components/touch-motion-controllers.png';
function Banner() {
    return (
        <div className={MyStyles.bannerContainer}>
            <div className={MyStyles.productBannerSection}>
                <div className={MyStyles.banner} style={{ backgroundColor: 'rgb(249, 251, 231)' }}>
                    <div className={MyStyles.bannerTitle}>
                        Touch Motion Controllers
                    </div>
                    <div className={MyStyles.bannerTitle}>
                        At
                        $ 199.00 USD
                    </div>
                    <div className={MyStyles.bannerPara}>
                        Nam vel augue sit amet ligula tincidunt blandit sed sed neque.
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className={MyStyles.bannerShowMore}>Browse Products
                        </div>
                        <div>
                            <i class="fa-solid fa-arrow-right fa-xl ms-2" style={{ color: '#161717' }}></i>
                        </div>
                    </div>
                    <div className={MyStyles.posterImg}>
                        <img src={bannerPost1} alt="" />
                    </div>
                </div>

                <div className={MyStyles.banner} style={{ backgroundColor: 'rgba(253, 240, 237, 255)' }}>
                    <div className={MyStyles.bannerTitle}>
                        Touch Motion Controllers
                    </div>
                    <div className={MyStyles.bannerTitle}>
                        At
                        $ 199.00 USD
                    </div>
                    <div className={MyStyles.bannerPara}>
                        Nam vel augue sit amet ligula tincidunt blandit sed sed neque.
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className={MyStyles.bannerShowMore}>Browse Products
                        </div>
                        <div>
                            <i class="fa-solid fa-arrow-right fa-xl ms-2" style={{ color: '#161717' }}></i>
                        </div>
                    </div>
                    <div className={MyStyles.posterImg}>
                        <img src={bannerPost2} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner