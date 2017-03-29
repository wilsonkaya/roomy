'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
// attach getFormFields globally

const getFormFields = require('../../../lib/get-form-fields')

const onGetReview = function (event) {
  event.preventDefault()
  let data = event.target.getAttribute('data-id')
  let id  = {
    rentals: data
  }
  api.index(id)
  .then(ui.onIndexSuccess)
  // .catch(ui.onIndexError)
}

const onGetMyReviews = function (event) {
  event.preventDefault()
  api.indexMyReview()
  .then(ui.onSuccess)
  .catch(ui.onError)
}

const onShowUpdate = function(event) {
  event.preventDefault()
  let reviewId = event.target.getAttribute('data-id')
  api.show(reviewId)
    .then(ui.onUpdateSucces)
    .catch(ui.onUpdateError)
}

const onDeleteReview = function (event) {
  event.preventDefault()
  let reviewId = event.target.getAttribute('data-id')
  console.log(reviewId)
  api.destroy(reviewId)
    .then(ui.onDeleteSuccess(reviewId))
    .catch(ui.onDeleteError)
}

const onPatchReviews = function(event) {
  event.preventDefault()
  let data = getFormFields(event.target)
  let reviewId = event.target.getAttribute('data-id')
  api.patch(data, reviewId)
    .then(api.indexMyReview)
    .then(ui.onSuccess)
    // .then(ui.onPatchSuccess)
    .catch(ui.onPatchError)
}

const onPostReview = function(event){
  event.preventDefault()
  let data = getFormFields(event.target)
  let rental = data.review.rentals
  let id  = {
    rentals: rental
  }
  api.post(data)
  .then(api.index(id)
  .then(ui.onIndexSuccess)
  .catch(ui.onIndexError))
  .catch(ui.onPostError)
}
const onCreateReview = function () {
  let rentalId = event.target.getAttribute('data-id')
  ui.onCreateNewReview(rentalId)
}
// const onSingleRental = function () {
//   event.preventDefault()
//   let rentalId = event.target.getAttribute('data-id')
//   api.show(rentalId)
//   .then(ui.onSingleRentalShowSucces)
//   .catch(ui.onError)
// }

const reviewlHandlers = () => {
  $('#show').on('click', '.show-reviews', onGetReview)
  $('#show').on('click', '.create-review', onCreateReview)
  $('#shows').on('submit', '#createReview', onPostReview)
  $('#my-reviews').on('click', onGetMyReviews)
  $('#show').on('click', '.update-myreview', onShowUpdate)
  $('#show').on('submit', '.submit-review-update', onPatchReviews)
  $('#show').on('click', '.delete-myreview', onDeleteReview)
}
module.exports = {
  reviewlHandlers
}
