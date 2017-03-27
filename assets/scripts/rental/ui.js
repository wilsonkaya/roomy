'use strict'
const showRentalTemplate = require('../templates/rental-listing.handlebars')
const updateRentalTemplate = require('../templates/update-rental-listing.handlebars')
const onSuccess = (data) => {
  let showRentalsHtml = showRentalTemplate({ rentals: data.rentals })
  $('#show').html(showRentalsHtml)
  console.log(data)
}
//
// const onError = function (response) {
//   console.error(response);
// };
//
const onDeleteSuccess = function (rentalId) {
  $('[data-id =' + rentalId + ']').remove()
}
//
//
const onPatchSuccess = (data, rentalId) => {
  // $(".warning-update-data").text("Succesfull !");
  // setTimeout(function() {$('.kapat').modal('hide');}, 1250);
  // setTimeout(function() {$('.warning-update-data').text("");}, 1250);
  // console.log(accountId)

  // setTimeout(function() {$('[data-id ='+ accountId +']').html(showBooksHtml);}, 1300);
// {$('[data-id ='+ accountId +']').replaceWith(showBooksHtml)

};
//
//
// const onPostSuccess = function (data) {
//   $("#warning-create-new-data").text("Succesfull !");
//   setTimeout(function() {$('#myModal-create-password').modal('hide');}, 1300);
//   setTimeout(function() {$('.clean-create').val("");}, 1300);
//   setTimeout(function() {$('#warning-create-new-data').text("");}, 1300);
//   let showBooksHtml = createAccount({ account: data.account });
//   $('.content').append(showBooksHtml);
//   $("#warning-get").text("");
// };
//
//
// const onPostError = function() {
//   $("#warning-create-new-data").text("Please fill in !");
// };

const onUpdateSucces = (data) => {
  console.log(data)
  let updateRentalHtml = updateRentalTemplate({rental: data.rental})
  $('#show').html(updateRentalHtml)
}
module.exports = {
  onSuccess,
  // onError,
  onDeleteSuccess,
  onUpdateSucces
  // onPatchSuccess,
  // onPostSuccess,
  // onPostError
}
