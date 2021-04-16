//import Head from 'next/head'
import styles from '../styles/Home.module.css'
function Form() {
  const registerUser = async event => {
    event.preventDefault()

    const res = await fetch(
      'https://hooks.zapier.com/hooks/catch/123456/abcde',
      {
        body: JSON.stringify({
          name: event.target.name.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    const result = await res.json()
    // result.user => 'Ada Lovelace'
  }

  return (
    <form onSubmit={registerUser}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" autoComplete="name" required />
      <button type="submit">Register</button>
    </form>
  )
}

export default function Home() {
  return (
    
      
      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to <a href="http://localhost:3000/">our page!</a>
        </h1>

        <h1 className={styles.description}>
          Insert your personal details{' '}
          <code className={styles.code}>username,password,email!</code>
        </h1>

        <div className={styles.grid}>
          
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
            
            <h3>Learn &rarr; </h3> 
            <p> Learn about Next.js in an interactive course with quizzes! </p>
         

            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>

          
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
        </div>    
     <script> function Form() </script>
      

    
      </main> 
    ) 
  
  }
     
   