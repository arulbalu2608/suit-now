import React from 'react'
import { Playfair_Display as PlayFairDisplay } from "next/font/google";
import styles from "./style.module.scss"
import { strings } from '@/helpers/constant';
import Image from 'next/image';

const playFair = PlayFairDisplay({
    subsets: ['latin'],

})


const Footer = () => {

    const getCurrentYear =() =>new Date().getFullYear()  // 
    return (
        <div className={styles.footerContainer}>
            <div className='row'>
                <div className='col-4'>
                    <div className={[playFair.className]}>
                        <p className='fs-24'>SUIT-NOW</p>
                    </div>
                    <p className='fs-14 fw-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem . Scelerisque duis ultrices sollicitudin </p>
                    <p className='fs-20'>Find us</p>
                    <div className='d-flex'>
                        {strings.footer.socialMedia.map((data) => {
                            return (
                                <div className=' me-3 cursor-pointer' key={data.id}>
                                    <Image src={data.logo} alt={data.id} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='col-2 d-flex justify-content-end'>
                    <div>
                        <p className='fs-18'>{strings.footer.product}</p>
                        {strings.footer.productList.map((data) => <p key={data.id} className='fs-14 cursor-pointer mt-4'>{data.label}</p>)
                        }
                    </div>

                </div>
                <div className='col-2 d-flex justify-content-end'>
                    <div>
                        <p className='fs-18'>{strings.footer.features}</p>
                        {strings.footer.featuresList.map((data) => <p key={data.id} className='fs-14 cursor-pointer mt-4'>{data.label}</p>)
                        }
                    </div>

                </div>
                <div className='col-2 d-flex justify-content-end'>
                    <div>
                        <p className='fs-18'>{strings.footer.resources}</p>
                        {strings.footer.resourcesList.map((data) => <p key={data.id} className='fs-14 cursor-pointer mt-4'>{data.label}</p>)
                        }
                    </div>

                </div>
                <div className='col-2 d-flex justify-content-end'>
                    <div>
                        <p className='fs-18'>{strings.footer.company}</p>
                        {strings.footer.companyList.map((data) => <p key={data.id} className='fs-14 cursor-pointer mt-4'>{data.label}</p>)
                        }
                    </div>

                </div>
            </div>
            <div className='text-center mt-5'>
                <p className='fs-16'>© Suit-Now {getCurrentYear()} - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer