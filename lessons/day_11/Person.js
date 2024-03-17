class Person {
    
    constructor(name, age){ // giong nhu 1 function. Duoc chay dau tien khi tao object. Dung de do du lieu vao.
        this._name = name; // object duoc sinh ra boi class nay
        this._age = age;
    }

    // getter | get the current value of the attribute/property // thuong dat trung ten voi thuoc tinh _ underscore
    get name(){
        return this._name;
    }

    set name(name){
        //this.name = name;
        // name = name
        // name ben trai dang bi hieu la goi lai ten ham` cua chinh no

        this._name = name;
    }

    get age(){
        return this._age;
    }
}

module.exports = Person