//create function for images
function newImage( url, left, bottom){

    let imgElement = document.createElement('img')
    imgElement.src = url
    imgElement.style.position = 'fixed'
    imgElement.style.left + "px"
    imgElement.style.bottom + "px"
    document.body.append(imgElement);
    return imgElement
      
}

let character = newImage('assets/green-character.gif', '100px', '100px');
let pinetree = newImage('assets/pine-tree.png', '450px', '200px');
let tree = newImage('assets/tree.png', '200px', '300px');
let pillar = newImage('assets/pillar.png', '350px', '100px');
let crate = newImage('assets/crate.png', '150px', '425px');
let well = newImage('assets/well.png', '150px', '425px');

let sword = newImage('assets/sword.png', '500px', '405px');
let shield = newImage('assets/shield.png', '165px','185px');
let staff = newImage('assets/staff.png', '600px', '100px');

function newItem(item) {
    item.addEventListener('dblclick', function () {
        console.log(item);
    });
}

newItem(character);
newItem(pinetree);
newItem(tree);
newItem(pillar);
newItem(crate);
newItem(well);
newItem(sword);
newItem(shield);
newItem(staff);
