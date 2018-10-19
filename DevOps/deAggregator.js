const deagg = require('aws-kinesis-agg/kpl-deagg');
require('constants');
const computeCheckSum = true;

exports.handler = async (event, context, status) => {
  console.log('Processing Aggregated Messages');

  handleNoProcess(event, () => {
    let realRecords = [];

    console.log('Processing ' + event.Records.length + 'Kinesis Input Records');

    async.map(event.Records, (record, asyncCallback) => {
      deagg.deaggregate(record.kinesis, computeCheckSum, (err, userRecord) => {
        if (err) {
          console.log('Error on Record: ' + err);
          asyncCallback(err);
        } else {
          let recordData = new Buffer(userRecord.data, 'base64');
          console.log('Per record callback invoked with record: ' + recordData.toString());
          realRecords.push(userRecord);
        }
      }, (err) => {
          if (err) {
            console.log(err);
          }
          asyncCallback(err);
        });
    }, (err) => {
      if (err) {
        finish(event, context, 'ERROR', err);
      } else {
        finish(event, context, 'OK', 'Success');
      }
    })
  });
};

const finish = (event, context, status, message) => {
  console.log('Processing Complete');

  if (status !== 'OK') {
    if (message) {
      console.log(message);
    }

    context.done(status, JSON.stringify(message));

  } else {
    context.done(null, message);
  }
};

const handleNoProcess = (event, callback) => {
  let noProcessReason;

  if (!event.Records || event.Records.length === 0) {
    noProcessReason = "Event contains no Data";
  }
  if (event.Records[0].eventSource !== "aws:kinesis") {
    noProcessReason = "Invalid Event Source " + event.eventSource;
  }
  if (event.Records[0].kinesis.kinesisSchemaVersion !== "1.0") {
    noProcessReason = "Unsupported Event Schema Version " + event.Records[0].kinesis.kinesisSchemaVersion;
  }

  if (noProcessReason) {
    finish(event, 'ERROR', noProcessReason);
  } else {
    callback();
  }
};