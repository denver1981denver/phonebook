'use strict';

const {
  hoverRow,
  modalControl,
  deleteControl,
  formControl,
} = require('./modules/control');

const {
  renderPhoneBook,
  renderContacts,
} = require('./modules/render');

const {
  getContactData,
} = require('./modules/serviceStorage');

{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);
    const data = getContactData();

    const {
      list,
      logo,
      btnAdd,
      formOverlay,
      form,
      btnDel,
    } = renderPhoneBook(app, title);

    const allRow = renderContacts(list, data);
    const {closeModal} = modalControl(btnAdd, formOverlay);

    hoverRow(allRow, logo);
    deleteControl(btnDel, list);
    formControl(form, list, closeModal);
  };

  window.phoneBookInit = init;
  window.addEventListener('storage', e => {
    init();
  });
}


