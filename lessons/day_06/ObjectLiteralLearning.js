// Object Literal - Use to construct DATA objbect
// Create
let teo = {
    name: 'Tui', // thuoc tinh
    'my age': 18, // hiem khi khai bao the nay
    sayHello: function(){
        console.log('Hello, ', this.name, ' ne!');
    },
    secrectInfo : {} // nested object thuc te it ai khai bao trong nay
};

// Read: dot notation - doc ko khoang trang, [] syntax - doc co khoang trang
console.log(teo.name);
console.log(teo['my age']);

// Update
teo.name = 'Tun',
teo['my age'] = 22;
console.log(teo);

teo.gender = 'F';
console.log(teo);

// hiem khi phai dung den delete

// Delete property
delete teo['my age'];
console.log(teo);

// Delete object
delete teo; // se ko delete duoc
console.log(teo); 