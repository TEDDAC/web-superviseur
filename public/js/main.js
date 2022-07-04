const { createApp } = Vue

createApp({
  data() {
    return {
      configs: [],
    }
  },
  methods: {
    getAllConfig: function(){
      let array = JSON.parse(localStorage.getItem('data'));
      if(array !== null && array !== undefined){
        this.configs = array;
      }
      else this.configs = [];
    },
    saveConfigs: function(){
      localStorage.setItem('data',JSON.stringify(this.configs));
    },
    removeItem: function(config){
      let index = this.configs.indexOf(config);
      if(index !== -1){
        this.configs.splice(index,1);
      }
    },
    addItem: function(){
      this.configs.push({nom: 'Nouveau',lien:'https://example.com',frequence:1,duree:1});
    },
  },
  mounted: function(){
    this.getAllConfig();
  }
}).mount('#app')