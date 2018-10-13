'use strict';
import React from 'react';
import PropTypes from 'prop-types';

// TODO: Make and import actions.

export const Carousel = () => {
  return (
    <div className="container" style={{height: 600 + 'px'}}>
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" className="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" style={{height: 100+'%'}}>
          <div className="carousel-item active">
            <img className="d-block w-100" style={{objectFit: 'fill'}}
                 src="../images/roberto-nickson-g-460869-unsplash.jpg" alt="First slide"/>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" style={{objectFit: 'fill'}}
                 src="../images/adult-beautiful-clothes-291762.jpg" alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" style={{objectFit: 'fill'}}
                 src="../images/assorted-blurred-background-boutique-994523.jpg" alt="Third slide"/>
          </div>
        </div>
      </div>
    </div>
  );
};
