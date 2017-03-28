'use strict'

const success = (data) => {
  iziToast.info({
    title: 'Hello',
    message: 'Welcome!',
});
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  failure,
  success
}
