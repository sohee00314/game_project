class GamePlatfrom{
    constructor(contain,x,y,width,height,src){
        this.contain = contain;
        this.img = document.createElement("img");
        this.x =x;
        this.y=y;
        this.width =width;
        this.height =height;
        this.src =src;

        this.img.style.left = this.x +"px";
        this.img.style.top = this.y +"px";
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height +"px";
        this.img.src = this.src;
        this.img.style.position = "absolute";
        
        this.contain.appendChild(this.img);
    }
}