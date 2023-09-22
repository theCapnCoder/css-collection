import styles from './styles.module.scss'

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h2>404</h2>
      <p>Opps...looks like you got lost</p>
      <button>Go Home</button>
    </div>
  )
}

export default NotFoundPage