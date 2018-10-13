'use strict';

import React from 'react';

export const Featurette = (props) => {
  return (
    <div class="container" style={{paddingTop: 200+'px'}}>
      <hr className='featurette-divider'/>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Sometimes our shoppers drink coffee with their new clothes.
          </h2>
          <h2 className="text-muted">Just take a look.</h2>
        </div>
        <div className="col-md-5">
          <img className="featurette-image img-fluid mx-auto" src='../images/roberto-nickson-g-707118-unsplash.jpg'
               alt="Generic placeholder image" />
        </div>
      </div>

      <hr className='featurette-divider'/>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Sometimes they like to pose like it's no big deal in flower fields.</h2>
            <h2 className="text-muted">Checkmate.</h2>
        </div>
        <div className="col-md-5">
          <img className="featurette-image img-fluid mx-auto" src='../images/priscilla-du-preez-361818-unsplash.jpg'
               alt="Generic placeholder image" />
        </div>
      </div>

      <hr className='featurette-divider'/>

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">You wish your dog looked this good.</h2>
          <p className="lead"></p>
        </div>
        <div className="col-md-5 order-md-1">
          <img className="featurette-image img-fluid mx-auto" src="../images/charles-deluvio-540415-unsplash-changed.jpg"
               alt="Generic placeholder image" />
        </div>
      </div>

      <hr className='featurette-divider'/>

    </div>
  );
};