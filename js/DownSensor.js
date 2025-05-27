class DownSensor extends Sensor{
    constructor(contain,character,x,y,width,height,color){
        super(contain,character,x,y,width,height,color);

        this.result =false;
        
    }
    setFakeValue(fakeX,fakeY){
        this.fakeX = this.character.x + fakeX;
        this.fakeY =this.character.y + fakeY;
        let plate;
        
        for(let i=0;i<map.length;i++){
            for(let j=0;j<map[i].length;j++){
                plate = map[i][j]; 
                console.log(plate);
                if(plate == 1){
                    console.log(plate);
                    if( collisionCheckBySensor(this, plate)){
                        this.character.y = plate.y-this.character.height-1;
                        this.character.velY =0;
                        return this.result = true;
                        
                    }
                }
                }
            
        } 
    }
}