'use strict'
const config = require('../config')
const store = require('../store')

const index = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/rentals',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const indexMyRental = function () {
  return $.ajax({
    url: config.apiOrigin + '/myrentals',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/rentals/' + id,
    method: 'GET'
  })
}

const destroy = function (rentalId) {
  return $.ajax({
    url: config.apiOrigin + '/rentals/' + rentalId,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const patch = function (data, rentalId) {
  return $.ajax({
    url: config.apiOrigin + '/rentals/' + rentalId,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const post = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/rentals',
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
  indexMyRental,
  post
}
