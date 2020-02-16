<template>

   <div class="hero-image">
  <div class="row">
    <div class="col">
      <h1 class="text-center mb-5">Registracija</h1>
    </div>
  </div>
  <div class="row">
    <div class="col"></div>
    <div class="col">
      <form @submit.prevent="signup">
        <div class="form-group">
          <label for="emailField">Email adresa</label>
          <input v-model="email" type="email" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="E-mail adresa">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="passwordField">Lozinka</label>
          <input v-model="password" type="password" class="form-control" id="passwordField" placeholder="Lozinka">
        </div>
        <div class="form-group">
          <label for="confirm password">Potvrdi lozinku</label>
          <input v-model="confirm_pasword" type="confirm_pasword" class="form-control" id="confirm_paswordField"  placeholder="Potvrdi lozinku">
        </div>
        <div class="form-group">
          <label for="gradField">Grad</label>
          <input v-model="grad" type="text" class="form-control" id="gradField"  placeholder="Grad">
        </div>
        <button type="submit" class="btn btn-primary mt-5">Potvrdi</button>
      </form>
    </div>
    <div class="col"></div>
  </div>
  <router-link class="buttonnatrag" to="/">Natrag</router-link>
</div>
</template>

<style >
.text-center {
     font-family: 'Playfair Display', serif;
     font-size:4em;
     margin-top: 20px;
     }
     

    .hero-image {
  background-image: url("/images/registracija.jpg");
    height: 770px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
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

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirm_pasword: '',
      grad: '',
    }
  },
  methods: {
    signup () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        console.log(error);
      });
      db.collection("korisnici").doc(this.email).set({
                email: this.email,
                lozinka: this.password,
                
                grad: this.grad
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
      
    }
  }
}
</script>
