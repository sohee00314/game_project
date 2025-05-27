class GamePlatfrom{
    constructor(contain,x,y,width,height,bg){
        this.contain = contain;
        this.div = document.createElement("div");
        this.x =x;
        this.y=y;
        this.width =width;
        this.height =height;
        //this.color = color;
        this.bg = bg; 

       

        this.div.style.left = this.x +"px";
        this.div.style.top = this.y +"px";
        this.div.style.width = this.width + "px";
        this.div.style.height = this.height +"px";
        //this.div.style.backgroundColor = this.color;
        this.div.style.backgroundImage = `url(${this.bg})`;
        this.div.style.backgroundSize = "cover";
        this.div.style.position = "absolute";
        this.div.style.zIndex = "1";
        
        this.contain.appendChild(this.div);
    }
}