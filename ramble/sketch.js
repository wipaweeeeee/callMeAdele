//note: json file has been modified to keep my relationship private

var r = new Rune({
  container: "#canvas",
  width: 300,
  height: 300,
  debug: false,
});

    $.ajax({url: "/json/chat.json", success: function(result){

        var x = 0;
        var y = 0;
        var xt = 0;
        var yt = 0;

       for( var i = 0; i < result.length; i++) {

            if (result[i].FIELD1.length != 0) {
                who = result[i].FIELD2;
                text = new RiString(result[i].FIELD3);

                if( who == "Wip") {
                    r.rect(x,y,2,text.length())
                     .stroke(false)
                     .fill(180)

                    if( y > r.height) {
                      x += 3;
                      y = 0;
                      r.rect(x,y,2,text.length())
                       .stroke(false)
                       .fill(180)
                    }
                } 

                if( who == "Him") {
                    r.rect(xt,yt,2,text.length())
                     .stroke(false)
                     .fill(0)

                    if( yt > r.height) {
                      xt += 3;
                      yt = 0;
                      r.rect(xt,yt,2,text.length())
                       .stroke(false)
                       .fill(0)
                    }
                } 
                y+=text.length();
                yt+=text.length();
                    
          }
                        
        }

    r.draw();
    
    }}); 




