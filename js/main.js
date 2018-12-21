  function pickLI() {
      //                  alert("dsdsd");
      var list = $("ul li").toArray();
      //            console.log(list);
      var elemlength = list.length;
      randomnum = Math.floor(Math.random() * elemlength);
      //            console.log(Math.random()* elemlength);
      var randomitem = list[randomnum];
      //      $(randomitem).css("background-color", "mediumpurple");
      //      $(randomitem).css("background-color", "pink");
      //      
      console.log(elemlength + "---" + randomnum);
      $(randomitem).addClass('li-bg').delay(1000).queue(function () {
          $(this).removeClass('li-bg');
          //          alert("gyd");
//          setInterval("pickLI()", 3000);
          
          pickLI();

          
      });
      //      setInterval("pickLI()", 2000);
      //      $(randomitem).delay(2000).queue(function () {
      //          $(randomitem).css("background-color", "");
      //      });
      //      $(randomitem).delay(function () {
      //          alert("sdsd");
      //          console.log("dsss");
      //      }, 2000, 'Hello');
      //      click(function () {
      //                var scoreValue = $("#score").text();
      //                var scorenum = parseInt(scoreValue);
      //                var setScoreValue = $("#score").text(scorenum + 1);
      //                console.log($(this));
      //                $(this).css("background-color", "");
      //            })
      //            $(randomitem).click(function () {
      //                var scoreValue = $("#score").text();
      //                var scorenum = parseInt(scoreValue);
      //                var setScoreValue = $("#score").text(scorenum + 1);
      //                console.log($(this));
      //                $(this).css("background-color", "");
      //            });
      //            var myfunc = setInterval("pickLI()", 3000);
      //            setInterval(greet, 1000, randomGreeting);
  }
  //  function doSomethingElse() {
  //      alert("Pchi");
  //  }
  //        function clicked() {
  //            var scoreValue = $("#score").text();
  //            var scorenum = parseInt(scoreValue);
  //            var setScoreValue = $("#score").text(scorenum + 1);
  //        }
  //
  //        function notclicked() {
  //            var lifeValue = $("#life").text();
  //            var lifenum = parseInt(lifeValue);
  //            var setLifeValue = $("#life").text(lifenum - 1);
  //        }
  //        $(document).ready(function () {});