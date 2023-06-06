// Nested loop-instanceof object 
const person = {
    first_name: 'Monica',
    last_name: 'Geller',
    phone: '915-996-9739',
    email: 'monica37@gmail.com',
    address: {
        street: {
            street_num: '495',
            street_name: 'Grove Street',
        },
        city: 'New York',
        country: 'USA',
    },
};




for(let keys in person){
	if(person[keys] instanceof Object){
		for(let address in person[keys]){
			if(person[keys][address] instanceof Object){
				for(let street in person[keys][address]){
					document.write(`${street}  ==>  ${person[keys][address][street]} <br>`);
				}
			}
			else{
				document.write(`${address}  ==>  ${person[keys][address]} <br>`);
			}
		}
	}
	else{
		document.write(`${keys}  ==>  ${person[keys]} <br>`);
	}
}
















