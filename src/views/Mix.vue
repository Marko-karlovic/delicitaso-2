<template>
    <div class="bg-image">
    
        <div class="button" style="color:#000;">
            <h3>Napravi svoj marmelada mix</h3>
            
        </div>
        <div class="marmelade" style="width:100%;">
                <div class="container">
                    <div class="row">
                        <div class="col-3">
                           <div class="button5" style="color:#000;">
                                <h5>Izaberi svoje sastojke!</h5>
                             </div> 
                        </div>
                         <div class="col-3">  
                             <div class="button1" style="color:#000;">
                                <h4>Jagoda</h4>
                            </div>  
                            <div class="button1" style="color:#000;">
                                <h4>Breskva</h4>
                            </div>     
                            <div class="button1" style="color:#000;">
                                <h4>Smokva</h4>
                            </div>
                            <div class="button1" style="color:#000;">
                                <h4>Malina</h4>
                            </div>  
                            <div class="button1" style="color:#000;">
                                <h4>Šipak</h4>
                            </div> 
                            <div class="button1" style="color:#000;">
                                <h4>Marelica</h4>
                            </div>                    
                        </div>
                        <div class="col-3"> 
                            <div class="button5" style="color:#000;">
                                <h5>Tvoji sastojci!</h5>
                             </div>
                             <div class="button2" style="color:#000;">
                                <h4>Napravi</h4>
                            </div>                     
                        </div>
                        <div class="col-3">  
                            <div class="proivodMarmelada">
                                
                                <div class="button4" style="color:#000;">
                                <router-link to="/marmelade"><h6>Natrag</h6></router-link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
        </div>
         
   </div>
</template>

<style lang="scss" scoped>
.bg-image {
  /* The image used */
  background-image: url("/images/voce1.jpg");
  
  
  
  /* Full height */
  height: 100%; 
  
  /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

.button{
    display:left;
    height: 70px;
    border-radius: 15px;
    width: 20em;
      background-color: rgba(230, 236, 202, 0.918);
    font-size: 2em;
    box-shadow: 5px 10px 18px black;
    line-height: 80px;
    margin-bottom: 50px;
    margin-top: 20px;
   
}
 h3 {
      line-height: 80px;
      margin-bottom:100px;
      margin-right:20px;
      
}
.button1{
    height:50px;
    border-radius: 10px;
    box-shadow: 5px 10px 18px black;
    font-size:1em;
    margin:15px;
    background-color:  rgba(230, 236, 202, 0.918);
    
  
}
.button1:hover{
    background-color: rgba(5, 14, 145, 0.774);
}
.button2{
    height:50px;
    border-radius: 10px;
    box-shadow: 5px 10px 18px black;
    font-size:1.2em;
    margin-top:120px;
    margin-left: 40px;
    background-color:  rgba(230, 236, 202, 0.918);
    width: 130px;
    
    
    
}
.button2:hover{
    background-color: rgba(180, 6, 6, 0.774);
}
i{
    display: inline-block;
    padding:5px;
    font-size:15px;
}
img{
    display: inline-block;
    margin-top: 10px;
}
h6{
    margin-top:450px;
}
.button3{
    display:right;
    height: 120px;
    border-radius: 10px;
    width: 10em;
      background-color: rgba(230, 236, 202, 0.918);
    font-size: 2em;
    box-shadow: 5px 10px 18px black;
    line-height: 120px;
    margin-bottom: 50px;
    margin-top: 100px;
   
    
    
   }
h5{
   color: red;
   
   
}
.button4{
    
    height: 40px;
    border-radius: 10px;
    width: 8em;
      background-color: rgba(230, 236, 202, 0.918);
    box-shadow: 5px 10px 18px black;
    line-height: 40px;
    margin-bottom: 50px;
    margin-top: 20px;
    margin-left:100px;
}

.button5{
    display:left;
    height: 120px;
    border-radius: 10px;
    width: 6em;
      background-color: rgba(230, 236, 202, 0.918);
    font-size: 2em;
    box-shadow: 5px 10px 18px black;
    line-height: 120px;
    margin-bottom: 50px;
    margin-top: 100px;
   
    
    
   }
   

</style>