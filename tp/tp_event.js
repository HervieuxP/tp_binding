Vue.createApp({
    data(){
        return {
            text: '',
            textEchap: '',
            montrerText: false
          }    
    },
    methods: {
        updateText(event) {
          this.text = event.target.value
        },
        checkKey(eventEchap) {
            this.text1 = eventEchap.target.value
            if (eventEchap.key === "Escape") {
              this.montrerText = true
            }
        },
        Alerte() {
            alert("ALERTE ROUGE")
          }
    }
    
}).mount('#monApp');