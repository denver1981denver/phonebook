import getContactData from './modules/serviceStorage.js';
import * as control from './modules/control.js';
import {renderPhoneBook, renderContacts} from './modules/render.js';

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
  const {closeModal} = control.modalControl(btnAdd, formOverlay);

  control.hoverRow(allRow, logo);
  control.deleteControl(btnDel, list);
  control.formControl(form, list, closeModal);
};

window.phoneBookInit = init;
window.addEventListener('storage', e => {
  init();
});


