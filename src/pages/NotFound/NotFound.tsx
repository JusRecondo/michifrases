import styles from './NotFound.module.scss';

const NotFound = () => {
    return (
        <>
            <img src="https://http.cat/404" alt="Error 404" className={styles.notFound}/>
        </>
    );
};

export default NotFound;
