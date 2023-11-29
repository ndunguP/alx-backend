import kue from 'kue';

const queue = kue.createQueue();

const jobData = {
  phoneNumber: '+251913124747',
  message: 'Sending Notification To Ali Abdela Phone Number',
};

const job = queue.create('push_notification_code', jobData)
  .save((error) => {
    if (error) {
      console.log(`Error creating job: ${error.message}`);
    } else {
      console.log(`Notification job created: ${job.id}`);
    }
  });

job.on('complete', () => {
  console.log('Notification job completed');
});

job.on('failed', () => {
  console.log('Notification job failed');
});
