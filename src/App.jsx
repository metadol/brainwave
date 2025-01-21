import ButtonGradient from './assets/svg/ButtonGradient'

import Benefits from './sections/Benefits'
import Header from './sections/Header'
import Hero from './sections/Hero'

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
      </div>

      <ButtonGradient />

    </>
  )
}

export default App