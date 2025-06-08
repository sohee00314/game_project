class Sensor{
    constructor(contain,character,x,y,width,height,color){
        this.contain = contain;
        this.div = document.createElement("div");
        this.x =x;
        this.y =y;
        this.width =width;
        this.height =height;
        this.color =color;
        this.character = character;
        
        this.div.style.position = "absolute";
        this.div.style.left = this.x +"px";
        this.div.style.top = this.y +"px";
        this.div.style.width = this.width+"px";
        this.div.style.height = this.height+"px";
        this.div.style.backgroundColor = this.color;
        
        this.contain.appendChild(this.div);
        
        this.fakeX;
        this.fakeX;
    }
    setFakeValue(fakeX,fakeY){};
    
}