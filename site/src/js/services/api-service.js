import { HttpService } from './http-service';
import { API_PATH } from '../constants'

class ApiService extends HttpService {
    constructor(){
        super(API_PATH);
    }

    getServices() {
        return this.get('services');
    }

    getMasters() {
        const response = await fetch('staff');
        return response.json();
    }

    createOrder(orderData) {
        return this.post('orders', orderData);
    }
}

export default new ApiService();