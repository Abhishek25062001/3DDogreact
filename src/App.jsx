import './App.css'
import Dog from './components/Dog'
import { Canvas } from '@react-three/fiber'

function App() {


  return (
    <>
      <main>
        <div className="images">
          <img id='tomorrowland' src="/tommorowland.png" alt="Tomorrowland project" />
          <img id='navy-pier' src="/navy-pier.png" alt="Navy Pier project" />
          <img id='msi-chicago' src="/msi-chicago.png" alt="MSI Chicago project" />
          <img id='phone' src="/phone.png" alt="Louise's Phone project" />
          <img id='kikk' src="/kikk.png" alt="KIKK Festival project" />
          <img id='kennedy' src="/kennedy.png" alt="Kennedy Center project" />
          <img id='opera' src="/opera.png" alt="Royal Opera of Wallonia project" />
        </div>
        <Canvas
          id='canvas-elem'
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1,
          }} >
          <Dog />
        </Canvas>
        <section id='section-1' >
          <nav>
            <div className="nav-elem brand">
              <span className="brand-name">SHIVAM</span>
              <span className="brand-tag">/ STUDIO</span>
            </div>
            <div className="nav-elem showreel">
              <i className="ri-arrow-right-s-line"></i> Show reel
            </div>
            <div className="nav-elem">
              <i className="ri-menu-3-line"></i>
            </div>
          </nav>
          <div className="middle">
            <div className="left">
              <h1>WE <br /> Make <br /> Bold <br />Work</h1>
            </div>
            <div className="right"></div>
          </div>
          <div className="bottom">
            <div className="left"></div>
            <div className="right">
              <p>
                Shivam Chowdhry is a creative <br />
                developer at the intersection <br />
                of art, design and technology.
              </p>
            </div>
          </div>

          <div className="first-line"></div>
          <div className="second-line"></div>

        </section>
        <section id='section-2' >
          <div className="titles">
            <div img-title="tomorrowland" className="title">
              <small>2020 - ONGOING</small>
              <h1>Tomorrowland</h1>
            </div>
            <div img-title="navy-pier" className="title">
              <small>2020 - ONGOING</small>
              <h1> Navy Pier</h1>
            </div>
            <div img-title="msi-chicago" className="title">
              <small>2020 - ONGOING</small>
              <h1>  MSI Chicago</h1>
            </div>
            <div img-title="phone" className="title">
              <small>2020 - ONGOING</small>
              <h1>This Was Louise’s Phone</h1>
            </div>
            <div img-title="kikk" className="title">
              <small>2020 - ONGOING</small>
              <h1>KIKK Festival 2018</h1>
            </div>
            <div img-title="kennedy" className="title">
              <small>2020 - ONGOING</small>
              <h1>The Kennedy Center</h1>
            </div>
            <div img-title="opera" className="title">
              <small>2020 - ONGOING</small>
              <h1>Royal Opera Of Wallonia</h1>
            </div>
          </div>


        </section>
        <section id='section-3' ></section>
      </main>
    </>
  )
}

export default App
