var map={title:"Fatal Leaps",song:"env2",maker:"ABC123",spawn:[0,0.5,0],init:function(){a.p([0.00014,-0.51986,-7.10986],[0,0,0],[14.4,0.76,14.64],"b3cb9a",0,0,0.6,true,false);a.s([5.11021,1.05021,-28.86979],2,"cfed7e",0,0,0.6,false);a.s([-3.64972,3.23028,-27.25972],3,"cfed7e",0,0,0.6,false);a.s([-22.77965,0.01035,-3.14965],3,"cfed7e",0,0,0.6,false);a.s([-16.29958,2.51042,-12.56958],2.32,"cfed7e",0,0,0.6,false);a.s([-3.64951,3.78049,14.57049],3,"cfed7e",0,0,0.6,false);a.s([2.95,2.06,16.58],2.32,"cfed7e",0,0,0.6,false);a.s([22.91007,2.51007,-11.87993],2.32,"cfed7e",0,0,0.6,false);a.s([27.67014,4.15014,-3.14986],3,"cfed7e",0,0,0.6,false);a.s([-7.82979,2.91021,-31.41979],3,"cfed7e",0,0,0.6,false);a.s([-20.62972,-0.44972,-9.36972],2.32,"cfed7e",0,0,0.6,false);a.s([25.08035,-1.37965,3.84035],3,"cfed7e",0,0,0.6,false);a.s([31.95042,-0.02958,-11.87958],2.32,"cfed7e",0,0,0.6,false);a.s([13.76049,1.90049,-27.89951],3,"cfed7e",0,0,0.6,false);a.s([11.81,0.11,8.15],2.32,"cfed7e",0,0,0.6,false);a.s([3.83007,4.80007,9.90007],2.32,"cfed7e",0,0,0.6,false);a.s([-13.71986,2.72014,7.16014],3,"cfed7e",0,0,0.6,false);a.s([-13.71979,-2.43979,-1.10979],3,"cfed7e",0,0,0.6,false);a.s([-8.92972,-0.97972,-22.86972],2,"cfed7e",0,0,0.6,false);a.s([-16.24965,3.23035,-22.64965],3,"cfed7e",0,0,0.6,false);a.s([16.02042,-4.55958,5.12042],2.32,"cfed7e",0,0,0.6,false);a.s([18.33049,-2.67951,-20.02951],2.32,"cfed7e",0,0,0.6,false);a.y([-27.82,-35.21,21.54],[0,0,0],[2,134.62,2],"e6a851",0,0,0.6,false,1);a.y([-26.38993,-35.20993,-28.79993],[0,0,0],[2,134.62,2],"e6a851",0,0,0.6,false,1);a.y([26.71014,-35.20986,-28.79986],[0,0,0],[2,134.62,2],"e6a851",0,0,0.6,false,1);a.y([27.10021,-35.20979,21.54021],[0,0,0],[2,134.62,2],"e6a851",0,0,0.6,false,1);a.p([67.98028,0.75028,-4.33972],[0,0,0],[1.9,2,9.18],"e27474",100.0,0,0.6,false,false);a.p([146.03035,0.75035,-5.98965],[0,0,0],[1.9,2,12.14],"e27474",100.0,0,0.6,false,false);a.p([67.98042,0.75042,-12.87958],[0,0,0],[1.9,2,3.22],"e27474",100.0,0,0.6,false,false);a.e([-195.60951,-0.00951,-7.09951]);a.p([-42.09,0.75,-11.46],[0,0,0],[1.9,2,6.34],"e27474",100.0,0,0.6,false,false);a.p([-42.08993,0.75007,-2.94993],[0,0,0],[1.9,2,6.34],"e27474",100.0,0,0.6,false,false);a.p([-101.61986,0.75014,-2.94986],[0,0,0],[1.9,2,6.34],"e27474",100.0,0,0.6,false,false);a.p([-101.61979,0.75021,-11.45979],[0,0,0],[1.9,2,6.34],"e27474",100.0,0,0.6,false,false);a.p([-189.55972,0.75028,-8.21972],[0,0,0],[1.9,2,12.62],"e27474",100.0,0,0.6,false,false);a.p([-1.04965,0.75035,50.69035],[0,0,0],[12.14,2,2],"e27474",100.0,0,0.6,false,false);a.p([-1.04958,0.75042,123.02042],[0,0,0],[12.14,2,2],"e27474",100.0,0,0.6,false,false);a.p([1.19049,0.75049,-27.84951],[0,0,0],[12.14,2,2],"e27474",100.0,0,0.6,false,false);a.p([-1.87,0.75,-112.93],[0,0,0],[12.14,2,2],"e27474",100.0,0,0.6,false,false);},post:function(){a.u('P1');a.u('P2');a.u('P3');a.u('E0');a.u('P4');a.u('P5');a.u('P6');a.u('P7');a.u('P8');a.u('P9');a.u('P10');a.u('P11');a.u('P12');cc.set_monkey("speed",default_speed*0.05);cc.set_monkey("jumpHeight",0.15);cc.set_monkey("jumpSpeed",3.0);cc.set_monkey("radius",4.0);cc.set_monkey("steer",default_steer*2.5);cc.set_monkey("scene.clearColor",new BABYLON.Color3.FromHexString("#ece279"));cc.set_monkey("cameraDownAngle",50.0*Math.PI/180);cc.refresh();},section_id:0,section_update:function(){let PZ=player.position.z;switch(this.section_id){case 0:if(PZ<-0.08992999999999896){this.section_id+=1}
break;case 1:a.mov('P1','x',-0.3);a.mov('P2','x',-0.3);a.mov('P3','x',-0.3);a.mov('E0','x',0.3);a.mov('P4','x',0.3);a.mov('P5','x',0.3);a.mov('P6','x',0.3);a.mov('P7','x',0.3);a.mov('P8','x',0.3);a.mov('P9','z',-0.3);a.mov('P10','z',-0.3);a.mov('P11','z',0.3);a.mov('P12','z',0.3);if(PZ<-36.469930000000005){this.section_id+=1}
break;}},reset:function(){this.section_id=0;a.re('P0',[0.00014,-0.51986,-7.10986],[0,0,0],[14.4,0.76,14.64]);a.re('S0',[5.11021,1.05021,-28.86979],[0,0,0],[2,2,2]);a.re('S1',[-3.64972,3.23028,-27.25972],[0,0,0],[3,3,3]);a.re('S2',[-22.77965,0.01035,-3.14965],[0,0,0],[3,3,3]);a.re('S3',[-16.29958,2.51042,-12.56958],[0,0,0],[2.32,2.32,2.32]);a.re('S4',[-3.64951,3.78049,14.57049],[0,0,0],[3,3,3]);a.re('S5',[2.95,2.06,16.58],[0,0,0],[2.32,2.32,2.32]);a.re('S6',[22.91007,2.51007,-11.87993],[0,0,0],[2.32,2.32,2.32]);a.re('S7',[27.67014,4.15014,-3.14986],[0,0,0],[3,3,3]);a.re('S8',[-7.82979,2.91021,-31.41979],[0,0,0],[3,3,3]);a.re('S9',[-20.62972,-0.44972,-9.36972],[0,0,0],[2.32,2.32,2.32]);a.re('S10',[25.08035,-1.37965,3.84035],[0,0,0],[3,3,3]);a.re('S11',[31.95042,-0.02958,-11.87958],[0,0,0],[2.32,2.32,2.32]);a.re('S12',[13.76049,1.90049,-27.89951],[0,0,0],[3,3,3]);a.re('S13',[11.81,0.11,8.15],[0,0,0],[2.32,2.32,2.32]);a.re('S14',[3.83007,4.80007,9.90007],[0,0,0],[2.32,2.32,2.32]);a.re('S15',[-13.71986,2.72014,7.16014],[0,0,0],[3,3,3]);a.re('S16',[-13.71979,-2.43979,-1.10979],[0,0,0],[3,3,3]);a.re('S17',[-8.92972,-0.97972,-22.86972],[0,0,0],[2,2,2]);a.re('S18',[-16.24965,3.23035,-22.64965],[0,0,0],[3,3,3]);a.re('S19',[16.02042,-4.55958,5.12042],[0,0,0],[2.32,2.32,2.32]);a.re('S20',[18.33049,-2.67951,-20.02951],[0,0,0],[2.32,2.32,2.32]);a.re('Y0',[-27.82,-35.21,21.54],[0,0,0],[2,134.62,2]);a.re('Y1',[-26.38993,-35.20993,-28.79993],[0,0,0],[2,134.62,2]);a.re('Y2',[26.71014,-35.20986,-28.79986],[0,0,0],[2,134.62,2]);a.re('Y3',[27.10021,-35.20979,21.54021],[0,0,0],[2,134.62,2]);a.re('P1',[67.98028,0.75028,-4.33972],[0,0,0],[1.9,2,9.18]);a.re('P2',[146.03035,0.75035,-5.98965],[0,0,0],[1.9,2,12.14]);a.re('P3',[67.98042,0.75042,-12.87958],[0,0,0],[1.9,2,3.22]);a.re('E0',[-195.60951,-0.00951,-7.09951],[0,0,0],[1,1,1]);a.re('P4',[-42.09,0.75,-11.46],[0,0,0],[1.9,2,6.34]);a.re('P5',[-42.08993,0.75007,-2.94993],[0,0,0],[1.9,2,6.34]);a.re('P6',[-101.61986,0.75014,-2.94986],[0,0,0],[1.9,2,6.34]);a.re('P7',[-101.61979,0.75021,-11.45979],[0,0,0],[1.9,2,6.34]);a.re('P8',[-189.55972,0.75028,-8.21972],[0,0,0],[1.9,2,12.62]);a.re('P9',[-1.04965,0.75035,50.69035],[0,0,0],[12.14,2,2]);a.re('P10',[-1.04958,0.75042,123.02042],[0,0,0],[12.14,2,2]);a.re('P11',[1.19049,0.75049,-27.84951],[0,0,0],[12.14,2,2]);a.re('P12',[-1.87,0.75,-112.93],[0,0,0],[12.14,2,2]);},physics_update:function(){},render_update:function(){}}