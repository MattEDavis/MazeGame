//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_654F||null!=window.HYPE_dtl_654F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-654.full.min.js":"HYPE-654.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_654"+c,"HYPE_dtl_654"+c,a,d),false==!0&&(a=a||k("HYPE_w_654","HYPE_wdtl_654","HYPE-654.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_654","HYPE-654.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"initializeMain",source:"function(hypeDocument, element, event) {\t\n\tif (DIFFICULTY == \"easy\") {\n\t\tINITIALCOUNTDOWNVALUE = 60;\n\t\tdocument.getElementById(\"maskBox\").style.visibility = \"hidden\";\n\t} else {\n\t\tINITIALCOUNTDOWNVALUE = 45;\n\t\tdocument.getElementById(\"maskBox\").style.visibility = \"visible\";\n\t}\n\n\tdocument.getElementById(\"mask1\").style.top = \"-48px\";\n\tdocument.getElementById(\"mask1\").style.left = \"-848px\";\n\tdocument.getElementById(\"thermometer\").style.width = \"790px\";\n\tdocument.getElementById(\"player\").style.top = \"576px\";\n\tdocument.getElementById(\"player\").style.left = \"32px\";\n\tdocument.getElementById(\"blueDoor\").style.visibility = \"visible\";\n\tdocument.getElementById(\"redDoor\").style.visibility = \"visible\";\n\tdocument.getElementById(\"greenDoor\").style.visibility = \"visible\";\n\tdocument.getElementById(\"blueKey\").style.visibility = \"visible\";\n\tdocument.getElementById(\"redKey\").style.visibility = \"visible\";\n\tdocument.getElementById(\"greenKey\").style.visibility = \"visible\";\n\tdocument.getElementById(\"blueKeyDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"redKeyDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"greenKeyDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"counter\").innerHTML = INITIALCOUNTDOWNVALUE;\n\tPLAYERMOVEABLE = true;\n\tvar counterSegments = 10;\n\t\n\tCOUNTDOWNINTERVAL = setInterval(decrementTimer, 100);\n\t\n\tfunction decrementTimer() {\n\t\tvar temp2 = parseFloat(document.getElementById(\"thermometer\").style.width);\n\t\tvar decrementAmount = 79/(INITIALCOUNTDOWNVALUE);\n\t\tdocument.getElementById(\"thermometer\").style.width = (temp2 - decrementAmount) + \"px\";\n\t\tcounterSegments--;\n\t\tif (counterSegments == 0) {\n\t\t\tcounterSegments = 10;\n\t\t\tvar temp1 = parseInt(document.getElementById(\"counter\").innerHTML);\n\t\t\ttemp1 = temp1 - 1;\n\t\t\tdocument.getElementById(\"counter\").innerHTML = temp1;\n\t\t}\n\t\tif (temp1 == 0) {\n\t\t\tclearInterval(COUNTDOWNINTERVAL);\n\t\t\tPLAYERMOVABLE = false;\n\t\t\tdocument.getElementById(\"gameOverMessage\").innerHTML = \"YOU LOSE!\";\n\t\t\tdocument.getElementById(\"thermometer\").style.width = \"0px\";\n\t\t\thypeDocument.startTimelineNamed('playerLose');\n\t\t}\n\t}\n\t\t\t\n}",identifier:"30"},{name:"detectKeyDown",source:"function(hypeDocument, element, event) {\t\n\tif (PLAYERMOVEABLE == true) {\n\t\tvar topPosition = parseInt(document.getElementById('player').style.top);\n\t\tvar leftPosition = parseInt(document.getElementById('player').style.left);\n\t\tvar maskTopPosition = parseInt(document.getElementById('mask1').style.top);\n\t\tvar maskLeftPosition = parseInt(document.getElementById('mask1').style.left);\n\t\tvar playerTopGrid = topPosition/32;\n\t\tvar playerLeftGrid = leftPosition/32;\n\t\tvar keyPressed = event.key;\n\t\tvar keyCode = event.keyCode;\n\t\tif (keyCode == \"37\") \t\t{ playerLeftGrid = playerLeftGrid - 1; } // MOVE LEFT\n\t\telse if (keyCode == \"38\") { playerTopGrid = playerTopGrid - 1; } // MOVE UP\n\t\telse if (keyCode == \"39\") { playerLeftGrid = playerLeftGrid + 1; } // MOVE RIGHT\n\t\telse if (keyCode == \"40\")  { playerTopGrid = playerTopGrid + 1; } // MOVE DOWN\n\t\telse if (keyCode == \"65\") \t\t{ playerLeftGrid = playerLeftGrid - 1; } // MOVE LEFT\n\t\telse if (keyCode == \"87\") { playerTopGrid = playerTopGrid - 1; } // MOVE UP\n\t\telse if (keyCode == \"68\") { playerLeftGrid = playerLeftGrid + 1; } // MOVE RIGHT\n\t\telse if (keyCode == \"83\")  { playerTopGrid = playerTopGrid + 1; } // MOVE DOWN\n\t\tvar string4 = \"GRID[\" + playerTopGrid + \"][\" + playerLeftGrid + \"]\";\n\t\tvar string5 = eval(string4);\n\t\t\n\t\t// REMINDER:\t\tGRID[14][3] = 2; // BLUE KEY\n\t\t// REMINDER:\t\tGRID[12][11] = 3; // BLUE DOOR\n\t\t// REMINDER:\t\tGRID[18][19] = 4; // RED KEY\n\t\t// REMINDER:\t\tGRID[6][7] = 5; // RED DOOR\n\t\t// REMINDER:\t\tGRID[9][19] = 6; // GREEN KEY\n\t\t// REMINDER:\t\tGRID[11][21] = 7; // GREEN DOOR\n\t\n\t\tif (string5 == 1) { // OPEN PATH\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\thypeDocument.startTimelineNamed('footstep');\n\t\t} else if (string5 == 0) { // OBSTACLE\n\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t} else if (string5 == 2) { // BLUE KEY\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"blueKey\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"blueKeyDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[14][3] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} else if (string5 == 4) { // RED KEY\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"redKey\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"redKeyDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[3][7] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} else if (string5 == 6) { // GREEN KEY\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"greenKey\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"greenKeyDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[18][22] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} else if (string5 == 3) { // BLUE DOOR\n\t\t\tif (document.getElementById(\"blueKeyDisplay\").style.visibility == \"visible\") {\n\t\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\t\tdocument.getElementById(\"blueDoor\").style.visibility = \"hidden\";\n\t\t\t\tGRID[12][11] = 1;\n\t\t\t\thypeDocument.startTimelineNamed('doorOpen');\n\t\t\t} else {\n\t\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t\t}\n\t\t} else if (string5 == 5) { // RED DOOR\n\t\t\tif (document.getElementById(\"redKeyDisplay\").style.visibility == \"visible\") {\n\t\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\t\tdocument.getElementById(\"redDoor\").style.visibility = \"hidden\";\n\t\t\t\tGRID[6][16] = 1;\n\t\t\t\thypeDocument.startTimelineNamed('doorOpen');\n\t\t\t} else {\n\t\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t\t}\n\t\t} else if (string5 == 7) { // GREEN DOOR\n\t\t\tif (document.getElementById(\"greenKeyDisplay\").style.visibility == \"visible\") {\n\t\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\t\tdocument.getElementById(\"greenDoor\").style.visibility = \"hidden\";\n\t\t\t\tGRID[21][14] = 1;\n\t\t\t\thypeDocument.startTimelineNamed('doorOpen');\n\t\t\t} else {\n\t\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t\t}\n\t\t} else if (string5 == 8) { // CHECKERED FLAG\n\t\t\tPLAYERMOVEABLE = false;\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById(\"maskBox\").style.visibility = \"hidden\";\n\t\t\thypeDocument.startTimelineNamed('endMaze');\n\t\t\tclearInterval(COUNTDOWNINTERVAL);\n\t\t\tdocument.getElementById(\"gameOverMessage\").innerHTML = \"YOU WIN!\";\n\t\t\thypeDocument.startTimelineNamed('playerWin');\n\t\t}\n\t}\n\t\t\t\n}",identifier:"33"},{name:"initializeSplash",source:"function(hypeDocument, element, event) {\t\n\tif (element.id == \"easyButton\") {\n\t\tDIFFICULTY = \"easy\";\n\t} else {\n\t\tDIFFICULTY = \"hard\";\n\t}\n\t\n\thypeDocument.startTimelineNamed('splashStart');\n\t\n\tGRID = [\n\t\t[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],\n\t\t[0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0],\n\t\t[0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0],\n\t\t[0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0],\n\t\t[0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0],\n\t\t[0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0],\n\t\t[0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0],\n\t\t[0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0],\n\t\t[0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0],\n\t\t[0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0],\n\t\t[0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0],\n\t\t[0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0],\n\t\t[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0],\n\t\t[0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0],\n\t\t[0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0],\n\t\t[0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0],\n\t\t[0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0],\n\t\t[0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0],\n\t\t[0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0],\n\t\t[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]\n\t];\n\t\n\tGRID[14][3] = 2; // BLUE KEY\n\tGRID[12][11] = 3; // BLUE DOOR\n\tGRID[3][7] = 4; // RED KEY\n\tGRID[6][16] = 5; // RED DOOR\n\tGRID[18][22] = 6; // GREEN KEY\n\tGRID[14][21] = 7; // GREEN DOOR\n\tGRID[1][26] = 8; // FINISH FLAG\n\t\n}",identifier:"65"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_654"+c](f,g,{"-2":{n:"blank.gif"},"25":{p:2,n:"badBeep.mp3",g:"36",t:"audio/mpeg"},"18":{p:1,n:"blueDoor.jpg",g:"99",o:true,t:"@1x"},"10":{p:1,n:"player.jpg",g:"10",o:true,t:"@1x"},"19":{p:1,n:"blueDoor_2x.jpg",g:"99",o:true,t:"@2x"},"11":{p:1,n:"player_2x.jpg",g:"10",o:true,t:"@2x"},"0":{p:1,n:"checkeredFlag.png",g:"34",t:"@1x"},"12":{p:1,n:"blueKey.jpg",g:"12",o:true,t:"@1x"},"1":{p:2,n:"doorOpen.mp3",g:"37",t:"audio/mpeg"},"20":{p:1,n:"MazeFinalMD.png",g:"8",t:"@1x"},"2":{p:2,n:"footstep.mp3",g:"38",t:"audio/mpeg"},"13":{p:1,n:"blueKey_2x.jpg",g:"12",o:true,t:"@2x"},"3":{p:2,n:"pickup.mp3",g:"39",t:"audio/mpeg"},"21":{p:1,n:"redDoor.jpg",g:"101",o:true,t:"@1x"},"14":{p:1,n:"greenKey.jpg",g:"18",o:true,t:"@1x"},"4":{p:2,n:"endMaze.mp3",g:"40",t:"audio/mpeg"},"5":{p:2,n:"playerWin.mp3",g:"53",t:"audio/mpeg"},"15":{p:1,n:"greenKey_2x.jpg",g:"18",o:true,t:"@2x"},"22":{p:1,n:"redDoor_2x.jpg",g:"101",o:true,t:"@2x"},"6":{p:2,n:"playerLose.mp3",g:"58",t:"audio/mpeg"},"23":{p:1,n:"greenDoor.jpg",g:"103",o:true,t:"@1x"},"16":{p:1,n:"redKey.jpg",g:"15",o:true,t:"@1x"},"7":{p:2,n:"charge.mp3",g:"72",t:"audio/mpeg"},"-1":{n:"PIE.htc"},"8":{p:2,n:"creditRoll.mp3",g:"89",t:"audio/mpeg"},"24":{p:1,n:"greenDoor_2x.jpg",g:"103",o:true,t:"@2x"},"17":{p:1,n:"redKey_2x.jpg",g:"15",o:true,t:"@2x"},"9":{p:1,n:"mask1.png",g:"96",t:"@1x"}},l,[],e,[{n:"splash",o:"59",X:[0]},{n:"main",o:"1",X:[1]},{n:"credits",o:"73",X:[2]}],
[{o:"61",p:"600px",cA:false,Y:1024,Z:768,L:[],c:"#00A4FC",bY:1,d:1024,U:{},T:{"66_hover":{q:false,z:1,i:"66_hover",n:"66_hover",a:[{f:"c",y:0,z:1,i:"A",e:"#000",s:"#FFF",o:"274"},{f:"c",y:0,z:1,i:"G",e:"#E70000",s:"#001EFF",o:"274"},{f:"c",y:0,z:1,i:"C",e:"#000",s:"#FFF",o:"274"},{f:"c",y:0,z:1,i:"B",e:"#000",s:"#FFF",o:"274"},{f:"c",y:0,z:1,i:"D",e:"#000",s:"#FFF",o:"274"},{f:"c",y:0,z:1,i:"g",e:"#0019FF",s:"#F00",o:"274"},{y:1,i:"A",s:"#000",z:0,o:"274",f:"c"},{y:1,i:"G",s:"#E70000",z:0,o:"274",f:"c"},{y:1,i:"C",s:"#000",z:0,o:"274",f:"c"},{y:1,i:"B",s:"#000",z:0,o:"274",f:"c"},{y:1,i:"D",s:"#000",z:0,o:"274",f:"c"},{y:1,i:"g",s:"#0019FF",z:0,o:"274",f:"c"}],f:30,b:[]},"71":{q:false,z:4,i:"71",n:"splashStart",a:[{f:"c",y:0,z:0.01,i:"e",e:0,s:1,o:"273"},{f:"c",y:0,z:0.05,i:"a",e:302,s:-420,o:"278"},{y:0.01,i:"e",s:0,z:0,o:"273",f:"c"},{f:"c",p:2,y:0.05,z:0.3,i:"ActionHandler",e:{a:[{p:12,o:"39",q:false}]},s:{a:[{p:12,o:"39",q:false}]},o:"71"},{f:"c",y:0.05,z:0.2,i:"a",e:302,s:302,o:"278"},{f:"c",y:0.25,z:0.05,i:"a",e:1024,s:302,o:"278"},{f:"c",y:1,z:0.05,i:"a",e:302,s:-420,o:"272"},{y:1,i:"a",s:1024,z:0,o:"278",f:"c"},{f:"c",p:2,y:1.05,z:1,i:"ActionHandler",e:{a:[{p:12,o:"39",q:false}]},s:{a:[{p:12,o:"39",q:false}]},o:"71"},{f:"c",y:1.05,z:0.2,i:"a",e:302,s:302,o:"272"},{f:"c",y:1.25,z:0.05,i:"a",e:1024,s:302,o:"272"},{f:"c",y:2,z:0.05,i:"a",e:302,s:-420,o:"275"},{y:2,i:"a",s:1024,z:0,o:"272",f:"c"},{f:"c",p:2,y:2.05,z:1,i:"ActionHandler",e:{a:[{p:12,o:"39",q:false}]},s:{a:[{p:12,o:"39",q:false}]},o:"71"},{f:"c",y:2.05,z:0.2,i:"a",e:302,s:302,o:"275"},{f:"c",y:2.25,z:0.05,i:"a",e:1024,s:302,o:"275"},{f:"c",y:3,z:0.05,i:"a",e:264,s:-542,o:"280"},{y:3,i:"a",s:1024,z:0,o:"275",f:"c"},{f:"c",p:2,y:3.05,z:0.25,i:"ActionHandler",e:{a:[{d:1.1,p:1,g:1,e:"1"}]},s:{a:[{p:12,o:"39",q:false}]},o:"71"},{f:"c",y:3.05,z:0.2,i:"a",e:180,s:264,o:"280"},{f:"c",y:3.25,z:0.05,i:"a",e:1024,s:180,o:"280"},{f:"c",p:2,y:4,z:0,i:"ActionHandler",s:{a:[{d:1.1,p:1,g:1,e:"1"}]},o:"71"},{y:4,i:"a",s:1024,z:0,o:"280",f:"c"}],f:30,b:[]},"64_hover":{q:false,z:1,i:"64_hover",n:"64_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#F00",s:"#0003FF",o:"277"},{f:"c",y:0,z:1,i:"B",e:"#000",s:"#FFF",o:"277"},{f:"c",y:0,z:1,i:"C",e:"#000",s:"#FFF",o:"277"},{f:"c",y:0,z:1,i:"D",e:"#000",s:"#FFF",o:"277"},{f:"c",y:0,z:1,i:"A",e:"#000",s:"#FFF",o:"277"},{f:"c",y:0,z:1,i:"g",e:"#0004FF",s:"#E10000",o:"277"},{y:1,i:"G",s:"#F00",z:0,o:"277",f:"c"},{y:1,i:"B",s:"#000",z:0,o:"277",f:"c"},{y:1,i:"C",s:"#000",z:0,o:"277",f:"c"},{y:1,i:"D",s:"#000",z:0,o:"277",f:"c"},{y:1,i:"A",s:"#000",z:0,o:"277",f:"c"},{y:1,i:"g",s:"#0004FF",z:0,o:"277",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]}},bZ:180,O:["279","276","280","275","272","278","273","277","274"],n:"Untitled Layout","_":0,v:{"278":{aU:8,bB:6,G:"#0A00FF",c:374,aV:8,r:"inline",d:259,bC:6,s:"Copperplate,sans-serif",t:288,Z:"break-word",i:"title3",w:"3",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:5,aS:8,aT:8,a:1024,bA:"#FFF",F:"center",b:220},"274":{b:600,z:4,K:"Solid",c:142,L:"Solid",d:46,aS:6,M:8,bD:"none",N:8,aT:6,dB:"button",O:8,g:"#F00",aU:6,P:8,aV:6,i:"hardButton",j:"absolute",k:"div",aI:20,aJ:20,aK:20,aL:20,A:"#FFF",B:"#FFF",aM:"66_hover",r:"inline",C:"#FFF",Z:"break-word",s:"Copperplate,sans-serif",D:"#FFF",t:48,F:"center",aA:{a:[{p:4,h:"65"}]},G:"#001EFF",aP:"pointer",w:"HARD",x:"visible",I:"Solid",a:654,y:"preserve",J:"Solid"},"277":{b:600,z:3,K:"Solid",c:142,L:"Solid",d:46,aS:6,M:8,bD:"none",N:8,aT:6,dB:"button",O:8,g:"#E10000",aU:6,P:8,aV:6,i:"easyButton",j:"absolute",k:"div",aI:20,aJ:20,aK:20,aL:20,A:"#FFF",B:"#FFF",aM:"64_hover",r:"inline",C:"#FFF",Z:"break-word",s:"Copperplate,sans-serif",D:"#FFF",t:48,F:"center",aA:{a:[{p:4,h:"65"}]},G:"#0003FF",aP:"pointer",w:"EASY",x:"visible",I:"Solid",a:200,y:"preserve",J:"Solid"},"280":{aU:8,bB:6,G:"#0021FF",c:544,aV:8,r:"inline",d:516,bC:6,s:"Copperplate,sans-serif",t:288,Z:"break-word",i:"title6",w:"GO!\n",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:8,aS:8,aT:8,a:-542,bA:"#FFF",F:"center",b:220},"273":{aU:8,bB:2,G:"#B500FF",c:1008,aV:8,r:"inline",d:254,e:1,s:"Copperplate,sans-serif",bC:2,t:48,Z:"break-word",i:"title2",w:"Use Arrow Keys To Move<br>\nGrab Keys To Open Doors<br>\nComplete The Maze Before<br>\nThe Timer Gets To Zero\n",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,bA:"#FFF",F:"center",b:280},"276":{c:51,d:43,I:"Solid",J:"Solid",K:"Solid",g:"#00A4FC",L:"Solid",aP:"pointer",M:0,N:0,A:"#FFF",x:"visible",j:"absolute",B:"#FFF",P:0,O:0,C:"#FFF",z:9,dB:"button",D:"#FFF",aA:{a:[{d:1.1,p:1,g:1,e:"73"}]},k:"div",a:911,b:9},"279":{aU:8,bB:5,G:"#001EF4",c:1008,aV:8,r:"inline",d:184,bC:5,s:"Copperplate,sans-serif",t:144,Z:"break-word",i:"title1",w:"Road To <font face=\"Baskerville, Hoefler Text, Times New Roman, serif\" color=\"#e70000\" style=\"font-size: 180px;\">Valhalla</font>",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:1,aS:8,aT:8,a:0,bA:"#FFF",F:"center",b:-37},"272":{aU:8,bB:6,G:"#0012FF",c:404,aV:8,r:"inline",d:354,bC:6,s:"Copperplate,sans-serif",t:288,Z:"break-word",i:"title4",w:"2",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:6,aS:8,aT:8,a:-420,bA:"#FFF",F:"center",b:220},"275":{aU:8,bB:6,G:"#0004FF",c:404,aV:8,r:"inline",d:354,bC:6,s:"Copperplate,sans-serif",t:288,Z:"break-word",i:"title5",w:"1",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:7,aS:8,aT:8,a:-420,bA:"#FFF",F:"center",b:220}}},{A:{a:[{p:4,h:"30"}]},o:"3",p:"600px",cA:false,Y:1024,Z:768,C:{a:[{p:4,h:"33"}]},c:"#FFF",L:[],bY:1,d:1024,U:{},T:{"52":{q:false,z:6.15,i:"52",n:"playerWin",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"53",q:false}]},o:"52"},{f:"f",y:0,z:1.15,i:"b",e:32,s:-576,o:"294"},{y:1.15,i:"b",s:32,z:0,o:"294",f:"c"},{f:"c",y:4,z:0.15,i:"e",e:1,s:0,o:"296"},{y:4.15,i:"e",s:1,z:0,o:"296",f:"c"},{f:"c",y:6,z:0.15,i:"e",e:1,s:0,o:"297"},{y:6.15,i:"e",s:1,z:0,o:"297",f:"c"}],f:30,b:[]},"57":{q:false,z:6.15,i:"57",n:"playerLose",a:[{f:"f",y:0,z:1.15,i:"b",e:32,s:-576,o:"294"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"58",q:false}]},o:"57"},{y:1.15,i:"b",s:32,z:0,o:"294",f:"c"},{f:"c",y:4,z:0.15,i:"e",e:1,s:0,o:"296"},{y:4.15,i:"e",s:1,z:0,o:"296",f:"c"},{f:"c",y:6,z:0.15,i:"e",e:1,s:0,o:"297"},{y:6.15,i:"e",s:1,z:0,o:"297",f:"c"}],f:30,b:[]},"42":{q:false,z:0,i:"42",n:"doorOpen",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"37",q:false}]},o:"42"}],f:30,b:[]},"49_hover":{q:false,z:1,i:"49_hover",n:"49_hover",a:[{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#000",o:"297"},{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#000",o:"297"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#000",o:"297"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#000",o:"297"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#000",o:"297"},{y:1,i:"A",s:"#FF2600",z:0,o:"297",f:"c"},{y:1,i:"G",s:"#FF2600",z:0,o:"297",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"297",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"297",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"297",f:"c"}],f:30,b:[]},"45":{q:false,z:0,i:"45",n:"pickup",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"39",q:false}]},o:"45"}],f:30,b:[]},"43":{q:false,z:0,i:"43",n:"endMaze",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"40",q:false}]},o:"43"}],f:30,b:[]},"48_hover":{q:false,z:1,i:"48_hover",n:"48_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#000",o:"296"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#000",o:"296"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#000",o:"296"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#000",o:"296"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#000",o:"296"},{y:1,i:"G",s:"#FF2600",z:0,o:"296",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"296",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"296",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"296",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"296",f:"c"}],f:30,b:[]},"41":{q:false,z:0,i:"41",n:"badBeep",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"36",q:false}]},o:"41"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"72",q:false}]},o:"kTimelineDefaultIdentifier"}],f:30,b:[]},"44":{q:false,z:0,i:"44",n:"footstep",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"38",q:false}]},o:"44"}],f:30,b:[]}},bZ:180,O:["298","294","295","296","297","307","306","284","309","300","301","287","293","304","299","285","305","303","288","291","308","290","286","292","283","302","281","282","289"],n:"Untitled Layout","_":1,v:{"302":{c:1024,d:128,I:"None",J:"None",K:"None",g:"#000",L:"None",M:0,i:"bottomBorder",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:2,k:"div",D:"#D8DDE4",a:0,b:640},"296":{b:376,z:3,K:"Solid",c:218,L:"Solid",d:48,aS:6,M:10,e:0,bD:"none",N:10,aT:6,dB:"button",O:10,g:"#FFF",aU:6,P:10,bF:"294",aV:6,i:"playAgainButton",j:"absolute",k:"div",aI:25,aJ:25,aK:25,aL:25,A:"#000",B:"#000",aM:"48_hover",r:"inline",C:"#000",Z:"break-word",s:"Copperplate,sans-serif",D:"#000",t:36,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"59"}]},G:"#000",aP:"pointer",w:"PLAY AGAIN?",x:"visible",I:"Solid",a:118,y:"preserve",J:"Solid"},"288":{h:"15",p:"no-repeat",x:"visible",a:927,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:22,i:"redKeyDisplay",b:285,d:70,k:"div",c:62},"307":{h:"96",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,bF:"306",b:0,d:1280,i:"mask1",k:"div",c:1792},"292":{h:"18",p:"no-repeat",x:"visible",a:929,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:23,i:"greenKeyDisplay",b:451,d:42,k:"div",c:65},"284":{h:"10",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:4,i:"player",b:0,d:32,k:"div",c:32},"303":{c:80,d:80,I:"Solid",J:"Solid",K:"Solid",g:"#00FDFF",L:"Solid",M:10,i:"border2",N:10,A:"#0433FF",x:"visible",j:"absolute",B:"#0433FF",P:10,O:10,C:"#0433FF",z:12,k:"div",D:"#0433FF",a:908,b:268},"297":{b:376,z:5,K:"Solid",c:218,L:"Solid",d:48,aS:6,M:10,e:0,bD:"none",N:10,aT:6,dB:"button",O:10,g:"#FFF",aU:6,P:10,bF:"294",aV:6,i:"creditsButton",j:"absolute",k:"div",aI:25,aJ:25,aK:25,aL:25,A:"#000",B:"#000",aM:"49_hover",r:"inline",C:"#000",Z:"break-word",s:"Copperplate,sans-serif",D:"#000",t:36,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"73"}]},G:"#000",aP:"pointer",w:"CREDITS",x:"visible",I:"Solid",a:468,y:"preserve",J:"Solid"},"289":{c:790,d:90,I:"None",J:"None",K:"None",g:"#FF2600",L:"None",M:0,i:"thermometer",N:0,A:"#FF2600",x:"visible",j:"absolute",B:"#FF2600",P:0,O:0,C:"#FF2600",z:14,k:"div",D:"#FF2600",a:53,b:645},"308":{c:80,d:50,I:"Solid",J:"Solid",K:"Solid",g:"#00FDFF",L:"Solid",M:10,i:"border3",N:10,A:"#0433FF",x:"visible",j:"absolute",B:"#0433FF",P:10,O:10,C:"#0433FF",z:13,k:"div",D:"#0433FF",a:911,b:437},"293":{aU:8,G:"#FFF",c:112,aV:8,r:"inline",d:34,s:"Copperplate,sans-serif",t:18,Z:"break-word",i:"inventoryTitle",w:"INVENTORY",j:"absolute",x:"visible",k:"div",y:"preserve",z:10,aS:8,aT:8,a:896,F:"center",b:64},"285":{h:"12",p:"no-repeat",x:"visible",a:930,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:21,i:"blueKeyDisplay",b:160,d:43,k:"div",c:64},"304":{h:"15",p:"no-repeat",x:"visible",a:223,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:19,i:"redKey",b:102,d:48,k:"div",c:32},"298":{c:832,d:576,I:"None",J:"None",K:"None",g:"#00FF8B",L:"None",M:0,i:"background1",bF:"294",N:0,A:"#0433FF",x:"visible",j:"absolute",B:"#0433FF",P:0,O:0,C:"#0433FF",z:1,k:"div",D:"#0433FF",a:0,b:0},"281":{c:780,d:80,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:10,i:"border4",N:10,A:"#0433FF",x:"visible",j:"absolute",B:"#0433FF",k:"div",O:10,C:"#0433FF",z:15,P:10,D:"#0433FF",a:48,b:640},"300":{c:128,d:768,I:"None",J:"None",K:"None",g:"#F00",L:"None",M:0,i:"rightBorder",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:1,k:"div",D:"#D8DDE4",a:896,b:0},"309":{h:"8",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:3,i:"map1",b:0,d:640,k:"div",c:896},"294":{x:"visible",k:"div",c:832,d:576,z:29,i:"gameOverBox",a:32,j:"absolute",b:-576},"286":{h:"103",p:"no-repeat",x:"visible",a:673,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:9,i:"greenDoor",b:450,d:30,k:"div",c:32},"305":{h:"101",p:"no-repeat",x:"visible",a:507,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:17,i:"redDoor",b:187,d:38,k:"div",c:41},"299":{c:80,d:50,I:"Solid",J:"Solid",K:"Solid",g:"#00FDFF",L:"Solid",M:10,i:"border1",N:10,A:"#0433FF",x:"visible",j:"absolute",B:"#0433FF",P:10,O:10,C:"#0433FF",z:11,k:"div",D:"#0433FF",a:912,b:147},"290":{h:"12",p:"no-repeat",x:"visible",a:100,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:5,i:"blueKey",b:450,d:28,k:"div",c:41},"282":{aU:8,G:"#FFF",c:144,aV:8,r:"inline",d:84,s:"Impact,'Arial Narrow Bold',Sans-Serif",t:64,Z:"break-word",i:"counter",w:"60",j:"absolute",x:"visible",k:"div",y:"preserve",z:20,aS:8,aT:8,a:864,F:"center",b:640},"301":{c:51,d:43,I:"Solid",J:"Solid",K:"Solid",g:"#F00",L:"Solid",aP:"pointer",M:0,N:0,A:"#FFF",x:"visible",j:"absolute",B:"#FFF",P:0,O:0,C:"#FFF",z:30,dB:"button",D:"#FFF",aA:{a:[{d:1.1,p:1,g:1,e:"73"}]},k:"div",a:911,b:9},"295":{aU:8,bB:4,G:"#005AF3",c:816,aV:8,r:"inline",d:124,bC:5,s:"Copperplate,sans-serif",t:144,Z:"break-word",i:"gameOverMessage",w:"MESSAGE",bF:"294",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,aT:8,a:0,bA:"#FFF",F:"center",b:76},"287":{h:"34",p:"no-repeat",x:"visible",a:832,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:28,i:"checkeredFlag",b:32,d:32,k:"div",c:32},"306":{x:"hidden",k:"div",c:896,d:640,z:24,i:"maskBox",a:0,j:"absolute",b:0},"291":{h:"99",p:"no-repeat",x:"visible",a:352,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:7,i:"blueDoor",b:384,d:32,k:"div",c:32},"283":{h:"18",p:"no-repeat",x:"visible",a:704,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:18,i:"greenKey",b:575,d:32,k:"div",c:32}}},{o:"84",p:"600px",B:{a:[{p:13,o:"89",q:false}]},cA:false,Z:768,Y:1024,c:"#009CFC",L:[],bY:1,d:1024,U:{},T:{"79_hover":{q:false,z:1,i:"79_hover",n:"79_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#0029FF",o:"315"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#FFF",o:"315"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#FFF",o:"315"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#FFF",o:"315"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#FFF",o:"315"},{y:1,i:"G",s:"#FF2600",z:0,o:"315",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"315",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"315",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"315",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"315",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:20,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"89",q:true}]},o:"kTimelineDefaultIdentifier"},{f:"b",y:1,z:19,i:"b",e:-1000,s:0,o:"312"},{y:20,i:"b",s:-1000,z:0,o:"312",f:"c"}],f:30,b:[]}},bZ:180,O:["310","314","312","311","313","316","315"],n:"Untitled Layout","_":2,v:{"310":{aU:8,bB:4,G:"#0014FF",c:1008,aV:8,r:"inline",d:257,bC:4,s:"Copperplate,sans-serif",t:144,Z:"break-word",i:"credits1",w:"Road To <font face=\"Baskerville, Hoefler Text, Times New Roman, serif\" color=\"#db0000\" style=\"font-size: 170px;\">Valhalla</font>",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:1,aS:8,aT:8,a:0,bA:"#FFF",F:"center",b:-38},"313":{aU:8,bB:1,G:"#0007FF",c:396,aV:8,r:"inline",d:884,e:1,s:"Copperplate,sans-serif",bC:1,t:48,Y:96,Z:"break-word",i:"credits4",w:"Matthew Davis<br>\nDarren Pearson<br>\nSaint Paul College<br>Anna<br>Sydney<br><br>HAwkthorne Sound<br>\n\n",bF:"312",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:3,aS:8,aT:8,a:512,bA:"#FFF",F:"left",b:113},"316":{aU:8,bB:1,G:"#0007FF",c:396,aV:8,r:"inline",d:884,e:1,s:"Copperplate,sans-serif",bC:1,t:48,Y:96,Z:"break-word",i:"credits3",w:"Designed by<br>\nJavascript by<br><br>&nbsp;<br><br>&nbsp;Usability <br>Testers<br>\n<br>\nSpecial Thanks to<br>\n<br>\n<br>\n\n",bF:"312",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,aT:8,a:100,bA:"#FFF",F:"left",b:120},"312":{x:"visible",k:"div",c:1024,d:1200,z:1,i:"creditRoll",a:0,j:"absolute",bF:"311",b:0},"315":{b:1102,z:4,K:"Solid",c:372,L:"Solid",d:49,aS:6,M:8,bD:"none",N:8,aT:6,dB:"button",O:8,g:"#E70000",aU:6,P:8,bF:"312",aV:6,i:"restartButton",j:"absolute",k:"div",aI:20,aJ:20,aK:20,aL:20,A:"#FFF",B:"#FFF",aM:"79_hover",r:"inline",C:"#FFF",Z:"break-word",s:"Copperplate,sans-serif",D:"#FFF",t:48,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"59"}]},G:"#0029FF",aP:"pointer",w:"PLAY AGAIN?",x:"visible",I:"Solid",a:312,y:"preserve",J:"Solid"},"311":{x:"hidden",k:"div",c:1024,d:340,z:2,i:"outerContainer",a:0,j:"absolute",b:300},"314":{aU:8,bB:1,G:"#0014FF",c:1008,aV:8,r:"inline",d:41,e:1,s:"Copperplate,sans-serif",bC:1,t:48,Z:"break-word",i:"credits2",w:"CREDITS\n",bF:"312",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:1,aS:8,aT:8,a:-187,bA:"#FFF",F:"center",b:0}}}],{},h,{f:{p:0,q:[[0,0,0.1971,0,0.3391,0.8944,0.3636,1],[0.3636,1,0.3636,1,0.4425,0.75,0.5455,0.75],[0.5455,0.75,0.6519,0.75,0.7273,1,0.7273,1],[0.7273,1,0.7273,1,0.7718,0.9375,0.8182,0.9375],[0.8182,0.9375,0.8646,0.9375,0.9091,1,0.9091,1],[0.9091,1,0.9091,1,0.9294,0.9844,0.9546,0.9844],[0.9546,0.9844,0.9798,0.9844,1,1,1,1]]}},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
