/*****************************************************************************/
/* CreateTransaction: Event Handlers */
/*****************************************************************************/
Template.CreateTransaction.events({
});

/*****************************************************************************/
/* CreateTransaction: Helpers */
/*****************************************************************************/
Template.CreateTransaction.helpers({
});

/*****************************************************************************/
/* CreateTransaction: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateTransaction.created = function () {
};

Template.CreateTransaction.rendered = function () {
  $('#addNewTransactionModal').on('shown.bs.modal', function () {
    $('input[name="description"]').focus();
  });
};

Template.CreateTransaction.destroyed = function () {
};
