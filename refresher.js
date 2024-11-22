let objs = {
          m:34,
          n:22,
          // number:35,
          func: function myfunc(number){
            console.log("the number is " + number);
          }
        }
objs.func(22);
        document.addEventListener("click", function click(){
          alert("hello");
        })

       let arr = [32, 33, 34];
       console.log(this)
      //  function myfunc(number){
      //   console.log("the number is " + this) 
      //  }

      //  myfunc(22);

      let myfunc = (number) => {
        console.log("the number is " + this) 
       }
       myfunc();
       setTimeout(() =>{
        console.log("i am being react js")
       }, 2000)