function ElementGetter(){
    this.getObjectsByName = function(container, name="name", recursive=true){
        if(arguments.length < 2){
            throw new Error("Required arguments: container:THREE.Object3D, name:string");
        }
        if(recursive){
            const filteredObjects = [];
            function deepSearch(element) {
                if(element.name == name){
                    filteredObjects.push(element);
                }
                if(element.children){
                    element.children.forEach((subElement)=>{
                        deepSearch(subElement);
                    })  
                }
            }
            deepSearch(container);
            return filteredObjects;
        }
        else{
            return container.children.filter((el)=>{
                return el.name == name;
            });
        }
    }
}