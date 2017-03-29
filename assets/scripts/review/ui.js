'use strict'
const showReviewsTemplate = require('../templates/show-reviews.handlebars')
const createReviewTemplate = require('../templates/create-review.handlebars')
const showMyReviewTemplate = require('../templates/show-myreviews.handlebars')
const updateReviewTemplate = require('../templates/update-review.handlebars')

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

const onSuccess = (data) => {
  let showMyReviewsHtml = showMyReviewTemplate({ reviews: data.reviews })
  $('#show').html(showMyReviewsHtml)
}

const onError = function() {

}

const onDeleteSuccess = function (rentalId) {
  $('[data-id =' + rentalId + ']').remove()
}
const onDeleteError = function() {
  alertify.error('Try again!')
}
// const onPatchSuccess = () => {
//
// }
const onPatchError = () => {
  alertify.error('Please fill in the fields with right data')
}

// const onPostSuccess = function () {
//
// }
const onPostError = function () {
alertify.error('Please fill in the fields with right data')
}

const onUpdateSucces = (data) => {
  let updateReviewHtml = updateReviewTemplate({review: data.review})
  $('#show').html(updateReviewHtml)
}
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
  onSuccess,
  onError,
  onDeleteSuccess,
  // onDeleteError,
  onUpdateSucces,
  // onUpdateError,
  // onPatchSuccess,
  onPatchError,
  onIndexSuccess,
  // onIndexError,
  onCreateNewReview,
  // onPostSuccess,
  onPostError,
  // onSingleRentalShowSucces
}
