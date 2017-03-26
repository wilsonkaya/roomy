'use strict'
const config = require('../config')
const store = require('../store')

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/rentals',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}
//
// const show = function (id) {
//   return $.ajax({
//     url: config.apiOrigin + '/accounts/' + id,
//     method: 'GET',
//   });
// };
//
// const destroy = function(accountId){
//   return $.ajax({
//     url: config.apiOrigin + '/accounts/' + accountId,
//     method: 'DELETE',
//     headers:{
//       Authorization:`Token token=${store.user.token}`
//     },
//   });
// };
//
//
// const patch = function(data, accountId){
//   return $.ajax({
//     url: config.apiOrigin + '/accounts/' + accountId,
//     method: "PATCH",
//     headers:{
//       Authorization:`Token token=${store.user.token}`
//     },
//     data
//   });
// };
//
//
// const post = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/accounts' ,
//     method: 'POST',
//     headers: {
//       Authorization: `Token token=${store.user.token}`,
//     },
//     data,
//   });
// };

module.exports = {
  index
  // show,
  // destroy,
  // patch,
  // post
}
