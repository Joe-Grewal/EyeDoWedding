import Logo from '../assets/images/logo.png'

function Footer () {
  return (
    <div className='footer2'>
      <div className='oliven-narrow-content'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2>
              <a href='/'>
                <img src={Logo} alt='' />
                <span>
                  Denise <small>&</small> Randy
                </span>
              </a>
            </h2>
            <p className='copyright'>July 07, 2023 – Richmond, B.C.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer