window.onload = function () {

new Vue({
  el: '#foods',
  data: {
  	filterCuisine: '', 
  	total: 0,
  	change: 0,
    parentMessage: 'Parent',
    items: [
//french
{ id: '0', name: 'Baked French cake', desc:'Fresh French Cream', price:10, type:'Pure Veg', cuisine:'French',image:'images/french/french_cuisine.jpg' },
{ id: '1', name: 'Chocolate Souffle', desc:'Crispy French Potato', price:2, type:'Pure Veg', cuisine:'French',image:'images/french/chocolate.jpg' },
{ id: '2', name: 'Paris Steak', desc:'Crispy French Potato', price:5, type:'Non-Veg', cuisine:'French',image:'images/french/french_steak.jpg' },
{ id: '3', name: 'Ratatouille', desc:'Crispy French Potato', price:8, type:'Non-Veg', cuisine:'French',image:'images/french/ratatouille.jpg' },
{ id: '4',name: 'Noodle soup',desc:'gravy with noodles',price:10,type:'Pure Veg',cuisine:'Thai',image:'images/thai/thai1.jpg' },
	
 //greek
{ id: '5', name: 'Taramasalata', desc:'yogurt cucumber and garlic', price:2.5, type:'Pure Veg', cuisine:'Greek', image:'images/greek/greek1.jpg' }, 
{ id: '6', name: 'Dolmades', desc:'vineleaf parcel', price:6, type:'Pure Veg', cuisine:'Greek', image:'images/greek/greek2.jpg' },
{ id: '7', name: 'Grilled meat', desc:'Favorite greek food', price:8, type:'Non-Veg', cuisine:'Greek', image:'images/greek/greek3.jpeg' },
{ id: '8', name: 'Fresh fish', desc:'fish and calmari', price:4, type:'Non-Veg', cuisine:'Greek', image:'images/greek/greek4.jpg' },
{ id: '9', name: 'Octopus', desc:'Grilled', price:10, type:'Non-Veg', cuisine:'Greek', image:'images/greek/greek5.jpg' },

//italian	
{ id: '10', name: 'Bottarga', desc:'smoked_eggs ', price:9, type:'Pure Veg', cuisine:'Italian', image:'images/italian/italian1.jpg' }, 
{ id: '11', name: 'Pizza', desc:'Italian homemade ', price:6, type:'Pure Veg', cuisine:'Italian', image:'images/italian/italian2.jpg' }, 
{ id: '12', name: 'Lasanga', desc:'creamy bechemel', price:5, type:'Pure Veg', cuisine:'Italian', image:'images/italian/italian3.jpg' }, 
{ id: '13', name: 'Grilled Pork', desc:'Pork meat', price:4, type:'Non-Veg', cuisine:'Italian', image:'images/italian/italian4.jpg' }, 
{ id: '14', name: 'Rissoto', desc:'chicken curry', price:3, type:'Non-Veg', cuisine:'Italian', image:'images/italian/italian5.jpg' }, 

//chinese
{ id: '15', name: 'Spring rolls', desc:'Festival appetizer', price:5, type:'Pure Veg', cuisine:'Chinese', image:'images/chinese/chinese1.jpg' },
{ id: '16', name: 'Dumplings', desc:'boiled veggies', price:6, type:'Pure Veg', cuisine:'Chinese', image:'images/chinese/chinese2.jpg' },
{ id: '17', name: 'chow mein', desc:'fried rice with noodles', price:5, type:'Pure Veg', cuisine:'Chinese', image:'images/chinese/chinese3.jpg' },
{ id: '18', name: 'kung pao chicken', desc:'chicken stir-fried', price:8, type:'Non-Veg', cuisine:'Chinese', image:'images/chinese/chinese4.jpg' },
{ id: '19', name: 'spicy tofu', desc:'meat', price:12, type:'Non-Veg', cuisine:'Chinese', image:'images/chinese/chinese5.jpg' }, 


//indians
{ id: '20', name: 'Thali', desc:'various indian foods', price:10, type:'Pure Veg', cuisine:'Indian', image:'images/indian/indian1.jpg' },
{ id: '21', name: 'Parotta', desc:'favorite in every state of india', price:12, type:'Pure Veg', cuisine:'Indian', image:'images/indian/indian2.jpg' },
{ id: '22', name: 'Briyani', desc:'meat cooked with rice', price:11, type:'Non-Veg', cuisine:'Indian', image:'images/indian/indian3.jpg' },
{ id: '23', name: 'Dosa', desc:'spicy flavoured served with curry', price:17, type:'Pure Veg', cuisine:'Indian', image:'images/indian/indian4.jpg' },
{ id: '24', name: 'Idly', desc:'Traditional south indian dish', price:12, type:'Pure Veg', cuisine:'Indian', image:'images/indian/indian5.jpg' }
    
],
    cart: [],
    meat: 0,
    veg: 0,
    searchText: '',
    filteredSongs: null,
   
    
  },
  beforeMount() {
    this.filteredSongs = this.items;
  },

  beforeUpdate() {
 
  	this.filteredSongs = this.items	
  	if(this.searchText)
  	{
  		this.filteredSongs = this.filteredSongs.filter(item => item.name.toLowerCase().includes(this.searchText.toLowerCase())) 	
  	}
    if(this.meat)
    {
    	this.filteredSongs = this.filteredSongs.filter(item => item.type.includes('Non-Veg')) 	
    }
    else if(this.veg)
    {
    	this.filteredSongs = this.filteredSongs.filter(item => item.type.includes('Pure Veg')) 	
    }
    if(this.filterCuisine)
  	{
  		this.filteredSongs = this.filteredSongs.filter(item => item.cuisine.toLowerCase().includes(this.filterCuisine.toLowerCase())) 	
  	}


  },
   methods: {
   
    addCart: function (id) {
   		this.cart.push(this.items[id]); // what to push unto the rows array?
   		this.total += this.items[id].price;
   		console.log(event.target.value)

    },

    deleteCart: function (name) {
    	index = this.cart.findIndex(x => x.name === name)
   		this.total -= this.cart[index].price;
   		this.cart.splice(index, 1)
    },

    filt: function (id) {
   		this.filterCuisine = id;
    },

    sidebar: function (id) {
   		console.log("Side")
    },

  }
})
}
//


