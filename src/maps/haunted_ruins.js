var map={title:"Haunted Ruins",song:"env2",maker:"cfurby27",spawn:[0,0.5,0],init:function(){a.y([-14.26,-17.86993,-46.72],[0,0,0],[8.96,42.28,8.96],2.0,0,0,0.6);a.y([18.02,3.93021,-135.88],[0,0,0],[8.96,42.28,8.96],2.0,0,0,0.6);a.p([16.58,7.88028,-75.53],[0,0,0],[3.36,1.22,12.62],2.0,0,0,0.6,false);a.p([-28.6,40.17035,-150.85],[0,0,0],[4.64,62.7,2],2.0,0,0,0.6,false);a.p([-16.57,-19.23,-112.9],[0,0,0],[3.36,1.22,12.62],2.0,0,0,0.6,true);a.p([8.9,2.1402099999999997,-57.21],[0,0,0],[3.36,1.22,10.84],2.0,0,0,0.6,true);a.p([0,-1.4897200000000002,-28.15],[0,0,0],[3.36,1.22,6.82],2.0,0,0,0.6,true);a.p([-13.08,7.88035,-87.33],[0.45,0,0],[3.36,1.22,12.62],2.0,0,0,0.6,true);a.p([0,-1.49,-11.06],[0,0,0],[3.36,1.22,27.16],-1.0,0,0,0.6,false);a.p([-28.68,16.870070000000002,-196.91],[0,-0.19,0],[2.14,1.74,67.94],-1.0,0,0,0.6,false);a.p([-31.03,25.22014,-145.52],[0,0,1.55],[3.36,1.22,12.62],2.0,0,0,0.6,false);a.p([-28.68,23.550210000000003,-157.51],[0,0,0],[3.36,1.22,12.62],2.0,0,0,0.6,false);a.p([-28.68,23.550279999999997,-145.52],[0,0,0],[3.36,1.22,12.62],2.0,0,0,0.6,false);a.p([-29.82,16.68035,-196.97],[0,-0.19,0],[0.18,1.74,67.94],2.0,0,0,0.6,false);a.p([-27.49,16.87,-196.91],[0,-0.19,0],[0.18,1.74,67.94],2.0,0,0,0.6,false);a.p([-28.68,10.330070000000001,-239.38],[0,0,0],[7.48,1.22,18.58],2.0,0,0,0.6,false);a.p([-28.68,10.330139999999998,-272.14],[0,0,0],[7.48,1.22,9.24],2.0,0,0,0.6,false);a.p([-28.68,10.33021,-253.43],[0,0,0],[7.48,1.22,9.24],2.0,0,0,0.6,false);a.p([-28.68,10.33028,-281.53],[0,0,0],[7.48,1.22,9.24],2.0,0,0,0.6,false);a.p([-28.68,10.330350000000001,-290.91],[0,0,0],[7.48,1.22,9.24],2.0,0,0,0.6,false);a.p([-28.68,10.33,-262.68],[0,0,0],[7.48,1.22,9.24],2.0,0,0,0.6,false);a.c([-28.76,19.68007,-188.07],true);a.e([-28.64,11.000139999999998,-291.97]);},post:function(){a.u('Y0');a.u('Y1');a.u('P0');a.u('P1');a.u('P2');a.u('P14');a.u('P15');a.u('P16');a.u('P18');cc.set_monkey("jumpSpeed",1.1);cc.refresh();},section_id:0,section_update:function(){let PZ=player.position.z;switch(this.section_id){case 0:if(PZ<-0.4400000000000013){speed=default_speed*1.1;steer=default_steer*1.1;this.section_id+=1}
break;case 1:a.mov('Y0','x',0.5);if(PZ<-50.599999999999994){speed=cc.get("speed",null);steer=cc.get("steer",null);this.section_id+=1}
break;case 2:if(PZ<-50.86999999999999){speed=default_speed*1.1;steer=default_steer*2.0;this.section_id+=1}
break;case 3:a.mov('Y1','x',-0.6);a.mov('P0','x',-0.8);a.mov('P1','y',-0.4);a.mov('P2','y',0.6);if(PZ<-203.73000000000002){speed=cc.get("speed",null);steer=cc.get("steer",null);this.section_id+=1}
break;case 4:if(PZ<-244.95000000000002){speed=default_speed*1.1;steer=default_steer*1.1;this.section_id+=1}
break;case 5:a.mov('P14','x',-0.1);a.mov('P15','x',-0.2);a.mov('P16','x',0.1);a.mov('P18','x',0.2);if(PZ<-516.89){speed=cc.get("speed",null);steer=cc.get("steer",null);this.section_id+=1}
break;}},reset:function(){this.section_id=0;a.re('Y0',[-14.26,-17.86993,-46.72],[0,0,0],[8.96,42.28,8.96]);a.re('Y1',[18.02,3.93021,-135.88],[0,0,0],[8.96,42.28,8.96]);a.re('P0',[16.58,7.88028,-75.53],[0,0,0],[3.36,1.22,12.62]);a.re('P1',[-28.6,40.17035,-150.85],[0,0,0],[4.64,62.7,2]);a.re('P2',[-16.57,-19.23,-112.9],[0,0,0],[3.36,1.22,12.62]);a.re('P3',[8.9,2.1402099999999997,-57.21],[0,0,0],[3.36,1.22,10.84]);a.re('P4',[0,-1.4897200000000002,-28.15],[0,0,0],[3.36,1.22,6.82]);a.re('P5',[-13.08,7.88035,-87.33],[0.45,0,0],[3.36,1.22,12.62]);a.re('P6',[0,-1.49,-11.06],[0,0,0],[3.36,1.22,27.16]);a.re('P7',[-28.68,16.870070000000002,-196.91],[0,-0.19,0],[2.14,1.74,67.94]);a.re('P8',[-31.03,25.22014,-145.52],[0,0,1.55],[3.36,1.22,12.62]);a.re('P9',[-28.68,23.550210000000003,-157.51],[0,0,0],[3.36,1.22,12.62]);a.re('P10',[-28.68,23.550279999999997,-145.52],[0,0,0],[3.36,1.22,12.62]);a.re('P11',[-29.82,16.68035,-196.97],[0,-0.19,0],[0.18,1.74,67.94]);a.re('P12',[-27.49,16.87,-196.91],[0,-0.19,0],[0.18,1.74,67.94]);a.re('P13',[-28.68,10.330070000000001,-239.38],[0,0,0],[7.48,1.22,18.58]);a.re('P14',[-28.68,10.330139999999998,-272.14],[0,0,0],[7.48,1.22,9.24]);a.re('P15',[-28.68,10.33021,-253.43],[0,0,0],[7.48,1.22,9.24]);a.re('P16',[-28.68,10.33028,-281.53],[0,0,0],[7.48,1.22,9.24]);a.re('P17',[-28.68,10.330350000000001,-290.91],[0,0,0],[7.48,1.22,9.24]);a.re('P18',[-28.68,10.33,-262.68],[0,0,0],[7.48,1.22,9.24]);a.re('C0',[-28.76,19.68007,-188.07],[0,0,0],[2,2,2]);a.re('E0',[-28.64,11.000139999999998,-291.97],[0,0,0],[1,1,1]);},physics_update:function(){},render_update:function(){}}