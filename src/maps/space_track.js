var map={title:"Space Track",song:"env2",maker:"DestroyerBall",spawn:[0,0.5,0],init:function(){a.p([-5.169930000000001,11.12007,-61.70993000000001],[0,0,-1.57],[0.6,6,16],"0.0",0,0,0.6,false,false);a.p([27.08014,-1.21986,-58.85986],[0,0,-0.79],[0.6,4,20],"0.0",0,0,0.6,false,false);a.p([20.540210000000002,-0.45979,-41.499790000000004],[-1.57,0,-1.57],[0.6,2,12],"0.0",0,0,0.6,false,false);a.p([6.55028,-0.45972,-37.83972],[-1.57,0,-1.57],[0.6,2,12],"0.0",0,0,0.6,false,false);a.p([18.55035,-1.2196500000000001,-67.52965],[-1.57,0,0.79],[0.6,4,20],"0.0",0,0,0.6,false,false);a.p([0.00042,-0.99958,-28.819580000000002],[0,0,-0.79],[0.6,2,20],"0.0",0,0,0.6,false,false);a.p([10.56049,11.12049,-61.70951],[0,0,-1.57],[0.6,1.6,16],"0.0",0,0,0.6,false,false);a.p([-15.59,11.12,-99.59],[-1.57,0,-1.57],[0.6,1.6,16],"0.0",0,0,0.6,false,false);a.p([-6.789930000000001,11.12007,-92.27993000000001],[0,0,-1.57],[0.6,1.6,16],"0.0",0,0,0.6,false,false);a.p([-22.73986,11.12014,-90.87986000000001],[0,0,-1.57],[0.6,1.6,16],"0.0",0,0,0.6,false,false);a.p([20.29021,11.590209999999999,-88.65978999999999],[-1.57,0,-1.57],[0.2,20,20],"0.0",0,0,0.6,false,false);a.p([-5.66972,11.59028,-77.74972],[-1.57,0,-1.57],[0.2,2,32],"0.0",0,0,0.6,false,false);a.c([14.76035,12.160350000000001,-81.79965],"3.0");a.p([22.05042,12.000419999999998,-89.65958],[0,0,0],[0.2,2,18],"3.0",1000000000.0,0,0.6,false,false);a.p([17.84049,12.00049,-87.57950999999998],[0,0,0],[0.2,2,18],"3.0",1000000000.0,0,0.6,false,false);a.p([13.96,12,-89.66],[0,0,0],[0.2,2,18],"3.0",1000000000.0,0,0.6,false,false);a.p([12.12007,12.000070000000001,-80.73993],[-1.57,0,0],[0.2,2,4],"3.0",1000000000.0,0,0.6,false,false);a.p([26.390140000000002,12.000139999999998,-87.57986000000001],[0,0,0],[0.2,2,18],"3.0",100000000.0,0,0.6,false,false);a.p([3.8202100000000003,11.12021,-52.71979],[-1.57,0,-1.57],[0.6,2,12],"3.0",0,0,0.6,false,false);a.p([-1.9497200000000001,11.11028,-80.57972],[0.79,0,-1.57],[0.6,0.6,1],"3.0",0,0,0.6,false,false);a.p([-4.77965,11.11035,-82.63965],[0.79,0,-1.57],[0.6,0.6,6],"3.0",0,0,0.6,false,false);a.c([13.78042,0.73042,-39.629580000000004],"3.0");a.c([27.81049,0.73049,-44.89951],"3.0");a.c([26.55,-0.7200000000000001,-67.06],"3.0");a.c([3.55007,5.9400699999999995,-67.77993000000001],"3.0");a.c([17.01014,12.160139999999998,-92.36986],"3.0");a.c([21.22021,12.16021,-95.95979],"3.0");a.c([18.73028,12.16028,-86.83972],"3.0");a.c([22.85035,12.160350000000001,-81.05965],"3.0");a.c([24.07042,12.160419999999998,-87.29958],"3.0");a.c([22.85049,12.16049,-93.51951],"3.0");a.p([0,-1,-9.67],[0,0,0],[0.6,2,20],"3.0",0,0,0.6,false,false);a.y([13.990070000000001,-2.52993,-39.51993],[0,-1.57,0],[6,6,6],"3.0",0,0,0.6,false,1);a.y([27.92014,-2.5298599999999998,-44.95986],[0,-1.57,0],[6,9,6],"3.0",0,0,0.6,false,1);a.p([3.38021,2.96021,-67.77979],[-1.57,-0.79,0],[4,4,20],"3.0",0,0,0.6,false,false);a.p([4.390280000000001,11.11028,-74.98971999999999],[0.79,0,-1.57],[0.6,0.6,16],"3.0",0,0,0.6,false,false);a.y([-21.91965,10.800350000000002,-81.25965000000001],[0,-1.57,0],[2,9,2],"0.0",0,0,0.6,false,1);a.e([29.46049,11.69049,-86.71950999999999]);},post:function(){cc.set_monkey("speed",0.2);cc.set_monkey("steer",0.03);cc.refresh();},section_id:0,section_update:function(){let PZ=player.position.z;switch(this.section_id){case 0:if(PZ<-0.019580000000004816){speed=default_speed*0.6;steer=default_steer*3.0;this.section_id+=1}
break;case 1:if(PZ<-200.01958000000002){speed=cc.get("speed",null);steer=cc.get("steer",null);this.section_id+=1}
break;}},reset:function(){this.section_id=0;a.re('P0',[-5.169930000000001,11.12007,-61.70993000000001],[0,0,-1.57],[0.6,6,16]);a.re('P1',[27.08014,-1.21986,-58.85986],[0,0,-0.79],[0.6,4,20]);a.re('P2',[20.540210000000002,-0.45979,-41.499790000000004],[-1.57,0,-1.57],[0.6,2,12]);a.re('P3',[6.55028,-0.45972,-37.83972],[-1.57,0,-1.57],[0.6,2,12]);a.re('P4',[18.55035,-1.2196500000000001,-67.52965],[-1.57,0,0.79],[0.6,4,20]);a.re('P5',[0.00042,-0.99958,-28.819580000000002],[0,0,-0.79],[0.6,2,20]);a.re('P6',[10.56049,11.12049,-61.70951],[0,0,-1.57],[0.6,1.6,16]);a.re('P7',[-15.59,11.12,-99.59],[-1.57,0,-1.57],[0.6,1.6,16]);a.re('P8',[-6.789930000000001,11.12007,-92.27993000000001],[0,0,-1.57],[0.6,1.6,16]);a.re('P9',[-22.73986,11.12014,-90.87986000000001],[0,0,-1.57],[0.6,1.6,16]);a.re('P10',[20.29021,11.590209999999999,-88.65978999999999],[-1.57,0,-1.57],[0.2,20,20]);a.re('P11',[-5.66972,11.59028,-77.74972],[-1.57,0,-1.57],[0.2,2,32]);a.re('C0',[14.76035,12.160350000000001,-81.79965],[0,0,0],[2,2,2]);a.re('P12',[22.05042,12.000419999999998,-89.65958],[0,0,0],[0.2,2,18]);a.re('P13',[17.84049,12.00049,-87.57950999999998],[0,0,0],[0.2,2,18]);a.re('P14',[13.96,12,-89.66],[0,0,0],[0.2,2,18]);a.re('P15',[12.12007,12.000070000000001,-80.73993],[-1.57,0,0],[0.2,2,4]);a.re('P16',[26.390140000000002,12.000139999999998,-87.57986000000001],[0,0,0],[0.2,2,18]);a.re('P17',[3.8202100000000003,11.12021,-52.71979],[-1.57,0,-1.57],[0.6,2,12]);a.re('P18',[-1.9497200000000001,11.11028,-80.57972],[0.79,0,-1.57],[0.6,0.6,1]);a.re('P19',[-4.77965,11.11035,-82.63965],[0.79,0,-1.57],[0.6,0.6,6]);a.re('C1',[13.78042,0.73042,-39.629580000000004],[0,0,0],[2,2,2]);a.re('C2',[27.81049,0.73049,-44.89951],[0,0,0],[2,2,2]);a.re('C3',[26.55,-0.7200000000000001,-67.06],[0,0,0],[2,2,2]);a.re('C4',[3.55007,5.9400699999999995,-67.77993000000001],[0,0,0],[2,2,2]);a.re('C5',[17.01014,12.160139999999998,-92.36986],[0,0,0],[2,2,2]);a.re('C6',[21.22021,12.16021,-95.95979],[0,0,0],[2,2,2]);a.re('C7',[18.73028,12.16028,-86.83972],[0,0,0],[2,2,2]);a.re('C8',[22.85035,12.160350000000001,-81.05965],[0,0,0],[2,2,2]);a.re('C9',[24.07042,12.160419999999998,-87.29958],[0,0,0],[2,2,2]);a.re('C10',[22.85049,12.16049,-93.51951],[0,0,0],[2,2,2]);a.re('P20',[0,-1,-9.67],[0,0,0],[0.6,2,20]);a.re('Y0',[13.990070000000001,-2.52993,-39.51993],[0,-1.57,0],[6,6,6]);a.re('Y1',[27.92014,-2.5298599999999998,-44.95986],[0,-1.57,0],[6,9,6]);a.re('P21',[3.38021,2.96021,-67.77979],[-1.57,-0.79,0],[4,4,20]);a.re('P22',[4.390280000000001,11.11028,-74.98971999999999],[0.79,0,-1.57],[0.6,0.6,16]);a.re('Y2',[-21.91965,10.800350000000002,-81.25965000000001],[0,-1.57,0],[2,9,2]);a.re('E0',[29.46049,11.69049,-86.71950999999999],[0,0,0],[1,1,1]);},physics_update:function(){},render_update:function(){}}