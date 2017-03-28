'use strict'
const onIndexSuccess = (data) => {
  console.log(data)
}

// const onIndexError = function(data) {
//   console.log(data)
// }
//
// const onSuccess = (data) => {
//   let showRentalsHtml = showRentalTemplate({ rentals: data.rentals })
//   $('#show').html(showRentalsHtml)
// }
//
// const onError = function() {
//
// }
//
// const onDeleteSuccess = function (rentalId) {
//   $('[data-id =' + rentalId + ']').remove()
// }
// const onDeleteError = function() {
//
// }
// const onPatchSuccess = () => {
//
// }
// const onPatchError = () => {
//
// }
//
// const onPostSuccess = function () {
//
// }
// const onPostError = function () {
//
// }
//
// const onUpdateSucces = (data) => {
//   console.log(data)
//   let updateRentalHtml = updateRentalTemplate({rental: data.rental})
//   $('#show').html(updateRentalHtml)
// }
//
// const onUpdateError = function() {
//
// }
//
// const onSingleRentalShowSucces = (data) => {
//   console.log(data)
//   let showRentalHtml = showSingleRental({rental: data.rental})
//   $('#show').html(showRentalHtml)
// }
// const onCreateNewRental = () => {
//   let createRentalFormHtml = createRentalForm()
//   $('#show').html(createRentalFormHtml)
// }
module.exports = {
  // onSuccess,
  // onError,
  // onDeleteSuccess,
  // onDeleteError,
  // onUpdateSucces,
  // onUpdateError,
  // onPatchSuccess,
  // onPatchError,
  onIndexSuccess,
  // onIndexError,
  // onCreateNewRental,
  // onPostSuccess,
  // onPostError,
  // onSingleRentalShowSucces
}
