import ApiService from "../services/api-service";
import $ from 'jquery';

const validateRules = {
    name: {
      required: true
    },
    phone : {
        required: true
    }
  };

const validateMessages = {
    name: {
      required: "Заполните имя"
    },
    phone: {
        required: "Заполните телефон"
    }
}

export class OrderForm {
    constructor(options){
        this.form = options.form;
        this.successCallBack = options.successCallBack;
        this.init();
    }

    init(){
        this.form.validate({
            rules: validateRules,
            messages: validateMessages,
            submitHandler: (form) => {
                this.submitFormEvent(form)
            }
        });
    }

    getFormData(form) {
        let data = {};
        let formData = Array
            .from(form)
            .filter(element => element.name)
            .forEach(element => {
                const {value, name, type } = element;
                data[name] = value;
        });       
    
        return data;
    }
    
    submitFormEvent(form){
        debugger;
        let data = this.getFormData(form);
        
        ApiService.createOrder(data)
            .then(() => {
                this.successCallBack();
            })
            .catch((e) => {
                console.log(e); 
            })
    }
}