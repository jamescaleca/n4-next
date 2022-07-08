import Navbar from '../components/navbar'

export default function About() {
  return (
    <>
      <Navbar />
      <div className="about-us-container">
        <div className="about-p">
          <h1>ABOUT US</h1>
          <p>Etiam erat velit scelerisque in dictum non consectetur a. Arcu dui vivamus arcu felis bibendum ut tristique et. Velit dignissim sodales ut eu. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Id donec ultrices tincidunt arcu non sodales.</p>
          <p>Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Venenatis a condimentum vitae sapien pellentesque.</p>
          <hr></hr>
        </div>
        <div className="about-numbers">
          <ul>
            <li>
              <h1>550</h1>
              <h3>CLIENTS</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </li>
            <li>
              <h1>850</h1>
              <h3>PRODUCTS</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </li>
            <li>
              <h1>90K</h1>
              <h3>SALES</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </li>
            <li>
              <h1>20</h1>
              <h3>OFFICES</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </li>
          </ul>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}