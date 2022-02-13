class Utils {
    AddItemsToSelect(name, items){
        const select = document.getElementsByName(name)[0];

        if (!select){
            throw new UserException("Выпадающий список не найден");
        }

        items.forEach(element => {
           let opt = document.createElement('option');
           opt.value = element.value;
           opt.innerHTML = element.text;
           select.appendChild(opt);
       });
    }
}

export default new Utils();