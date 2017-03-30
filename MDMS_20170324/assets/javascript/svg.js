var moveLineArray=[];
var alertArray=[];


var mon = Snap("#svgout");
         
var tux = Snap.load("monitoring06.svg",function(loadFragment){

                mon.append(loadFragment);                 



                moveLine("#AdapterToKafka",10,200,-2000,{  'strokeDasharray':"10 8"  , 'strokeWidth':7   });
                moveLine("#KafkaToSpark",10,200,-2000,{  'strokeDasharray':"10 8"  , 'strokeWidth':7 });
                moveLine("#SparkToR_Kafka",10,200,-2000,{  'strokeDasharray':"10 8"  , 'strokeWidth':7  });
                moveLine("#SparkToNo_sql",100,10,-1000,{  'stroke':"#F5F6CE",'strokeDasharray':"10 600", 'strokeWidth':8   });
                moveLine("#SparkToMdb",100,10,-500,{  'stroke':"#CEF6CE",  'strokeDasharray':"10 700", 'strokeWidth':8  });
                moveLine("#SparkToHadoop",100,10,-500,{  'stroke':"#A9F5F2" ,  'strokeDasharray':"10 500", 'strokeWidth':8  });
                moveLine("#AdapterToHadoop",10,100,-800,{    'strokeDasharray':"10 200" ,  'strokeWidth':8  });
                moveLine("#R_KafkaToRdb",10,100,-500,{    'strokeDasharray':"10 600", 'strokeWidth':8  });
                moveLine("#RdbToWas",100,10,-500,{     'strokeDasharray':"10 320" , 'strokeWidth':8  });           
                

                var i = 122;      //dummy        
                

                $('#mongodb a').click(function(){

                        $('.CLU1-modal-lg .cluster-title').text( "Mongo DB "+$(this).text());
                })


                $('.addTooltip').qtip({
                        content: {
                            text: $("#mytooltip").html()
                        },


                        position: {
                            my: 'top center',
                            at: 'bottom center',
                            adjust:{
                                
                            }
                    

                        },

                        show: {
                            effect: function(offset) {
                                $(this).fadeTo(350, 1);
                                
                            }


                        },

                        hide: {
                            delay:200,
                            fixed: true,
                            effect: function(offset) {
                                $(this).fadeTo(350, 0);
                            }
                        
                        },

                        style: {
                            classes: 'qtip-jtools qtip-shadow qtip-rounded '        

                        
                        } ,

                        events: {
                            show: function(event, api) {                               
                            

                                $('.gage svg').remove();
                                $('.gage').removeAttr("id");              


                                $('.qtip').attr("style","max-width:2000px;max-height:2000px;");
                                $('.qtip #node').text(api.elements.target.attr("id"));  


                                
                                $(api.tooltip).find('.gage').each(function(index,element){
                                        console.log("set gauge");
                                    $(this).attr("id","gauge"+(index));
                                });


                                var g = new JustGage({
                                            id: "gauge0",
                                            value: 80,
                                            min: 0,
                                            max: 100,
                                            titleFontColor : "white",
                                            valueFontColor:"white",
                                            labelFontColor: "white",
                                            title: "CPU",
                                            gaugeColor:"white"
                                        });

                                var g2 = new JustGage({
                                            id: "gauge1",
                                            value: 40,
                                            min: 0,
                                            max: 100,
                                            titleFontColor : "white",
                                            valueFontColor:"white",
                                            labelFontColor: "white",
                                            title: "Mem.",
                                            gaugeColor:"white"
                                        });


                                var g3 = new JustGage({
                                            id: "gauge2",
                                            value: 22,
                                            min: 0,
                                            max: 100,
                                            titleFontColor : "white",
                                            valueFontColor:"white",
                                            labelFontColor: "white",
                                            title: "Swap",
                                            gaugeColor:"white"
                                        });    

                                
                                //  detail title 및  a target 변경
                                if(api.target.attr("id") == "Spark"){
                                    $(api.tooltip).find("a").attr("data-target",".SPARK-modal-lg");

                                }else{
                                    $(api.tooltip).find("a").attr("data-target",".bs-example-modal-lg");
                                        $('.bs-example-modal-lg .modal-title').text(api.target.attr("id") + " Detail");                            

                                } 
                                
                                // set tooltip position  
                                if(api.elements.target.attr("class").indexOf("showRight") != -1){                         
                                        
                                        api.set({ 
                                            
                                            "position.my" : "left center",
                                            "position.at" : "right center",
                                            "position.adjust.x" :20 

                                        });

                                }else if(api.elements.target.attr("class").indexOf("showLeft") != -1){
                                        
                                        api.set({                             
                                            
                                            "position.my" : "right center",
                                            "position.at" : "left center",
                                            "position.adjust.x" : -20

                                        });

                                }else if(api.elements.target.attr("class").indexOf("showDown") != -1){
                                        
                                        api.set({             
                                            
                                            
                                            "position.my" : "top center",
                                            "position.at" : "bottom center"                          

                                        });

                                }else{
                                        api.set({                                
                                            
                                            "position.my" : "bottom center",
                                            "position.at" : "top center"                       

                                        });
                                }
                        
                            },

                            hide:function(event,api){

                                    //    $('.gage svg').remove();
                            }
                        }
                    
                });   


                // alert 테스트  
                setAlert("#DB_Server","stop");              
                // setAlert("#Spark","warn");

                
            
                //텍스트 애니메이션  테스트
                setInterval(function(){changeText("#AdapterSpeed",++i +" kb/s","vFlip");},4000);   
                setInterval(function(){changeText("#KafkaSpeed",++i +" kb/s","hFlip");},4000); 
                setInterval(function(){changeText("#SparkSpeed",++i +" kb/s");},4000);
                        
                
                // 라인 속도 조절 테스트
                setTimeout(function(){
                                    lineSpeed("#AdapterToKafka",2.1);    
                                    setTimeout(function(){lineSpeed("#AdapterToKafka",0.5)},3000);  
                },3000);   

                // alert 제거 테스트
                setTimeout(function(){removeAlert("#Spark")},5000); 


                           
                
                $.ajax({      
                        type:"GET",  
                        url:"test.json",
                        dataType:"JSON",                                 
                        success:function(data){   

                                

                                for(index in data){             
                                    
                                    console.log(data[index].selector);
                                     setDetail(data[index].selector,data[index].detail);
                                }

                                
                        },   
                      
                        error:function(e){  
                            alert(e.responseText);  
                        }  
                });               
              


                //   setDetail("#Was",["111111:1111"],undefined,10);



         });




