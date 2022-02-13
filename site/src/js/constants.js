export const API_PATH = 'https://beauty-saloon-server.herokuapp.com';

export const openDialogButton = '#open-dialog-btn';
export const validateConfig = {
    rules: {
        name: {
          required: true
        },
        phone : {
            required: true
        }
      },
      messages: {
        name: {
          required: "Заполните имя"
        },
        phone: {
            required: "Заполните телефон"
        }
      }
  };

const phoneMask = "+7 (999) 999-99-99";