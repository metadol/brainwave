import ButtonGradient from './assets/svg/ButtonGradient'

import Benefits from './sections/Benefits'
import Collaboration from './sections/Collaboration'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Pricing from './sections/Pricing'
import Roadmap from './sections/Roadmap'
import Services from './sections/Services'

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        {/* <Collaboration /> */}
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />

    </>
  )
}

export default App