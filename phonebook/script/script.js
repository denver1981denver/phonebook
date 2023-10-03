'use strict';

const {
  hoverRow,
  modalControl,
  deleteControl,
  addContactPage,
  formControl,
} = require('./modules/control');


const {
  createContainer,
createHeader,
createLogo,
createMain,
createButtonsGroup,
createTable,
createForm,
createFooter,
createRow,
} = require('./modules/createElements');

const {
  renderPhoneBook,
  renderContacts,
} = require('./modules/render');

const {
getContactData,
setContactData,
addContactData,
removeContactData,
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

    const allRow = renderContacts(list);
    const {closeModal} = modalControl(btnAdd, formOverlay);

    hoverRow(allRow, logo);
    deleteControl(btnDel, list, title);
    formControl(form, list, closeModal);
  };

  window.phoneBookInit = init;
  window.addEventListener('storage', e => {
    init();
  });
}



