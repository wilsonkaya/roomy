'use strict'
const showReviewsTemplate = require('../templates/show-reviews.handlebars')
const createReviewTemplate = require('../templates/create-review.handlebars')
const onIndexSuccess = (data) => {
  if(data.reviews.length === 0){
  alertify.error('There are no reviews')
  } else {
    let showReviewsHtml = showReviewsTemplate({reviews: data.reviews})
    $('#shows').html(showReviewsHtml)
  }
}

// const onIndexError = function(data) {
//   console.log(data)
// }

// const onSuccess = (data) => {
//   let showRentalsHtml = showRentalTemplate({ rentals: data.rentals })
//   $('#show').html(showRentalsHtml)
// }

// const onError = function() {
//
// }

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

// const onUpdateSucces = (data) => {
//   console.log(data)
//   let updateRentalHtml = updateRentalTemplate({rental: data.rental})
//   $('#show').html(updateRentalHtml)
// }
//
// const onUpdateError = function() {
//
// }

// const onSingleRentalShowSucces = (data) => {
//   console.log(data)
//   let showRentalHtml = showSingleRental({rental: data.rental})
//   $('#show').html(showRentalHtml)
// }
const onCreateNewReview = (data) => {
  let createReviewHtml = createReviewTemplate({ key: data })
  $('#shows').html(createReviewHtml)
}
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
  onCreateNewReview,
  // onPostSuccess,
  // onPostError,
  // onSingleRentalShowSucces
}
