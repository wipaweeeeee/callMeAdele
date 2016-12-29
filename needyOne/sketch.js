//note: json file has been modified to keep my relationship private

var r = new Rune({
  container: "#canvas",
  width: 300,
  height: 300,
  debug: true,
});

var who;

$.ajax({url: "/json/chat.json", success: function(result){

  var x = 10;
  var y = 0;
  var xt = 10;
  var yt = 5;

	for( var i = 0; i < result.length; i++) {

		if (result[i].FIELD1.length != 0) {
			who = result[i].FIELD2;

  		if( who == "Wip") {
        r.rect(x,y,1,10)
         .stroke(false)
         .fill(0)
        x++;

         if( x > r.width-10) {
          x = 10;
          y+=13;
          r.rect(x,y,1,10)
           .stroke(false)
           .fill(0)
         }
  		} 
      x++;

  		if ( who == "Him") {
  			r.ellipse(xt,yt,3,3)
         .stroke(false)
         .fill(0)

         xt++

         if( xt > r.width-10) {
          xt = 10;
          yt+=13;
          r.ellipse(xt,yt,3,3)
           .stroke(false)
           .fill(0)
         }
      } 
      xt++;	
		}
	}

r.draw();

}});



