'use strict'
const showReviewsTemplate = require('../templates/show-reviews.handlebars')
const createReviewTemplate = require('../templates/create-review.handlebars')
const showMyReviewTemplate = require('../templates/show-myreviews.handlebars')
const updateReviewTemplate = require('../templates/update-review.handlebars')

const onIndexSuccess = (data) => {
  if(data.reviews.length === 0){
  $('.clean-shows').text('')
  alertify.error('There are no reviews')
  } else {
    let showReviewsHtml = showReviewsTemplate({reviews: data.reviews})
    $('#show').html(showReviewsHtml)
  }
}

// const onIndexError = function(data) {

// }

const onSuccess = (data) => {
  if (data.reviews.length === 0) {
  $('.clean-sign').text('')
  alertify.error("You don't have any reviews ")
  } else {
    $('.clean-sign').text('')///is it right
  let showMyReviewsHtml = showMyReviewTemplate({ reviews: data.reviews })
    $('#show').html(showMyReviewsHtml)
    $('.instructions').hide()
  }
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

const onCreateNewReview = (data) => {
  let createReviewHtml = createReviewTemplate({ key: data })
  $('#show').html(createReviewHtml)
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
