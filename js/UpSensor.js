class UpSensor extends Sensor{
    constructor(contain,character,x,y,width,height,color){
        super(contain,character,x,y,width,height,color);
    }
    setFakeValue(fakeX,fakeY){
        this.fakeX = this.character.x + fakeX;
        this.fakeY =this.character.y + fakeY;
        
        for(let i=0;i<platAarray.length;i++){
            for(let j=0;j<platAarray[i].length;j++){
                let plate = platAarray[i][j];
                 if(plate !==0){
                    if(collisionCheckBySensor(this, plate)){
                        character.y = plate.y+ plate.height+2;
                    }
                 }
            }
        }
    

    }
}