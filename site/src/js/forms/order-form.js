import ApiService from "../services/api-service";

class OrderForm {

    getFormData(event) {
        let data = {};
        let formData = Array
            .from(event.target.elements)
            .filter(element => element.name)
            .forEach(element => {
                const {value, name, type } = element;
                data[name] = value;
        });       
    
        return data;
    }
    
    submitFormEvent(event, successCallback){
        event.preventDefault();
        let data = this.getFormData(event);
        
        ApiService.createOrder(data)
            .then(() => {
                successCallback();
            })
            .catch((e) => {
                console.log(e); 
            })
    }
}

export default new OrderForm();