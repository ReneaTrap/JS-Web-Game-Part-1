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

Invoke.newImage = ('assets/green-character.gif', '100px', '100px');
Invoke.newImage = ('assets/pine-tree.png', '450px', '200px');
Invoke.newImage = ('assets/tree.png', ' 200px', '300px');
Invoke.newImage = ('assets/pillar.png', '350px', '100px');
Invoke.newImage = ('assets/crate.png', '150px', '425px');
Invoke.newImage = ('assets/well.png', '150px', '425px');

Invoke.newImage = ('assets/sword.png', '500px', '405px');
Invoke.newImage = ('assets/shield.png', '165px','185px');
Invoke.newImage = ('assets/staff.png','600px', '100px');

function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)

    function newItem(url, left, bottom){
    let item = newImage(url, left, bottom){
        function newItem(url, left, bottom){
            let newItem = newImage(url, left, bottom)
            item.addEventListener('dblclick', function(){
            })

        function newItem(url, left, bottom){
            let item = newImage(url, left, bottom)
            item.addEventListener('dblclick', function(){
            console.log(item)           
                })
            }
            
        }
         
    }
    }
    
}

