$(document).ready(function(){
$("#btnVerMais").click(function (event) {
       event.preventDefault();
        var div2 =$("#btnVerMais");
        var div = $("#fundo");
        var div3 =$("#btnVerMenos");
        var div4 =$("#elemento")
        div.animate({ marginTop:'40', height:'1300'});
        div4.animate({ marginTop:'-1300'});
        div2.animate({fontSize:'10',width:'40',height:'20'});
        
        div3.animate({fontSize:'22',width:'120',height:'40'});
       
       
    });
    $("#btnVerMenos").click(function (event) {
       event.preventDefault();
        var div2 =$("#btnVerMais");
        var div = $("#fundo");
        var div3 =$("#btnVerMenos");
       
        div.animate({ marginTop:'300', height:'1300'});
        
        div3.animate({fontSize:'10',width:'40',height:'20'});
        
        div2.animate({fontSize:'22',width:'120',height:'40'});
       
    });
    
   $("#divLogo1").hover(function(){
       var div =$("#NomePizzaria1");
       var div2 =$("#btn1");
       var div3= $("#opacity1"); 
       var div4= $("#Endereco1");
       div.animate({fontSize:'15',marginTop:'-100'});
       div3.animate({marginTop:'0',height:'120'});
       div4.show();
       div4.animate({fontSize:'10'});
       div2.show();
       div2.fadeIn();
       
               
   },function(){
       var div =$("#NomePizzaria1");
       var div2 =$("#btn1");
          
       //div.hide();
       //div2.hide();
   });
   
   $("#divLogo2").hover(function(){
       var div =$("#NomePizzaria2");
       var div2 =$("#btn2");
       var div3= $("#opacity2"); 
       var div4= $("#Endereco2");
       div.animate({fontSize:'15',marginTop:'-100'});
       div3.animate({marginTop:'0',height:'120'});
       div4.show();
       div4.animate({fontSize:'10'});
       div2.show();
       div2.fadeIn();
       
               
   },function(){
       var div =$("#NomePizzaria2");
       var div2 =$("#btn2");
          
       //div.hide();
       //div2.hide();
   });
   
   $("#divLogo3").hover(function(){
      var div =$("#NomePizzaria3");
       var div2 =$("#btn3");
       var div3= $("#opacity3"); 
       var div4= $("#Endereco3");
       div.animate({fontSize:'15',marginTop:'-100'});
       div3.animate({marginTop:'0',height:'120'});
       div4.show();
       div4.animate({fontSize:'10'});
       div2.show();
       div2.fadeIn();
       
               
   },function(){
       var div =$("#NomePizzaria3");
       var div2 =$("#btn3");
          
       //div.hide();
       //div2.hide();
   });
   
   $("#divLogo4").hover(function(){
       var div =$("#NomePizzaria4");
       var div2 =$("#btn4");
       var div3= $("#opacity4"); 
       var div4= $("#Endereco4");
       div.animate({fontSize:'15',marginTop:'-100'});
       div3.animate({marginTop:'0',height:'120'});
       div4.show();
       div4.animate({fontSize:'10'});
       div2.show();
       div2.fadeIn();
       
               
   },function(){
       var div =$("#NomePizzaria4");
       var div2 =$("#btn4");
          
       //div.hide();
       //div2.hide();
   });
   
   $("#divLogo5").hover(function(){
      var div =$("#NomePizzaria5");
       var div2 =$("#btn5");
       var div3= $("#opacity5"); 
       var div4= $("#Endereco5");
       div.animate({fontSize:'15',marginTop:'-100'});
       div3.animate({marginTop:'0',height:'120'});
       div4.show();
       div4.animate({fontSize:'10'});
       div2.show();
       div2.fadeIn();
       
               
   },function(){
       var div =$("#NomePizzaria5");
       var div2 =$("#btn5");
          
       //div.hide();
       //div2.hide();
   });
   $("#divLogo6").hover(function(){
       var div =$("#NomePizzaria6");
       var div2 =$("#btn6");
       var div3= $("#opacity6"); 
       var div4= $("#Endereco6");
       div.animate({fontSize:'15',marginTop:'-100'});
       div3.animate({marginTop:'0',height:'120'});
       div4.show();
       div4.animate({fontSize:'10'});
       div2.show();
       div2.fadeIn();
       
               
   },function(){
       var div =$("#NomePizzaria6");
       var div2 =$("#btn6");
          
       //div.hide();
       //div2.hide();
   });
   $("#divLogo7").hover(function(){
      var div =$("#NomePizzaria7");
       var div2 =$("#btn7");
       var div3= $("#opacity7"); 
       var div4= $("#Endereco7");
       div.animate({fontSize:'15',marginTop:'-100'});
       div3.animate({marginTop:'0',height:'120'});
       div4.show();
       div4.animate({fontSize:'10'});
       div2.show();
       div2.fadeIn();
       
               
   },function(){
       var div =$("#NomePizzaria7");
       var div2 =$("#btn7");
          
       //div.hide();
       //div2.hide();
   });
   $("#divLogo8").hover(function(){
       var div =$("#NomePizzaria8");
       var div2 =$("#btn8");
       var div3= $("#opacity8"); 
       var div4= $("#Endereco8");
       div.animate({fontSize:'15',marginTop:'-100'});
       div3.animate({marginTop:'0',height:'120'});
       div4.show();
       div4.animate({fontSize:'10'});
       div2.show();
       div2.fadeIn();
       
               
   },function(){
       var div =$("#NomePizzaria8");
       var div2 =$("#btn8");
          
       //div.hide();
       //div2.hide();
   });
   
     });