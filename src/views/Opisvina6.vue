<template>
 
    <div>
       <div class="hero-image">
        <div class="tekst" style="width:100%;">
                <div class="container">
                    <div class="row">
                        <div class="col-3">
                            <div class="">
                                
                            </div>
                        </div>
                         <div class="col-6">       

                    <div class="naslov">
                                 <h>
                                    Traminac- izborna berba 
                                     </h>
                                 </div>
                             <div class="tekst">

            
                             <p>Sadržaj:   0.25l</p>
                             <p>Alkohol:  11,8 vol°% </p>
                             <p>Kakvoća: Predikatno</p>
                             <p>Tip vina: slatko</p>

                            <p>Vrhunsko vino zlatne boje s mirisom koji podsjeća na raskošne divlje latice šipkove ruže te južnog voća. 
   
                            </p>
<p>Najbolje ide uz jela: sušeno voće, deserti i čokolade.</p>
<p>Temperatura serviranja: 10-12°C  </p>

                             <div class="natrag1" style="width: 320px;">
                             Cijena: 150kn
                             </div>
                            </div>
                        </div>
                        <div class="col-3"> 
                        </div>
                        <div>  
                        </div>
                    </div>
                </div>
        </div> 
      <p>
          </p>
        <router-link class="natrag" style="width: 3em;" to="vina">Natrag</router-link>
        </div>
         
        </div>  
    
</template>

<style lang="scss" scoped>


 .hero-image{
    background-image: url("/images/opisvinatram.jpg");
    height: 770px;
    background-position:bottom;
    background-repeat: no-repeat;
    background-size: cover;
    position:fixed;
  }
   


.naslov {
font-size: 43px;
 font-family: 'Playfair Display', serif;
 margin-bottom: 30px;
 margin-left: 2em;
}


 .tekst {
     font-size: 23.25px;
     font-family: 'Playfair Display', serif;
     margin-left:5em;
     
}

i{
    display: inline-block;
    padding:5px;
    font-size:15px;
    
}
img{display: inline-block;}

.natrag {
    
    color: black;
  font-size: 2.7em;
    font-family: 'Playfair Display', serif;
    text-decoration: none;
    background-color:  rgba(230, 236, 202, 0.918);
    margin-left:8.5em;
    
}

.natrag1 {
    
    color: black;
  font-size: 1.3em;
    font-family: 'Playfair Display', serif;
    text-decoration: none;
    background-color: white;
    border: 1.5px solid black;
    margin-left: 1.8em;

}
  
  .natrag:hover{
   
    background-color: rgb(206, 255, 92);
    width:100px;
    transition: 1s;}


</style>