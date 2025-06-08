 class GameAudio{
    constructor(path){
        this.audio = new Audio(path);
        this.audio.load();
        this.audio.loop = true;
        
    }
     
    play(){
        this.audio.play(); 
         console.log("🎵 오디오가 재생 중입니다");  
    }
    
    pause(){
        this.audio.pause();
        console.log("⏸️ 오디오가 멈춰 있습니다");
    }
    isPlaying(){
        return !this.audio.paused;
    }


}
     
  
  