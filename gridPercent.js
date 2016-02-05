var grid = document.getElementsByClassName('grid');		// this returns an array of matching elements
for(var i = 0; i < grid.length; i++) {								// traversing the array
  var gridAttr = grid[i].getAttribute('data-grid');
  grid[i].style.width = gridAttr + '%';								// changing the width as per data attribute 
}