import getContactData from './script/serviceStorage';
import * as control from './script/control';
import {renderPhoneBook, renderContacts} from './script/render';

import './scss/index.scss';
import './index.html';

const init = (selectorApp, title) => {
  const app = document.querySelector(selectorApp);
  const data = getContactData();

  const { list, logo, btnAdd, formOverlay, form, btnDel } = renderPhoneBook(
    app,
    title
  );

  const allRow = renderContacts(list, data);
  const { closeModal } = control.modalControl(btnAdd, formOverlay);

  control.hoverRow(allRow, logo);
  control.deleteControl(btnDel, list);
  control.formControl(form, list, closeModal);
};

init('#app', 'Денис');

