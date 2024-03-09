//Object

var myLife = {
    name: 'BinhNu',
    age: 18,
    'Call-phone': '0993923123',\
     //Cách đặt tên với tên lỗi
    getName: function (){
        return this.name;
    }
}
console.log(myLife.getName());
