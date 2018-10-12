'use strict';

import axios from 'axios';

export default axios.create({
  baseURL: 'http://fashionalb-1423079644.us-east-1.elb.amazonaws.com:8090/'
});