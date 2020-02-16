<template>
    <div class="bg-image">
    
        <div class="button" style="color:#000;">
            <h3>Marmelade</h3>
                                
        </div>
        <div class="marmelade" style="width:100%;">
                <div class="container">
                    <div class="row">
                        <div class="col-3">
                            <div class="proivodMarmelada">
                                <img src="/images/marmelada1.png">
                                <input type="number" style="width:45px; height:24px; float: left;" value="10">
                                <input type="number" style="width:45px; height:24px; float: right;" value="10">
                                <h6>Marmelada od jagode</h6>
                                <h6>Količina:0.3kg Cijena: 50kn</h6>
                                <div class="button2" style="color:#000;">
                                <h6>Rezerviraj</h6>
                                </div>
                                <input type="number" style="width:30px; height:24px;">
                                <i class="fa fa-thumbs-up" style="font-size:18px;color:blue">79</i> 
                                <i class="fa fa-thumbs-down" style="font-size:18px;color:red">0</i>
                            </div>
                        </div>
                         <div class="col-3">  
                             <div class="proivodMarmelada">
                                <img src="/images/breskva.png">
                                <input type="number" style="width:45px; height:24px; float: left;" value="10">
                                <input type="number" style="width:45px; height:24px; float: right;" value="10">
                                <h6>Marmelada od breskve</h6>
                                <h6>Količina:0.3kg Cijena: 50kn</h6>
                                <div class="button2" style="color:#000;">
                                <h6>Rezerviraj</h6>
                                </div>
                                <input type="number" style="width:30px; height:24px;">
                                <i class="fa fa-thumbs-up" style="font-size:18px;color:blue">98</i> 
                                <i class="fa fa-thumbs-down" style="font-size:18px;color:red">4</i>
                            </div>     
                        </div>
                        <div class="col-3"> 
                            <div class="proivodMarmelada">
                                <img src="/images/smokva.png">
                                <input type="number" style="width:45px; height:24px; float: left;" value="10">
                                <input type="number" style="width:45px; height:24px; float: right;" value="10">
                                <h6>Marmelada od smokve</h6>
                                <h6>Količina:0.3kg Cijena: 50kn</h6>
                                <div class="button2" style="color:#000;">
                                <h6>Rezerviraj</h6>
                                </div>
                                <input type="number" style="width:30px; height:24px;">
                                <i class="fa fa-thumbs-up" style="font-size:18px;color:blue">171</i>
                                <i class="fa fa-thumbs-down" style="font-size:18px;color:red">2</i>
                            </div>
                        </div>
                        <div class="col-3">  
                            <div class="proivodMarmelada">
                                <img src="/images/malina.png">
                                <input type="number" style="width:45px; height:24px; float: left;" value="10">
                                <input type="number" style="width:45px; height:24px; float: right;" value="10">
                                <h6>Marmelada od maline</h6>
                                <h6>Količina:0.3kg Cijena: 50kn</h6>
                                <div class="button2" style="color:#000;">
                                <h6>Rezerviraj</h6>
                                </div>
                                <input type="number" style="width:30px; height:24px;">
                                <i class="fa fa-thumbs-up" style="font-size:18px;color:blue">95</i> 
                                <i class="fa fa-thumbs-down" style="font-size:18px;color:red">6</i>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-3">
                            
                        </div>
                         <div class="col-3">  
                             <div class="proivodMarmelada">
                                <img src="/images/šipak.png">
                                <input type="number" style="width:45px; height:24px; float: left;" value="10">
                                <input type="number" style="width:45px; height:24px; float: right;" value="10">
                                <h6>Marmelada od šipka</h6>
                                <h6>Količina:0.3kg Cijena: 50kn</h6>
                                <div class="button2" style="color:#000;">
                                <h6>Rezerviraj</h6>
                                </div>
                                <input type="number" style="width:30px; height:24px;">
                                <i class="fa fa-thumbs-up" style="font-size:18px;color:blue">45</i> 
                                <i class="fa fa-thumbs-down" style="font-size:18px;color:red">23</i>
                            </div>     
                        </div>
                        <div class="col-3"> 
                            <div class="proivodMarmelada">
                                <img src="/images/marelica.png">
                                <input type="number" style="width:45px; height:24px; float: left;" value="10">
                                <input type="number" style="width:45px; height:24px; float: right;" value="10">
                                <h6>Marmelada od marelice</h6>
                                <h6>Količina:0.3kg Cijena: 50kn</h6>
                                <div class="button2" style="color:#000;">
                                <h6>Rezerviraj</h6>
                                </div>
                                <input type="number" style="width:30px; height:24px;">
                                <i class="fa fa-thumbs-up" style="font-size:18px;color:blue">234</i> 
                                <i class="fa fa-thumbs-down" style="font-size:18px;color:red">12</i>
                            </div>
                        </div>
                        <div class="col-3">  
                            <div class="proivodMarmelada">
                                <div class="button3" style="color:#000;">
                                <router-link to="/mix"><h5>Napravi svoj marmelada mix</h5></router-link>
                                </div>
                                <div class="button4" style="color:#000;">
                                <router-link to="/nasiproizvodi"><h6>Natrag</h6></router-link>
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
    height: 80px;
    border-radius: 15px;
    width: 10em;
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
.button2{
    height:30px;
    border-radius: 20px;
    box-shadow: 5px 10px 18px black;
    font-size:30px;
    background-color:  rgba(191, 196, 173, 0.918);
    width: 80px;
    display:inline-block;
    text-align: center;
    
    
    
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
    margin-top:5px;
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
    text-align: center;
    vertical-align: middle;
    
    
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
    
    margin-top: 85px;
    margin-left:100px;
}
   

</style>