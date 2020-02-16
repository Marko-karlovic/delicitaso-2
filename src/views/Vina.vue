<template>
    <div>
        <div class="vino">
            <div class="button" style="color:#000;">
            <h1>Vina</h1>                 
            </div>
                <img src="/images/pozadinavina2.png">
            </div>
      
        <div class="tekst" style="width:100%;">
                <div class="container">
                    <div class="row">
                        <div class="col-4">
                            
                        </div>
                         <div class="col-6">       
                            <div class="container">
                                <div class="row">
                                    <div class="col-4">
                                        
                                        <img src="/images/char2.png" style="margin-right:40px;"><input type="number" style="width:45px; height:24px; float: left;" :value="brojVinaA"><div v-if="adminAuth"><input type="number" @click="Vino1" v-model="brojVinaA" style="width:45px; height:25px; float: right;" ></div>
                                             <div class="button1" style="color:#000;">
                                                 
                                             <router-link to="/opisvina"><h5>saznaj više</h5></router-link>
                                             
                                             </div>
                                             <div>
                                                  <button class="like" @click="like1">{{sumaLajkovaA}}<i class="fa fa-thumbs-up"  style="font-size:18px;color:blue"></i></button>
                                                 <button class="like" @click="like12">{{sumadisLajkovaA}}<i class="fa fa-thumbs-down"  style="font-size:18px;color:red"></i></button>


                                                </div>
                                        <form>
                                             <div class="button2" style="color:#000; width: 100px;">
                                                <h6>Rezerviraj</h6><input type="number" min="1" max="6" v-model="rezervacija1" @click="rezervacijaA">
                                            </div>
                                        </form>            
                                    </div>
                                    <div class="col-4">
                                        <img src="/images/gras3.png" style="margin-right:40px;"> <input type="number" style="width:45px; height:24px; float: left;" :value="brojVinaB"><input type="number" style="width:45px; height:25px; float: right;" value="10">
                                             <div class="button1" style="color:#000;">
                                                 
                                             <router-link to="/opisvina2"><h5>saznaj više</h5></router-link>
                                             
                                             </div>
                                             <div>
                                                 <i class="fa fa-thumbs-up" style="font-size:18px;color:blue">12345</i> 
                                                 <i class="fa fa-thumbs-down" style="font-size:18px;color:red">1234</i>
                                                </div>
                                             <form>
                                             <div class="button2" style="color:#000; width: 100px;">
                                                <h6>Rezerviraj</h6><input type="number" min="1" max="6" v-model="rezervacija2" @click="rezervacijaB">
                                            </div>
                                        </form>                  
                                    </div>
                                    <div class="col-4">
                                        <img src="/images/sov2.png" style="margin-right:40px;"> <input type="number" style="width:45px; height:24px; float: left;" value="10"><input type="number" style="width:45px; height:25px; float: right;" value="10">
                                             <div class="button1" style="color:#000;">
                                                 
                                             <router-link to="/opisvina3"><h5>saznaj više</h5></router-link>
                                             
                                             </div>
                                             <div>
                                                 <i class="fa fa-thumbs-up" style="font-size:18px;color:blue">12345</i> 
                                                 <i class="fa fa-thumbs-down" style="font-size:18px;color:red">1234</i>
                                                </div>
                                            <form>
                                             <div class="button2" style="color:#000; width: 100px;">
                                                <h6>Rezerviraj</h6><input type="number" min="1" max="6" v-model="rezervacija3" @click="rezervacijaC">
                                            </div>
                                        </form>                
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <img src="/images/grof2.png" style="margin-right:40px;"> <input type="number" style="width:45px; height:25px; float: left;" value="10"><input type="number" style="width:45px; height:25px; float: right;" value="10">
                                             <div class="button1" style="color:#000; ">
                                                 
                                             <router-link to="/opisvina4"><h5>saznaj više</h5></router-link>
                                             
                                             </div>
                                             <div>
                                                 <i class="fa fa-thumbs-up" style="font-size:18px;color:blue">12345</i> 
                                                 <i class="fa fa-thumbs-down" style="font-size:18px;color:red">1234</i>
                                                </div>
                                             <form>
                                             <div class="button2" style="color:#000; width: 100px;">
                                                <h6>Rezerviraj</h6><input type="number" min="1" max="6" v-model="rezervacija4" @click="rezervacijaD">
                                            </div>
                                        </form>              
                                    </div>
                                    <div class="col-4">
                                       <img src="/images/crni3.png" style="margin-right:40px;"> <input type="number" style="width:45px; height:25px; float: left;" value="10"><input type="number" style="width:45px; height:25px; float: right;" value="10">
                                             <div class="button1" style="color:#000;">
                                                 
                                             <router-link to="/opisvina5"><h5>saznaj više</h5></router-link>
                                             
                                             </div>
                                             <div>
                                                 <i class="fa fa-thumbs-up" style="font-size:18px;color:blue">12345</i> 
                                                 <i class="fa fa-thumbs-down" style="font-size:18px;color:red">1234</i>
                                                </div>
                                            <form>
                                             <div class="button2" style="color:#000; width: 100px;">
                                                <h6>Rezerviraj</h6><input type="number" min="1" max="6" v-model="rezervacija5" @click="rezervacijaE">
                                            </div>
                                        </form>              
                                    </div>
                                    <div class="col-4">

                                        <img src="/images/tram2.png" style="margin-right:40px;"> <input type="number" style="width:45px; height:25px; float: left;" value="10"><input type="number" style="width:45px; height:25px; float: right;" value="10">
                                             <div class="button1" style="color:#000; ">
                                                 
                                             <router-link to="/opisvina6"><h5>saznaj više</h5></router-link>
                                             
                                             </div>
                                             <div>
                                                   <i class="fa fa-thumbs-up" style="font-size:18px;color:blue">12345</i> 
                                                 <i class="fa fa-thumbs-down" style="font-size:18px;color:red">1234</i>
                                                </div>
                                             <form>
                                             <div class="button2" style="color:#000; width: 100px;">
                                                <h6>Rezerviraj</h6><input type="number" min="1" max="6" v-model="rezervacija6" @click="rezervacijaF">
                                            </div>
                                        </form>             
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="col-2"> 
                            <div class="button4" style="color:#000;">
                                <router-link to="/nasiproizvodi"><h5>Natrag</h5></router-link>
                                </div>
                        </div>
                    </div>
                </div>
        </div> 
    </div>  
         
   