function setDetail(selector,textArray,attr,x,y){
        
        var element = mon.select(selector);
        var box = element.getBBox();      

         var text = mon.text({text:textArray})

           text.selectAll("tspan").forEach(function(tspan,index){
                    console.log("분리");

                    if(index%2 == 0){
                        tspan.attr({x: box.x+box.width+10+(x != undefined ? x : 0), y: box.y+10+(10*index)}).attr({fill:"gray", fontSize:"14px"});
                    }else{
                        tspan.attr({x: box.x+box.width+80+(x != undefined ? x : 0), y: box.y+10.8+(10*(index-1))}).attr({fill:"#F27825", fontSize:"14px"});
                    }

            });
}
                   


// function setDetail(selector,textArray,attr,x,y){
        
//         var element = mon.select(selector);
//         var box = element.getBBox();

//         console.log("attr: "  +attr+ "x:"+x,"y:"+y); 

//         for(index in textArray){

//                 if(index == 0 ){
//                     element.after(
//                                 mon.text(box.x+(x !== undefined ? x : 10)+box.width,box.y+10+(y !=null ? y : 5),textArray[index]).attr(attr !== undefined ? attr :{fill:"#898989",fontsize:14})
//                                         .attr({fontFamily:"Noto Sans KR,sans-serif"})
//                            );
//                 }else{

