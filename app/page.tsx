import Events from './(Index)/Events'
import Footer from './(Index)/Footer'
import Hero from './(Index)/Hero'
import Header from './header/page'

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col overflow-hidden">
      <Header />
      <Hero />
      <Events />
      <Footer/>
    </main>
  )
}
