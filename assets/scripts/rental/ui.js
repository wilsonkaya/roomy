'use strict'
const onSuccess = (data) => {
  // if (data.accounts.length === 0) {
  //   $('#warning-get').html('<p class="blink_me"> NO DATA! </p>')
  // } else {
  //   let showBooksHtml = showBooksTemplate({ accounts: data.accounts })
  //   $('#content').html(showBooksHtml);
  // }
  console.log(data)
}
//
// const onError = function (response) {
//   console.error(response);
// };
//
// const onDeleteSuccess = function (accountId) {
//   $('[data-id ='+ accountId +']').remove();
// };
//
//
// const onPatchSuccess = (data, accountId) => {
//   $(".warning-update-data").text("Succesfull !");
//   setTimeout(function() {$('.kapat').modal('hide');}, 1250);
//   setTimeout(function() {$('.warning-update-data').text("");}, 1250);
//   // console.log(accountId)
//   let showBooksHtml = updateAccount({ account: data.account, accountId});
//   // setTimeout(function() {$('[data-id ='+ accountId +']').html(showBooksHtml);}, 1300);
// setTimeout(function() {$('[data-id ='+ accountId +']').replaceWith(showBooksHtml);}, 1475);
//
// };
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
module.exports = {
  onSuccess,
  // onError,
  // onDeleteSuccess,
  // onPatchSuccess,
  // onPostSuccess,
  // onPostError
}
