import styles from '../styles/Contributors.module.css'
import Link from 'next/link'
import { Navbar } from '../components/Navbar';
export const Contributor = ({contributors}) =>{

    console.log(contributors);
    return(
        <div className="page-conatiner">
            <Navbar />
            <div className={styles.main}>
                <h1>Contributors</h1>
                <div className={styles.contributors}>
                    <h3>{contributors.name}</h3>
                    <h4>Current Comapny : <Link style={{color:"red"}} href = "https://www.tiket.com/">{contributors.currentcompany}</Link> </h4>
                    <h6>{contributors.position}</h6>
                    <img src={contributors.image} />
                    <p>{contributors.description}</p>
                </div>
            </div>
        </div>
    )
} 

export const getServerSideProps = async pageContent => {
    const apiResponse = await fetch (
        'https://my-json-server.typicode.com/belikeakash/next-news/contributors')
        const contributors = await apiResponse.json();

    return {
        props : {
            contributors : contributors
        }
    }
}

export default Contributor