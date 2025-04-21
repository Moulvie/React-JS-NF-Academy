import Album from "../components/shared/albums";
import Footer from "../components/shared/footer";
import Header from "../components/shared/header";
import Heros from "../components/shared/hero";


export default function Home(){
    return(
        <>
        <Header/>
         <Heros/>
         <Album/>
         <Footer/>
        </>
    )
}