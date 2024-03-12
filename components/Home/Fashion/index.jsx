import TitleCard from '@/components/TitleCard';
import { strings } from '@/helpers/constant';
import Image from 'next/image';
import styles from "./style.module.scss"


const Fashion = () => {
    return (
        <div className='container my-5'>
            <TitleCard
                title={strings.fashion.title}
                description={strings.fashion.description}
            />
            <div className={styles.imageContainer}>
                {strings.fashion.imagesList.map((data) => {
                    return (
                        <div className={styles.fashionPicsItems}  key={data.id}>
                            <Image className={styles.imageStyle} src={data.path} alt={data.id} />
                        </div>
                    )
                })}
            </div>
            <div className={styles.brandContainer}>
                <Image src={strings.fashion.brandBanner} alt="brand" />
            </div>
        </div >
    )
}

export default Fashion