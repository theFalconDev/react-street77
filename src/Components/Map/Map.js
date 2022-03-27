import React from 'react'
import Iframe from 'react-iframe'
const MapUrl = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1535968.7113299442!2d69.95777939999999!3d41.24488905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1625036757003!5m2!1sen!2s'

const Map = () => {
  return (
    <section className='map'>
        <div className='container-fluid'>
            <div className='row'>
                <div className="col-12 p-0">
                    <h2>Наши филиалы</h2>

                    <Iframe url={MapUrl} width="100%" height="502"  allowfullscreen="" loading="lazy" />

                        
                </div>
            </div>
        </div>
    </section>
  )
}

export default Map