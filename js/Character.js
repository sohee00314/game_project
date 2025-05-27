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

        // X,Y의 시작 위치
        this.startX =x;
        this.startY =y;

        // X,Y의 마지막 위치
        this.lastX;
        this.lastY;


        // 점프 기능
        this.gravity = 0.3;
        this.jumpPawer = -12;
        this.jumping =false;

        this.div.style.position = "absolute";
        this.div.style.left = this.x +"px";
        this.div.style.top = this.y +"px";
        this.div.style.width = this.width+"px";
        this.div.style.height = this.height+"px";
        this.div.style.backgroundColor = this.color;
        
        this.contain.appendChild(this.div);

        //센서4개 보유
        this.upSensor = new UpSensor(this.div, this, 10, 0, this.width-20, 10, "blue");
        this.rightSensor = new RightSensor(this.div, this, this.width-10, 10, 10, this.height-20, "blue");
        this.downSensor = new DownSensor(this.div, this, 10, this.height-10, this.width-20, 10, "blue");
        this.leftSensor = new LeftSensor(this.div, this, 0, 10, 10, this.height-20, "blue");
        
    }
    tick(){
       // 점프기능 
        if(this.jumping == true){
       
            for(let i =0; i<arrP.length;i++){
                if(arrP[i].y >= (this.y+this.height)){
                                if(this.y<= (arrP[i].y- this.height) && this.y>(arrP[i].y-200)){
                                    this.velY = this.jumpPawer;
                                    this.downSensor.result = false;
                                    
                                }
                                else{
                                    this.jumping = false;
                                }
                            }
                            
                        }
                    }  
                    
        this.velY += this.gravity;

        this.x += this.velX;
        this.y += this.velY;
        //console.log(this.y);

        
        
    }
    render(){
        this.upSensor.setFakeValue(10,0);
        this.rightSensor.setFakeValue(this.width-10,10);
        this.downSensor.setFakeValue(10,this.height-10);
        this.leftSensor.setFakeValue(0,10);
        
       // 떨어질 때 지정된 위치로 캐릭터 이동
        if(this.x<=0 ||this.y>2000){
            this.x = this.startX;
            this.y = this.startY;
            return;
        }
        
        // 마지막 위치 저장
        this.lastX = this.x;
        this.lastY = this.y;
        
        this.div.style.left = this.x +"px";
        this.div.style.top = this.y +"px";
        
    }
    // 다음 맴 이동 시 위치
    next(){
        this.startX = this.lastX-2800;
        this.startY = this.lastY-10;
        this.x = this.startX;
        this.y = this.startY;
        return;
    }

}
