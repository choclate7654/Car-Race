class Game{
    constructor(){}
    getState(){
        var gameStateRef= database.ref('gameState')
        gameStateRef.on("value",function(data){
        gameState=data.val()
        })
    }
    update(state){
database.ref('/').update({
    gameState:state
})
  }
  start(){
    if  (gameState===0){
        player=new Player()
            player.getCount()
        form= new Form()
        form.display()
    }
  }
  play(){
      form.hide()
      textSize(34)
      text("Let's start Racing",100,100)
      Player.getPlayerInfo()
      if(allPlayers!==undefined){
          var displayPosition=150
          for(var plr in allPlayers){
           if (plr==="player"+player.index) {
               fill("green")
           } else {
               fill("black")
               
           }
           displayPosition+=25
           textSize(20)
           text(allPlayers[plr].name+":"+allPlayers[plr].distance,150,displayPosition)
          }
      }
      if(keyIsDown(UP_ARROW)&&player.index!==null){
          player.distance+=50
          player.update()
      }
  }
}