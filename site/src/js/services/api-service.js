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
        return this.get('staff');
    }

    createOrder(orderData) {
        return this.post('orders', orderData);
    }
}

export default new ApiService();