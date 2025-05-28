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
        this.jumpMove =false;
        
        this.div.style.position = "absolute";
        this.div.style.left = this.x +"px";
        this.div.style.top = this.y +"px";
        this.div.style.width = this.width+"px";
        this.div.style.height = this.height+"px";
        this.div.style.backgroundColor = this.color;
        this.div.style.zIndex = "10";
        
        // 캐릭터에 걷는 이미지 삽입
        this.walkMove = false;
        this.div.style.backgroundImage = `url("../image/walk/walk1.jpg")`;
        this.walkArray = []; // 걷는 이미지 배열
        this.walkLoop =null; // waking()의 루프
        this.a= 0; // walking()을 위한 증가값 초기화
        this.b=0; 
        for(let i=1;i<=5;i++){
            let img = `../image/walk/walk${i}.jpg`;
            this.walkArray.push(img);
        }
        this.div.style.backgroundSize = "cover";
        
        
        this.jumpArray = []; // 점프이미지 배열
        this.jumpLoop = null;
        for(let i=1;i<=5;i++){
            let img = `../image/jump/jp${i}.jpg`;
            this.jumpArray.push(img);
        }

        
        
        
        this.contain.appendChild(this.div);
        
        //센서4개 보유
        this.upSensor = new UpSensor(this.div, this, 10, 0, this.width-20, 10, "");
        this.rightSensor = new RightSensor(this.div, this, this.width-10, 10, 10, this.height-20, "");
        this.downSensor = new DownSensor(this.div, this, 10, this.height-10, this.width-20, 10, "");
        this.leftSensor = new LeftSensor(this.div, this, 0, 10, 10, this.height-20, "");
        
    }
    tick(){
        // 점프기능 
        if(this.jumpMove == true){
            
            for(let i =0; i<arrP.length;i++){
                if(arrP[i].y >= (this.y+this.height)){
                    if(this.y<= (arrP[i].y- this.height) && this.y>(arrP[i].y-400)){
                        this.velY = this.jumpPawer;
                        this.downSensor.result = false;
                        
                    }
                    else{
                        this.jumpMove = false;
                    }
                }
                
            }
        }  
        
        this.velY += this.gravity;
        
        this.x += this.velX;
        this.y += this.velY;
        
        if(this.velX !== 0 && !this.walkMove && this.downSensor.result){
            this.walking()
            // 이미지 반전 처리
            if (this.velX < 0) {
                this.div.style.transform = "scaleX(-1)";
            } else if (this.velX > 0) {
                this.div.style.transform = "scaleX(1)";
            }
        }else{
            clearTimeout(this.walkLoop);
            this.walkMove = false;
        }
        
        // 점프 무한 루프
        if(this.velY<0){
            clearTimeout(this.walkLoop);
            this.walkMove = false;
            this.jumping();
        }
        else{
            clearTimeout(this.jumpLoop);
        }
        
        // if(this.velY>=0 && this.downSensor.result == false){
        //     this.div.style.backgroundImage = `url(../image/jump/jp5.jpg)`;
        // }
        
        
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
    walking(){ // 걷는 이미지 무한 루프
        this.div.style.backgroundImage = `url(${this.walkArray[this.a]})`;
        this.a++;
        this.walkMove= true;
        
        if(this.a>4) this.a=0;
        
        this.walkLoop= setTimeout(()=>{
            if(this.velX !==0){
                this.walking();
            }else{
                this.walkMove = false;
            }
        },700);
    }
    
    jumping() {
      this.div.style.backgroundImage = `url(${this.jumpArray[this.b]})`;
     console.log(`url(${this.jumpArray[this.b]})`);
      this.b++;
      if(this.b>=this.jumpArray.length) this.b =0;

    this.jumpLoop = setTimeout(()=>{
      if(this.velY<0){
        clearTimeout(this.walkLoop);
        this.walkMove = false;
          this.jumping()  
      }else{
        this.walkMove = true;
      }
      
    },700);

    }
     
    
}
