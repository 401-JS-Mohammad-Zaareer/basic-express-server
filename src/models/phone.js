'use strict';
let phones = [
    { id: 1, make: 'Samsung', ram: '12GB', camera: '64MP' },
    { id: 2, make: 'Apple', ram: '8GB', camera: '32MP' },
    { id: 3, make: 'Huawei', ram: '6GB', camera: '16MP' },
    { id: 4, make: 'HTC', ram: '4GB', camera: '24MP' },
];

class Phone {
    constructor(make, ram, camera) {
        this.id = 4;
        this.make = make;
        this.ram = ram;
        this.camera = camera;
    }

    create(object) {
        let record = {
            id: ++this.id,
            make: object.make,
            ram: object.ram,
            camera: object.camera
        }
        phones.push(record);
        return record;
    };

    read(id) {
        if (id) {
            return phones.find(phone => phone.id === id);
        } else {
            return phones;
        }
    };

    update(id, object) {
        for (let i = 0; i < phones.length; i++) {
            if (phones[i].id == id) {
                phones[i] = object;
                return phones[i];
            }
        }
    };

    destroy(id) {
        let deleted = false;
        phones = phones.filter((phone) => {
            if (phone.id != id) {
                return true;
            } else {
                deleted = true;
                return false;
            }
        });
        return deleted;
    };
}

module.exports = Phone;