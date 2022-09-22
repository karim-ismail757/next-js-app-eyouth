import { useRouter } from 'next/router';
import styles from '../../styles/Dashboard.module.css'



export default user;


function user({user}) {
  const router = useRouter();
  const  id  = router.query.id;

  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href={`/Dashboard`}>Home</a>
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
<div className={styles.card}>
  <div className="card-body">
    <h5 className="card-title">{user.name}</h5>
    <h6 classNmme="card-subtitle mb-2 text-muted">{user.username}</h6>
    <p>{user.email}</p>
    <p>{user.address.street}</p>
    <p>{user.phone}</p>
     </div>
</div>
    </>
  )

  
}

export async function getServerSideProps({params}) {
    // Fetch data from external API
 
const m =params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${m}`)
    const user =await res.json()
   
  
    // Pass data to the page via props
    return { props: { user }
  }

}

