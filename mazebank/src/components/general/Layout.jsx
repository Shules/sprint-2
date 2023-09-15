import Header from "./Header";
import MenuNav from "./MenuNav";
import Footer from "./Footer";
import styles from "../../styles/Layout.module.css"
import { useEffect, useState } from "react";

function Layout({children}) {
    const [mostrarMenu,setMostrarMenu] = useState(false);

    return (
        <div>
            <Header />  
            <div className={styles.main}>
                <div style={{display:"inline-block"}}>
                    {mostrarMenu? 
                    <img src="/images/cerrar_menu.png" onClick={()=>setMostrarMenu(false)}/> :
                    <img src="/images/burger_menu.png" onClick={()=>setMostrarMenu(true)}/>
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