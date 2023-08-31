//create function for images
function newImage( url, left, bottom){

    let imgElement = document.createElement('img')
    imgElement.src = url
    imgElement.style.position = 'fixed'
    imgElement.style.left;
    imgElement.style.bottom;
    document.body.append(imgElement);
    return imgElement
      
}

let item1 = newImage('assets/green-character.gif', '100px', '100px');
let item2 = newImage('assets/pine-tree.png', '450px', '200px');
let item3 = newImage('assets/tree.png', ' 200px', '300px');
let item4 = newImage('assets/pillar.png', '350px', '100px');
let item5 = newImage('assets/crate.png', '150px', '425px');
let item6 = newImage('assets/well.png', '150px', '425px');

let item7 = newImage('assets/sword.png', '500px', '405px');
let item8 = newImage('assets/shield.png', '165px','185px');
let item9 = newImage('assets/staff.png','600px', '100px');

function newItem(item) {
    item.addEventListener('dblclick', function () {
        console.log(item);
    });
    newItem(item1);
newItem(item2);
newItem(item3);
newItem(item4);
newItem(item5);
newItem(item6);
newItem(item7);
newItem(item8);
newItem(item9);
}
         
