import Header from "./Header";
import MenuNav from "./MenuNav";
import Footer from "./Footer";
import styles from "../../styles/Layout.module.css"
import { useState } from "react";

function Layout({children}) {
    
    const [mostrarMenu,setMostrarMenu] = useState(false);

    return (
        <div>
            <Header />  
            <div className={styles.main}>
                <div>
                    {mostrarMenu? 
                    <img src="/images/cerrar_menu.png" alt="Imagen Cerrar Menu" onClick={()=>setMostrarMenu(false)}/> :
                    <img src="/images/burger_menu.png" alt="Imagen Menu" onClick={()=>setMostrarMenu(true)}/>
                    }
                    {mostrarMenu && <MenuNav />}
                    
                </div>  
                {children} 
            </div>
            <Footer />
        </div>
    );
}

export default Layout;