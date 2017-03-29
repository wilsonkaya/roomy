'use strict'
const config = require('../config')
const store = require('../store')

const index = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/reviews',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const indexMyReview = function () {
  return $.ajax({
    url: config.apiOrigin + '/myreviews',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + id,
    method: 'GET'
  })
}

const destroy = function (reviewId) {
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + reviewId,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const patch = function (data, reviewId) {
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + reviewId,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const post = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/reviews',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

module.exports = {
  index,
  show,
  destroy,
  patch,
  indexMyReview,
  post
}
