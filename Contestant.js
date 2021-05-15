class Contestant {
    constructor(){
      this.index = null;
      this.answer = 0;
      this.name = null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(name){
      var  contestantIndex = " contestant" +  contestantCount;
      database.ref( contestantIndex).set({
        name: this.name,
        answer: this.answer
      });
      
    }
    static getPlayerInfo(){
      var contestantInfoRef = database.ref('contestant');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
    })
    
    }
  }
