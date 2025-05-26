class DownSensor extends Sensor{
    constructor(contain,character,x,y,width,height,color){
        super(contain,character,x,y,width,height,color);

        this.result =false;
    }
    setFakeValue(fakeX,fakeY){
        this.fakeX = this.character.x + fakeX;
        this.fakeY =this.character.y + fakeY;
        
        for(let i=0;i<platAarray.length;i++){
            for(let j=0;j<platAarray[i].length;j++){
                let plate = platAarray[i][j];
                if(plate !==0){
                    if( collisionCheckBySensor(this, plate)){
                        this.character.y = plate.y-this.character.height-1;
                        this.character.velY =0;
                        return this.result = true;
                        
                    }
                }
                }
            
        } 
        console.log(this.result);
    }
}