</template>
<script>
import store from '@/store.js'
export default {
    data(){
      return store
    },
    mounted(){
    db.collection("vina").doc("vino1").get().then((doc)=>{
          this.brojVinaA = doc.data().kolicina;
          this.sumaLajkovaA = doc.data().kolicinaLajkova1;
           this.sumadisLajkovaA = doc.data().kolicinadisLajkova1;
      }).catch((error)=>{
          console.log(error)
      })
      
      
    },
    methods: {
        Vino1(){
            db.collection("vina").doc("vino1").set({
                kolicina: this.brojVinaA,
                kolicinaLajkova1: this.sumaLajkovaA,
                kolicinadisLajkova1: this.sumadisLajkovaA,
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
                
            
        },

        like1(){
            this.brojLajkovaA += 1;
            db.collection("vina").doc("vino1").get().then((doc)=>{
                if(doc.exists){
                    console.log("Data:", doc.data())
                this.sumaLajkovaA = doc.data().kolicinaLajkova1
                       db.collection("vina").doc("vino1").set({
                       kolicinaLajkova1: this.brojLajkovaA + this.sumaLajkovaA
                       })
                       .then(() => {
                       console.log("Document successfully updated!");
                       this.sumaLajkovaA = doc.data().kolicinaLajkova1 + this.brojLajkovaA
                       
                       })
                       .catch(function(error) {
    // The document probably doesn't exist.
                       console.error("Error updating document: ", error);
                       });
                }else{
                    console.log("No such document!");
                }
            })
            .catch(function(error) {
    console.log("Error getting document:", error);
});
        },
          like12(){
            this.brojdisLajkovaA += 1;
            db.collection("vina").doc("vino1").get().then((doc)=>{
                if(doc.exists){
                    console.log("Data:", doc.data())
                this.sumadisLajkovaA = doc.data().kolicinadisLajkova1
                       db.collection("vina").doc("vino1").set({
                       kolicinadisLajkova1: this.brojdisLajkovaA + this.sumadisLajkovaA
                       })
                       .then(() => {
                       console.log("Document successfully updated!");
                       this.sumadisLajkovaA = doc.data().kolicinadisLajkova1 + this.brojdisLajkovaA
                       
                       })
                       .catch(function(error) {
    // The document probably doesn't exist.
                       console.error("Error updating document: ", error);
                       });
                }else{
                    console.log("No such document!");
                }
            })
            .catch(function(error) {
    console.log("Error getting document:", error);
});
        },
        rezervacijaA(){
            
            this.brojVinaA -= this.rezervacija1
            db.collection("vina").doc("vino1").set({
                kolicina: this.brojVinaA
            })

         },
         rezervacijaB(){
             this.brojVinaB=10
            this.brojVinaB -= this.rezervacija2
            db.collection("vina").doc("vino2").set({
                kolicina: this.brojVinaB
            })

         },
         rezervacijaC(){
             this.brojVinaC=10
            this.brojVinaC -= this.rezervacija3
            db.collection("vina").doc("vino3").set({
                kolicinaC: this.brojVinaC
            })

         },
         rezervacijaD(){
             this.brojVinaD=10
            this.brojVinaD -= this.rezervacija4
            db.collection("vina").doc("vino4").set({
                kolicinaD: this.brojVinaD
            })

         },
         rezervacijaE(){
             this.brojVinaE=10
            this.brojVinaE -= this.rezervacija5
            db.collection("vina").doc("vino5").set({
                kolicinaE: this.brojVinaE
            })

         },
         rezervacijaF(){
             this.brojVinaF=10
            this.brojVinaF -= this.rezervacija6
            db.collection("vina").doc("vino6").set({
                kolicinaF: this.brojVinaF
            })

         }   
          
        
        
    }
}


 

</script>

<style lang="scss" scoped>

.like{
    all:unset;
}
.vino{
    display:left;
    height: 5em;
    border-radius: 15px;
    width: 10em;
    margin-bottom:3em;
    
   
}

.naslov {
font-size: 60px;
 font-family: 'Playfair Display', serif;
 margin-bottom: 30px;
}


 .tekst {
     font-size: 26px;
     font-family: 'Playfair Display', serif;
}

i{
    display: inline-block;
    margin:5px;
    font-size:15px;
    
}



.button1{
    height:30px;
    border-radius: 15px;
    box-shadow: 5px 10px 18px black;
    font-size:1em;
    
    background-color:  rgba(230, 236, 202, 0.918);
    
    width: 140px;
    display: inline-block;
    
}
.button2{
    height:70px;
    border-radius: 15px;
    
    font-size:1em;
    
     background-color:  rgba(202, 206, 184, 0.918);
    width: 140px;
    display: inline-block;
    
}
h4 {
    color:black;
}
.button4{
    
    height: 40px;
    border-radius: 10px;
    width: 5em;
      background-color: rgba(10, 148, 10, 0.918);
    box-shadow: 5px 10px 18px black;
    margin-top:800px;
    margin-left:60px;
    
    
}
h5{
    text-decoration: none;
    color:black;
    
}
.button{
    display:left;
    height: 70px;
    border-radius: 15px;
    width:20em;
      background-color: rgba(10, 148, 10, 0.918);

    box-shadow: 5px 10px 18px black;
}
h1{
    margin-top:4px;
}
input[type=number]{
    width: 38px;
    height: 34px;
    display:inline-block;
    
} 

</style>