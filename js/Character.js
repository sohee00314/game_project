class Character{
    constructor(contain,x,y,width,height,velX,velY,color){
        this.contain = contain;
        this.div = document.createElement("div");
        this.x =x;
        this.y =y;
        this.width =width;
        this.height =height;
        this.velX =velX;
        this.velY =velY;
        this.color =color;

        this.div.style.position = "absolute";
        this.div.style.left = this.x +"px";
        this.div.style.top = this.y +"px";
        this.div.style.width = this.width+"px";
        this.div.style.height = this.height+"px";
        this.div.style.backgroundColor = this.color;
        
        this.contain.appendChild(this.div);
        
        
    }
    tick(){
        this.x += this.velX;
        this.y += this.velY;
    }
    render(){
        this.div.style.left = this.x +"px";
        this.div.style.top = this.y +"px";
    }
}