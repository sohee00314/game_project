class LeftSensor extends Sensor{
    constructor(contain,character,x,y,width,height,color){
        super(contain,character,x,y,width,height,color);
    }
    setFakeValue(fakeX,fakeY){
        this.fakeX = character.x + fakeX;
        this.fakeY =character.y + fakeY;

        for(let i=0;i<map.length;i++){
            for(let j=0;j<map[i].length;j++){
                let plate = map[i][j];
                if(plate ==1){
                    if(collisionCheckBySensor(this, plate)){
                         character.x = plate.x + character.width+10;
                    }
                }
            }
        }

    }
}