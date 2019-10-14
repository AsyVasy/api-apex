<template>
    <div class="stats">
      <div class="profil">
        <h2>profil</h2>
        <p>Stats de: {{ pseudo }} </p>
        <p>plateforme: {{platform}} </p>
        <p>Country: {{countryCode}} </p>
        <img :src="avatar" />
  
        <br><br>
        <input type="text" placeholder="pseudo" v-model="pseudoReSearch">
        <select name="plateforme" id="plateforme" v-model="platformResearch">
          <option value="pc">PC</option>
          <option value="psn">PS4</option>
          <option value="xb1">XBOX ONE</option>
        </select>
        <select name="region" id="region" v-model="regionReSearch">
          <option value="eu">Eu</option>
          <option value="us">Us</option>
          <option value="global">Global</option>
          <option value="cn">Cn</option>
          <option value="kr">Kr</option>
        </select>
        <button @click="overwatch">Rechercher</button>    
      </div>
 

    
   
        <p>{{ username}}</p>
        <p>{{  level}}</p>
        <p>{{ portrait }}</p>
        <p>{{games}}</p>
        <p>{{playtime}}</p>
        <p>{{competitive}}</p>
        <p>{{levelFrame}}</p>
        <p>{{star }}</p> 
        
    
    </div>
</template>
<script>
    import axios from 'axios'
    
    export default {
    
        data() {
    
            return {
                platformResearch: 'psn',
                // platformResearch: null,
                // pseudoReSearch: null,
                pseudoReSearch: 'Nunes-kun',
                regionReSearch: 'eu',
                // regionReSearch: null,
    
                stat: {},

                username: null,
                level: null,
                portrait: null,
                games: null,
                playtime: null,
                competitive: null,
                levelFrame: null,
                star: null,
               

    


                self: this
    
            }
    
        },
        methods: {
            overwatch() {
              console.log("obj");
                console.log(this.pseudoReSearch)
                console.log(this.platformResearch)
                console.log(this.regionReSearch)
                 var self = this;
                axios.post('http://localhost:8888/overwatch', {
                    pseudo: this.pseudoReSearch ,
                    platform: this.platformResearch,
                    region: this.regionReSearch
                })
                .then(function(response) {
                    console.log('res => ', response)
                    console.log('self => ', self)
                    
                    self.stat = response.data
                    self.username = response.data.username
                    self.level = response.data.level
                    self.portrait = response.data.portrait
                    self.games = response.data.games
                    self.playtime = response.data.playtime
                    self.competitive = response.data.competitive
                    self.levelFrame = response.data.levelFrame
                    self.star = response.data.star

                })

            }
        },
    
        updated() {
    
            console.log("store pseudoReSearch" + this.$store.state.pseudoReSearch)
    
            console.log(this.$store.state.platformResearch)
            this.$store.state.pseudoReSearch = this.pseudoReSearch
            this.$store.state.platformResearch = this.platformResearch
        },
    
    
    }
</script>
<style scoped lang="scss">
    .stats {
    
        display: flex;
    
        flex-wrap: wrap
    
    }
</style>


