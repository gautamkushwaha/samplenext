import Link from 'next/link';
import styles from '../../styles/gautam.module.css'

export const getStaticProps = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return{
    props:{ gautams: data}
  }
}

export default function gautam({gautams}) {
  return (
    <>
    <div>
      <h1>All Gangs</h1>
    {gautams.map(gautam=>(
     <Link href={ '/Gautam/' + gautam.id} key={gautam.id}>
      <div className={styles.single}>
        <h3>
          {gautam.name}
        </h3>
      </div>

     </Link>
    ))}
    </div>
    </>
  )
}