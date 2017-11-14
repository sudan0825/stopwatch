class Stopwatch{
    constructor(display){
        this.timer = 0;
        this.elem = display;
        this.flag = false;
        this.timeArray=[0,0,0];
        this.elem.innerHTML=this.format(this.timeArray);
        
        
    }
    
    start() {
        var action = setInterval(increase.bind(this), 100);
//        var mywatch = this.elem;
//        var mytimer= this.timer;
//       
       this.flag=false;
        function increase(){
            if(this.flag){
                clearInterval(action);
             
            }
            this.timer++;
            this.transfertimetoarray(this.timer);
            
            this.elem.innerHTML = this.format(this.timeArray);
          

        }
        
         
    }
    reset(){
      
        this.flag = true;
        this.timeArray=[0,0,0];
       
        this.elem.innerHTML = this.format(this.timeArray);
        
        
        
    }
    stop(){
        this.flag = true;

        
    }
    transfertimetoarray(times){
        if(times<100){
          this.timeArray[2]=times; 
        }else{
          this.timeArray[2]=times-100;
            this.timeArray[1]+=1;
        }
        if(this.timeArray[1]>=60){
            this.timeArray[1]-=60;
            this.timeArray[0]+=1;
        }
    }
    format(timeArray){
        return `\
${pad0(timeArray[0])}:\
${pad0(timeArray[1])}:\
${pad0(timeArray[2])}`;
    }
}
function pad0(value){
    var result=value.toString();
    if(value<10){
        result='0'+result;
    }
    return result;
}

let stopwatch = new Stopwatch(document.getElementById("stopwatch"));