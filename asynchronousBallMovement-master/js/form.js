class Form {
constructor(){
    
    this.input=createInput("name")
    this.button=createButton('play')
     this.greeting= createElement('h2')
}
hide(){
    this.button.hide()
    this.greeting.hide()
    this.input.hide()
}
display(){
    var title=createElement('h1')
   title.html("Car Race") 
   title.position(200,50)
   
   this.input.position(200,200)
  
   this.button.position(250,250)
   
   this.button.mousePressed(()=>{
      this.input.hide()
       this.button.hide()
       player.name=this.input.value()
       playerCount+=1
       player.index=playerCount
       player.update()
       player.updateCount(playerCount)
       this.greeting.html("Hello"+player.name)
       this.greeting.position(200,200)
   })
}
}
