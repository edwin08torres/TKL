import { HomeHeroSeccion } from '../components/Home/HomeHeroSeccion';
import { HomeInformationSeccion } from '../components/Home/HomeInformationSeccion';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';

export const HomePage = () => {
  return (
   <>
    <Header/>
    <HomeHeroSeccion />
    <HomeInformationSeccion />
    <Footer/>
   </>
  )
}
