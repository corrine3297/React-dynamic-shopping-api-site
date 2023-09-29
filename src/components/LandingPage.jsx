import React from 'react';
import MyStyles from '../components/MyStyles.module.css';
import landingImage from './Landing_hero-image-1-1.png';


function LandingPage() {
    return (
        <>
            {/* landing page section */}
            <div className={MyStyles.landingContainer}>
                <div className={MyStyles.landingSection}>
                    <div className={MyStyles.landingContent}>
                        <div data-aos="fade-right">
                            <div className={MyStyles.landingTitle}>
                                Styles Accessories & New Gadgets
                            </div>
                        </div>
                        <div data-aos="fade-right">
                            <div className={MyStyles.landingParagraph}>
                                Nam vel augue sit amet ligula tincidunt blandit sed sed neque. Morbi vulputate augue malesuada
                                mi viverra blandit.
                            </div>
                        </div>
                        <div data-aos="fade-right">
                            <div className={MyStyles.landingButton}>
                                shop now
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up">
                        <div className={MyStyles.landingImage} >
                            <img src={landingImage} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LandingPage