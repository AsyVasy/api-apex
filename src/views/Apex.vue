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
        <button @click="voila">Rechercher</button>    
      </div>
 

    
        <p> {{ platformInfo }}</p>
        <p> {{ userInfo }}</p>
        <p> {{ metadata }}</p>
        <p> {{ segments }}</p>
        <p> {{ availableSegments }}</p>
   >
        <!-- <p> {{ stat }}</p> -->
        
    
    </div>
</template>
<script>
    import axios from 'axios'
    
    export default {
    
        data() {
    
            return {
                platformResearch: null,
                pseudoReSearch: null,
    
                stat: {},
    
                platformInfo: null,
                pseudo: null,
                platform: null,
                avatar: null,

                userInfo: null,
                countryCode: null,

                metadata: null,
                currentSeason: null,
                activeLegend: null,
                activeLegendName: null,

                segments: null, 


                availableSegments: null,



    

    


                self: this
    
            }
    
        },
        methods: {
            voila() {
              console.log("obj");
                console.log(this.pseudoReSearch)
                console.log(this.platformResearch)
                 var self = this;
                axios.post('http://localhost:8888/apex', {
                    pseudo: this.pseudoReSearch ,
                    platform: this.platformResearch
                })
                .then(function(response) {
                    console.log('res => ', response)
                    console.log('self => ', self)
                    
                    self.stat = response

                    self.platformInfo = response.data.data.platformInfo
                    self.pseudo = response.data.data.platformInfo.platformUserId;
                    self.platform = response.data.data.platformInfo.platformSlug
                    self.avatar = response.data.data.platformInfo.avatarUrl

                    self.userInfo = response.data.data.userInfo
                    self.countryCode = response.data.data.userInfo.countryCode

                    self.metadata = response.data.data.metadata
                    self.currentSeason = response.data.data.metadata.currentSeason
                    self.activeLegend = response.data.data.metadata.activeLegend
                    self.activeLegendName = response.data.data.metadata.activeLegendName
                    
                    self.segments = response.data.data.segments
                    
                    self.activeLegendName = response.data.data.availableSegments
                    

    
                    // self.soloAllTime = response.data.stats.p2;
    
                    // self.duoAllTime = response.data.stats.p10;
    
                    // self.squadAllTime = response.data.stats.p9;
    
    
                    // self.lifeTimeStat = response.data.lifeTimeStats;
    
                    // self.soloCurrentSeason = response.data.stats.curr_p2;
    
                    // self.duoCurrentSeason = response.data.stats.curr_p10;
    
                    // self.squadCurrentSeason = response.data.stats.curr_p9;
    
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


