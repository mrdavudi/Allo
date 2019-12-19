const validation = {
  username: {
    presence: {
      message: '^Please enter an username'
    },
    length: {
      minimum: 4,
      message: '^Your username must be at least 4 characters'
    }
  },
  name: {
    presence: {
      message: '^Please enter a name'
    },
    length: {
      minimum: 1,
      maximum: 50,
      message: '^Your name must be less than 50 characters'
    }
  },
  firstName: {
    presence: {
      message: '^Please enter a firstName'
    },
    length: {
      minimum: 1,
      maximum: 50,
      message: '^Your firstName must be less than 50 characters'
    }
  },
  lastName: {
    presence: {
      message: '^Please enter a lastName'
    },
    length: {
      minimum: 1,
      maximum: 50,
      message: '^Your lastName must be less than 50 characters'
    }
  },
  note: {
    length: {
      maximum: 1000,
      message: '^Your note must be less than 1000 characters'
    }
  },
  email: {
    presence: {
      allowEmpty: false,
      message: '^Please enter an email address',
    },
    length: {
      maximum: 20,
      message: 'Your Email must be less than 20 characters'
    },
    email: {
      message: '^Please enter a valid email address',
    },
  },

  password: {
    presence: {
      allowEmpty: false,
      message: '^Please enter a password',
    },
    format: {
      pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
      message: "^invalid password. use complex 8 characters"
    },
    length: {
      maximum: 20,
      message: '^Yor password must be less than 20 characters'
    },
  },

  /*confirmPassword: {
    equality: "password"
  },*/

  phoneNumber: {
    presence: {
      message: '^Please enter a phone number'
    },
    length: {
      minimum: 10,
      maximum: 16,
      message: '^Please enter a valid phone number'
    },
    numericality: {
      onlyInteger: true,
      message: '^Please enter a valid phone number'
    }
  },

  mobileNumber: {
    presence: {
      message: '^Please enter a Mobile number'
    },
    length: {
      minimum: 10,
      maximum: 16,
      message: '^Please enter a valid Mobile number'
    },
    numericality: {
      onlyInteger: true,
      message: '^Please enter a valid Mobile number'
    }
  },

  site: {
    presence: {
      message: '^Please enter a valid url'
    },
    url: {
      schemes: ['http', 'https', '.+'],
      message: '^Please enter a valid url'
    }
  }

  // money: {
  //   presence: {
  //     message: '^Please enter amount'
  //   },
  //   numericality: {
  //     greaterThan: 0.00001,
  //     message: '^Please enter a positive number'
  //   }
  // }
}

export default validation
