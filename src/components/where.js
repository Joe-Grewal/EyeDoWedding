import where1 from '../assets/images/where-1.jpeg'
import where2 from '../assets/images/where-2.jpeg'
// import where3 from '../assets/images/where-3.jpeg'

function Where () {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>Questions</span>
            <h2 className='oliven-title'>When & Where</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where1} alt='' />
            </div>
            <div className='content'>
              <h5>Wedding Ceremony</h5>
              <p>
                <i className='ti-location-pin'></i> Gurdwara Nanak Niwas - 8600 No 5 Rd, Richmond, BC
              </p>
              <p>
                <i className='ti-time'></i> <span>9:00am – 12:00pm</span>
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where2} alt='' />
            </div>
            <div className='content'>
              <h5>Reception</h5>
              <p>
                <i className='ti-location-pin'></i> Royal King Palace Banquet Hall - 8158 128 St, Surrey, BC
              </p>
              <p>
                <i className='ti-time'></i> <span>06:00pm</span>
              </p>
            </div>
          </div>
          {/* <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where2} alt='' />
            </div>
            <div className='content'>
              <h5>Accomodations</h5>
              <p>
                <i className='ti-direction-alt'></i> Hotel and distance from
                wedding party restaurant:
              </p>
              <p>
                <i className='ti-direction'></i> The William Vale (7 min)
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Where