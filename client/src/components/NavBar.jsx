import style from '../styles/NavBar.module.css'
import logo from '../images/logowow.png'

const NavBar = ()=> {

    return(
        <div>
            <nav className={style.conteiner}>
               

                <img src={logo} alt="" className={style.logo} />
		        <button>HOME</button>
		        <button>SHOP</button>
                <button>BLOG</button>
		        <button>ABOUT</button>
		        <button>CONTACT</button>

               
              
              

          
		
	</nav>
        </div>
    
    )
}
export default NavBar