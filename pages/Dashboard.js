import Router from 'next/router'
import styles from '../styles/Dashboard.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default Dashboard;


function Dashboard({data}) {
const router=useRouter();
const id =router.query.id;
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">All User</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#"> </a>
      </li>

    </ul>

  </div>
</nav>
{data.map((user) => {
          return (
   <div className={styles.card} >
  <div className="card-body">
    <h5 className="card-title">      <a
            href={`/user/${user.id}`}
          >{user.name}</a></h5>
    <h6 classNmme="card-subtitle mb-2 text-muted">{user.username}</h6>
  </div>
</div>

     )   })}


    </>
  )

  
}


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data =await res.json()


 

  // Pass data to the page via props
  return { props: { data}}

  // Pass data to the page via props
  }

