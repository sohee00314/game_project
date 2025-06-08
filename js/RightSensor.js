class RightSensor extends Sensor{
    constructor(contain,character,x,y,width,height,color){
        super(contain,character,x,y,width,height,color);
    }
    setFakeValue(fakeX,fakeY){
        this.fakeX = character.x + fakeX;
        this.fakeY =character.y + fakeY;

        for(let i=0;i<platAarray.length;i++){
            for(let j=0;j<platAarray[i].length;j++){
                let plate = platAarray[i][j];
                if(plate !==0 && plate !==3){
                    if(collisionCheckBySensor(this, plate)){
                         character.x = plate.x-character.width-0.3;
                    }
                }
            }
        }

    }
}