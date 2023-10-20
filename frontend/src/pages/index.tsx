import FilmLayout from '@/components/FilmLayout/FilmLayout';
import styles from '@/styles/Home.module.css';

export default function Home() {
    return (
        <main className={`${styles.main}`}>
            <FilmLayout />
        </main>
    );
}
