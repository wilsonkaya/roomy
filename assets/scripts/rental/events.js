'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
// attach getFormFields globally

// const getFormFields = require('../../../lib/get-form-fields')

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked
const onGetRental = function (event) {
  event.preventDefault()
  console.log('it works')
  api.index()
  .then(ui.onSuccess)
  .catch(ui.onError)
}
//
// const onDeleteAccount = function(event){
//   event.preventDefault();
//   let accountId = event.target.getAttribute('data-id');
//   console.log(accountId);
//   api.destroy(accountId)
//     .then(ui.onDeleteSuccess(accountId))
//     .catch(ui.onError);
// };
// //
// const onPatchAccount = function(event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   let accountId = event.target.getAttribute('data-id');
//   // console.log(data,accountId);
//   api.patch(data, accountId)
//     .then(ui.onPatchSuccess(data,accountId))
//     .catch(ui.onError);
// };
//
// const onPostAccount = function(event){
//   event.preventDefault();
//  let data = getFormFields(event.target);
//   api.post(data)
//     .then(ui.onPostSuccess)
//     .catch(ui.onPostError);
// };

const rentalHandlers = () => {
  $('#getRentals').on('click', onGetRental)
  // $('#content').on('click','.remove' ,onDeleteAccount);
  // $('#content').on('submit', '.submit-update', onPatchAccount);
  // $('#create-hint').on('submit', onPostAccount);
}
module.exports = {
  rentalHandlers
}
