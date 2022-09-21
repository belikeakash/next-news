import {useRouter} from 'next/router'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export const Navbar = () => {

    const router = useRouter();

    return (
        <div className={styles.main}>
            <div><Link href="/">Home</Link></div>
            <div><Link href="/feed/1">News</Link></div>
            <div><Link href="/contributors">Contributors</Link></div>
            <div><Link href="https://www.linkedin.com/in/akash-sirohi-676b30202/">Linkedin</Link></div>
            <div><Link href="https://github.com/belikeakash/next-news">Github</Link></div>
        </div>
    )

}