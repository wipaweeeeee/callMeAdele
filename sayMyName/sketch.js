//note: json file has been modified to keep my relationship private

var r = new Rune({
  container: "#canvas",
  width: 300,
  height: 300,
  debug: false,
});

$.ajax({url: "/json/chat.json", success: function(result){

        var allText = [];

        for(var i = 0; i < result.length; i++) {
          if(result[i].FIELD1.length != 0) {
            var who = result[i].FIELD2;

            if( who == "Him") {
              text = result[i].FIELD3;
              if ( text !== "[Sticker]") {
                allText.push(text);
              }
            }
          }
        }

        var x = 10;
        var y = r.height - 10;
        var count = 0;

        for (var i = 0; i < allText.length; i++) {
          if(allText[i].indexOf("Wip") != -1 || allText[i].indexOf("wip") != -1) {
                r.ellipse(x,y,5,5)
                 .stroke(false)
                 .fill(0)
                 
                if( x > r.width ) {
                    x = 10 + Math.random() * 10;
                    y-=10;
                    r.ellipse(x,y,5,5)
                     .stroke(false)
                     .fill(0)
                }

                count++;

            } x++;
        }

  r.draw();
        	
}}); 




