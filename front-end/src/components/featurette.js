'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export const Featurette = (props) => {
  return (
    <div className="container">
      <hr className='featurette-divider'/>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">{props.headerText}</h2>
          <h2 className="text-muted">{props.subHeaderText}</h2>
        </div>
        <div className="col-md-5">
          <img className="featurette-image img-fluid mx-auto" src={props.imgSrc}
               alt="Generic placeholder image" />
        </div>
      </div>

      <hr className='featurette-divider'/>

    </div>
  );
};

Featurette.propTypes = {
  headerText : PropTypes.string.isRequired,
  subHeaderText : PropTypes.string,
  imgSrc : PropTypes.string.isRequired
}
