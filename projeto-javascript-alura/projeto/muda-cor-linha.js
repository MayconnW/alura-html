var tds = document.getElementsByTagName("td");
percorreArray(tds,
              function(td){
                var corClick = "#516699";
                var corSelecao = "grey";
                var corOriginal = "white";
                td.addEventListener("mouseover",
                                    function(){
                                      if(this.getAttribute("bgcolor") != corClick){
                                        this.setAttribute("bgcolor",corSelecao);
                                      }
                                    }
                                   );
                td.addEventListener("mouseout", function(){
                                      if(this.getAttribute("bgcolor") != corClick){
                                        this.setAttribute("bgColor",corOriginal);
                                      }
                                    }
                                  );
                td.addEventListener("click", function(){
                                      if (this.getAttribute("bgcolor") == corClick){
                                        this.setAttribute("bgColor",corSelecao);
                                      }else{
                                        this.setAttribute("bgColor",corClick);
                                      }
                                    }
                                  );
              }
            );