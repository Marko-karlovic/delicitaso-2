<template>
  <div id="app">
   
      <!--ovdje idu poveznice koje smo napravili u router folderu -> index.js fileu -->
      
 
    <router-view/>
  </div>
</template>
 <script>
 
import store from '@/store.js'
  export default {
    data(){
      return store
    },
    mounted(){
      const self = this
      firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.userEmail = user.email;
        self.korisnikAuth = true;
        console.log(`Prijavljen: ${user.email}`)
          if("markokarlovic123@gmail.com"===self.userEmail){
            self.adminAuth=true;
            if(self.adminAuth===true){
              console.log("Administrator prijavljen")
            }
          }
      }
      else{ 
        self.korisnikAuth = false
        console.log('Odjavljen')
        if(self.$route.name !== 'login')
           self.$router.push({name: 'login'}).catch(error=>console.log(error))
      }
    });
    }
  }
</script> 

<style lang="scss">
/*ovdje se pise CSS kod, unutar <style lang="scss"> taga
  *nothing*(ime taga) { css kod }
  .(naziv klase taga) { css kod }
  #(id taga) { css kod }
*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
