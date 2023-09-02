//create function for images

function newImage(assets, left, bottom) {
    let image = document.createElement('img')
    image.src = assets
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image);
}

//Add all images to page
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 425)
newImage('assets/well.png', 150, 425)

newImage('assets/shield.png', 165,185)
newImage('assets/staff.png', 600, 100)

//Add sword to the page
//create a function for sword for double click

let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('dblclick', function(){
    sword.remove()
})
