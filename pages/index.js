import Slider from '../components/slider/slider'
import Steps from '../components/steps/steps'
import Faq from '../components/faq/faq'
import Footer from '../components/footer/footer'
import Header from '../components/header/header'

export default function Home() {
  return (
    <div className='container mx-auto px-4'>
      <Header/>
      <Slider/>
      <Steps/>
      <Faq/>
      <Footer/>
    </div>
  )
}
