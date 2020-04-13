

var content = [
  { title: 'Dosa' },
  { title: 'Idly' },
  { title: 'Pongal' },
  { title: 'Poori' },
  { title: 'Upma' },
  { title: 'Kesari' },
  { title: 'Thandoori' },
  { title: 'Mushroom' },
  { title: 'Noodles' },
  { title: 'Briyani' },
  { title: 'Chicken 65' },
  { title: 'Cauliflower chilli' },
  { title: 'Chilli Parotta' },
  { title: 'Meals' },
  { title: 'Fried Rice' },
  { title: 'Chicken Rice' },
  { title: 'Fish fry' },
  { title: 'Salad' },
  { title: 'Juice' },
  { title: 'Milkshake' },
  { title: 'Parotta' },
  { title: 'Beef' },
  { title: 'prawn' },
  { title: 'Roast' }
  // etc
];
$('.ui.search')
  .search({
    source: content
  })
;

