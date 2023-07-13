
import Menu from './Menu'
function Header({setPage}) {
    const titre = 'Portfolio';

    return <header >
       
     <a href='#' onClick={() => setPage('Accueil')}>
        <h1 >{titre}</h1>
     </a>
        <Menu setPage={setPage}/>
    </header>
}
