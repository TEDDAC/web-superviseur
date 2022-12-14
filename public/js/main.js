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
    removeItem: function(index){
      this.configs.splice(index,1);
    },
    addItem: function(){
      this.configs.push({nom: 'Nouveau',lien:'https://example.com',frequence:1,duree:1,nextDateTimeTriggered:Date.now()});
    },
    execute: function(){
      runTab(this.configs);
    },
    moveUp: function(index){
      if(index > 0){
        let buf = this.configs[index];
        this.configs[index] = this.configs[index-1];
        this.configs[index-1] = buf;
      }
    },
    moveDown: function(index){
      if(index < this.configs.length-1){
        let buf = this.configs[index];
        this.configs[index] = this.configs[index+1];
        this.configs[index+1] = buf;
      }
    }
  },
  mounted: function(){
    this.getAllConfig();
  }
}).mount('#app')