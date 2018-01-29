var nav = new Vue({
  el: "#nav",
  data: {
    showmenu: false,
    showchild1: false
    },
  methods: {
    toggleMenu: function() {
     this.showmenu = !this.showmenu
     console.log(this.showmenu)
    },
    showMenu: function (e, event) {
    	console.log(e)
    	if(e==1){
    		this.showchild1 = !this.showchild1
    	}
    }
  }
})
