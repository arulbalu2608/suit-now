import { strings } from '@/helpers/constant'
import Image from 'next/image'
import React from 'react'
import styles from "./styles.module.scss"

const Discount = () => {
    return (
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-4'>
                    <Image src={strings.discount.leftBanner} alt="discount banner" />
                </div>
                <div className={`col-8 ${styles.discountContainer}`}>
                    <div>
                        <p className={styles.title}>{strings.discount.title}</p>
                        <p className={styles.join}>{strings.discount.join}</p>
                        <div className='row'>
                            <div className='col-8'>
                            <input className={styles.inputStyle} placeholder={strings.discount.placeHolder} />
                            </div>
                            <div className='col-4'>
                              <div className={styles.arrowContainer}>
                              <Image src={strings.discount.sideArrow} alt="arrow" />
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discount