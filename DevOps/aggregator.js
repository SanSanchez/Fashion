const AWS = require('aws-sdk');
const kinesis = new AWS.Kineses();
const s3 = new AWS.S3();
const async = require('async');
const aggregate = require('aws-kinesis-agg').aggregate;

exports.handler = async (event) => {

  const key = event.Records[0].s3.object.key;
  const bucket = event.Records[0].s3.bucket.name;

  const params = {
    Bucket : bucket,
    Key : key
  };

  s3.getObject(params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      async.map(data.Body)
    }
  });
};