const EMAIL_PATTERN =
  // eslint-disable-next-line
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

//front validator MUST be equal to back validators
const userValidators = {
  
  username: (value) => {
    let message;
    if (!value || value.length > 50) {
      message =
        "Username invalid! It is required and maximun of 50 characters long.";
    }
    return message;
  },

  firstname: (value) => {
    let message;
    if (value.length > 50) {
      message = "First name invalid! Maximun of 50 characters long.";
    }
    return message;
  },

  lastname: (value) => {
    let message;
    if (value.length > 50) {
      message = "Last name invalid! Maximun of 50 characters long.";
    }
    return message;
  },

  password: (value) => {
    let message;
    if (!value || value.length < 5) {
      message =
        "Password invalid! It is required and minimun of 5 characters long.";
    }
    return message;
  },

  skills: (value) => {
    let message;
    if (value.length > 3000) {
      message = "Skills invalid! Maximun of 3000 characters long.";
    }
    return message;
  },

  email: (value) => {
    let message;
    if (!value) {
      message = "Email is required";
    } else if (!EMAIL_PATTERN.test(value)) {
      message = "Invalid email format!";
    }
    return message;
  },

  experience: (value) => {
    let message;
    if (value.length > 2) {
      message = "Experience invalid! Maximun of 40 years experience.";
    }
    return message;
  },

  fields: (value) => {
    let message;
    if (value.length > 50) {
      message = "Experience invalid! Choose the fields from the check boxes.";
    }
    return message;
  },

  country: (value) => {
    let message;
    if (value.length > 100) {
      message = "Country invalid! Maximun of 100 characters long.";
    }
    return message;
  },

  city: (value) => {
    let message;
    if (value.length > 100) {
      message = "Experience invalid! Maximun of 100 characters long.";
    }
    return message;
  },

  photo: (value) => {
    let message;
    if (value.length > 3000) {
      message = "Photo invalid! Maximun of 3000 characters long.";
    }
    return message;
  },

  description: (value) => {
    let message;
    if (value.length > 3000) {
      message = "Description invalid! Maximun of 3000 characters long.";
    }
    return message;
  },
};

export { userValidators };