//                     element.after(
//                                 mon.text(box.x+(x !== undefined ? x : 10)+box.width,box.y+10+((y !=null ? y : 5)+(index*18)),textArray[index]).attr(attr !== undefined ? attr :{fill:"#898989",fontSize:14})
//                                          .attr({fontFamily:"Noto Sans KR,sans-serif"})
//                            );
//                 }
//         } 
// }
 


function changeText(selector,text,animation){

      var txt =  mon.select(selector+" text");

      
      switch(animation != null ? animation : "vFlip"){

            case "vFlip":

                     Snap.animate( 1, -1, function( value ) {

                         mon.select(selector).attr({ transform :"s"+value+",1" });  
                      
                    
                     }, 500,mina.backin, function(){

                          txt.attr({ text:text });   

                          Snap.animate( -1, 1, function( value ) {

                                mon.select(selector).attr({ transform :"s"+value+",1" });    
                    
                         },500,mina.backout);

                     } );



                    break;                  


            case "hFlip":

                     Snap.animate( 1, -1, function( value ) {

                           mon.select(selector).attr({ transform :"s1,"+value });    
                      
                      }, 500,mina.backin, function(){

                           txt.attr({ text:text });   

                           Snap.animate( -1, 1, function( value ) {

                                  mon.select(selector).attr({ transform :"s1,"+value });    
                    
                         },500,mina.easeout)

                      } );


                      break;
    
      }
}      



function lineSpeed(selector,speed){

        for(animation in moveLineArray){
                    
                    if(moveLineArray[animation].id.indexOf(selector.substring(1,selector.length)) != -1){                        
                        
                        moveLineArray[animation].mina.speed(speed);
                    }
         }   
}   


function moveLine(selector,from,to,duration,attr){

             moveLineArray.push({id:selector , mina : Snap.animate(from,to, function( value ){
                    mon.select(selector).attr({ 'strokeDashoffset': value })
                    },duration) }  
             ); 

             mon.select(selector).attr(attr);
}

function controlLine(selector,type){

        switch(type){

            case "pause":
                for(animation in moveLineArray){
                    
                    if(moveLineArray[animation].id.indexOf(selector.substring(1,selector.length)) != -1){
                        
                        
                        moveLineArray[animation].mina.pause();
                    }
                }  

                break;

            case "resume":

                  for(animation in moveLineArray){
                  
                        if(moveLineArray[animation].id.indexOf(selector.substring(1,selector.length)) != -1){
                        
                            moveLineArray[animation].mina.resume();
                        }
                  }      

                 break;
        }
}    

function setAlert(selector,type){
            console.log("alert 시작");
            var toggle=true;
            var color=null;
            
            switch(type){
                case "stop":
                    color="red";
                    break;
                case "warn":
                    color="#FE9A2E";
                    break;

            }     
            
           alertArray.push({ id:selector,  interval:setInterval(function(){
                
                var index=0;

                if(toggle){
                      
                      mon.selectAll(selector+" path").forEach(function(elem,index){

                                        if(index != 0 ){
                                              elem.animate({fill:color},1000);
                                        }                     
                      });
                      toggle = !toggle;
              
                    
                }else{
                    
                       mon.selectAll(selector+" path").forEach(function(elem,index){

                                            if(index != 0){
                                                  elem.animate({fill:"white"},1000);
                                            }                       

                      })
                      toggle = !toggle;
                       
                }                     

            },1000)});

            controlLine(selector,"pause");
          
}

function removeAlert(selector,color){              
           
                          
              for(alert in alertArray){
                  
                if(alertArray[alert].id.indexOf(selector) != -1){

                   
                    clearInterval(alertArray[alert].interval);

                    mon.selectAll(selector+" path").forEach(function(elem,index){                        
                        
                        if(index !=0 ){
                            elem.stop(); 
                            elem.attr({fill:color?color:"white"});
                        }                   
                      
                    
                    });                  
                   
                }
              }                  
             
           controlLine(selector,"resume");                     
}         
        