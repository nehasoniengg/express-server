const user = [
  {
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech'
  },
  {
    traineeEmail: 'trainee2@successive.tech',
    reviewerEmail: 'reviewer2@successive.tech'
  },
  {
    traineeEmail: 'trainee3@successive.tech @',
    reviewerEmail: 'reviewer3@successive.tech'
  }

];
const regex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/
);
let valid = 0;
let invalid = 0;

function validateEmail(user) {
  if (regex.test(user)) {
    return true;
  }
  else {
    return false;

  }
}

function validateUsers(user) {

  user.forEach(element => {

    if (validateEmail(element.traineeEmail)) {
      valid++;
    } if (validateEmail(element.reviewerEmail)) {
      valid++;
    } else {
      invalid++;
    }
  })
  return {
    valid, invalid
  }
}


validateUsers(user);
console.log('Valid Counts : ', valid);
console.log('invalid count : ',invalid);

