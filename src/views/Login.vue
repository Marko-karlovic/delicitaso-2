<template>

   <div class="hero-image2">
  <div class="row">
    <div class="col">
      <h1 class="text-center mb-5" >Prijava</h1>
    </div>
  </div>
  <div class="hero-image5"> </div>
  <div class="row">
    <div class="col"></div>
    <div class="col">
  
      <form @submit.prevent="signin">
        <div class="form-group">
          <label for="emailField">Email adresa</label>
          <input v-model="email" type="email" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Unesi svoj email">
          <small id="emailHelp" class="form-text-text-muted">Već si registriran? Prijavi se ovdje</small>
        </div>
        <div class="form-group">
          <label for="passwordField">Lozinka</label>
          <input v-model="password" type="lozinka" class="form-control" id="passwordField" placeholder="Lozinka">
        </div>
          <button type="submit" class="btn btn-primary mt-5">Prijava</button> </form>
        <router-link class="buttonnatrag" to="/">Natrag</router-link>
    </div>
    
    <div class="col"></div>
  </div>
</div>

</template>



<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signin () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        console.log(error);
      });
    }
  }
}
</script> 

<style>
.hero-image2 {
  background-image: url("/images/pozadina_prijava.jpg");
    height: 770px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}



   .text-center {
     font-family: 'Playfair Display', serif;
     font-size:4em;
    
     margin-top: 20px;


   }

.form-group {
  color:black;
}

.form-text {
  color:black;
}
.buttonnatrag {
    color: black;
  font-size: 1.3em;
    background-color: white;
    
}
 
    
.btn {

  color:black;
   font-size: 1.3em;
   background-color: white;
   
 

}

</style>