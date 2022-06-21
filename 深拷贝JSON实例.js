let demo = {
    name : 'dayday',
    book : {
        title : 'Do you really Know JS',
        price : "45"
    }
}
let clone_demo = JSON.parse(JSON.stringify(demo))
console.log(clone_demo);
demo.name = 'new name'
demo.book.price = '100'
console.log(clone_demo.name,clone_demo.book.price);  
// dayday 45
