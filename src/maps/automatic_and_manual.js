var map={title:"automatic and manual",song:"env2",maker:"Rocky707",spawn:[0,0.5,0],init:function(){a.p([-3.58986,12.400139999999999,-163.88986],[0,0,0],[1.26,23.42,6.22],"-1.0",0,0,0.6,false,false);a.p([3.52021,12.40021,-163.88979],[0,0,0],[1.26,23.42,6.22],"-1.0",0,0,0.6,false,false);a.c([0.43028,0.24027999999999994,-176.55972000000003],false);a.c([-0.27965,0.24034999999999995,-176.55965],false);a.c([0.00035000000000000005,0.24034999999999995,-7.049650000000001],true);a.c([-0.27958,0.24041999999999997,-7.04958],true);a.c([0.43049,0.24048999999999998,-7.049510000000001],true);a.c([0.98,0.24,-7.05],true);a.c([-0.7799299999999999,0.24006999999999995,-7.049930000000001],true);a.c([-0.77986,0.24014000000000002,-176.55986000000001],false);a.c([0.98021,0.24020999999999998,-176.55979],false);a.c([0.00028000000000000003,0.24027999999999994,-176.55972000000003],false);a.p([0.00035000000000000005,-0.36965000000000003,-8.38965],[0,0,0],[6.42,0.44,18.26],"1",0,0,0.6,false,false);a.p([-2.46958,-0.36957999999999996,-21.94958],[0,0,0],[1.44,0.44,8.92],"1",0,0,0.6,false,false);a.p([2.52049,-0.36951,-21.94951],[0,0,0],[1.44,0.44,8.92],"1",0,0,0.6,false,false);a.p([0,-0.37,-29.77],[0,0,0],[6.42,0.44,7.16],"1",0,0,0.6,false,false);a.p([0.00007000000000000001,-0.36993000000000004,-37.64993],[0,0,0],[0.44,0.44,8.92],"1",0,0,0.6,false,false);a.p([-0.40985999999999995,-0.36985999999999997,-44.87986],[0,0,-0.79],[6.42,0.44,7.16],"1",0,0,0.6,false,false);a.p([0.00021,-1.3197900000000002,-51.62979],[0,0,0],[6.42,0.44,7.16],"1",0,0,0.6,false,false);a.p([6.600280000000001,-1.31972,-53.079719999999995],[-1.57,0,0],[4.14,0.44,7.16],"1",0,0,0.6,false,false);a.p([8.08035,-1.31965,-58.71965],[0,0,0],[4.14,0.44,7.16],"1",0,0,0.6,false,false);a.p([6.600420000000001,-1.31958,-64.33958],[-1.57,0,0],[4.14,0.44,7.16],"1",0,0,0.6,false,false);a.p([0.00049,-1.31951,-70.17951],[0,0,0],[6.42,0.44,15.96],"1",0,0,0.6,false,false);a.p([0,12.4,-167.98],[0,0,0],[6.42,23.42,2.58],"1",0,0,0.6,false,false);a.p([-2.4699299999999997,-0.36993000000000004,-191.45992999999999],[0,0,0],[1.44,0.44,8.92],"2.0",0,0,0.6,false,false);a.p([0.00014000000000000001,-0.36985999999999997,-174.51986],[0,0,0],[6.42,0.44,25.46],"2.0",0,0,0.6,false,false);a.p([0.00021,-0.36979,-199.26979],[0,0,0],[6.42,0.44,7.16],"2.0",0,0,0.6,false,false);a.p([2.52028,-0.36972,-191.45972],[0,0,0],[1.44,0.44,8.92],"2.0",0,0,0.6,false,false);a.p([0.00035000000000000005,-0.36965000000000003,-206.94965],[0,0,0],[0.44,0.44,8.92],"2.0",0,0,0.6,false,false);a.p([-0.40958,-0.36957999999999996,-214.37957999999998],[0,0,-0.79],[6.42,0.44,7.16],"2.0",0,0,0.6,false,false);a.p([0.00049,-1.31951,-221.12951],[0,0,0],[6.42,0.44,7.16],"2.0",0,0,0.6,false,false);a.p([6.6,-1.32,-222.59],[-1.57,0,0],[4.14,0.44,7.16],"2.0",0,0,0.6,false,false);a.p([8.08007,-1.31993,-228.21992999999998],[0,0,0],[4.14,0.44,7.16],"2.0",0,0,0.6,false,false);a.p([0.00014000000000000001,-1.3198599999999998,-239.68986],[0,0,0],[6.42,0.44,15.96],"2.0",0,0,0.6,false,false);a.p([6.60021,-1.3197900000000002,-233.83979],[-1.57,0,0],[4.14,0.44,7.16],"2.0",0,0,0.6,false,false);a.e([0.00028000000000000003,-0.9397199999999999,-245.78972000000002]);},post:function(){cc.set_monkey("steer",default_steer*0.0);cc.set_monkey("speed",0.2);cc.refresh();},section_id:0,section_update:function(){let PZ=player.position.z;switch(this.section_id){case 0:if(PZ<-0.57951){rotation=5.0*Math.PI/180;this.section_id+=1}
break;case 1:if(PZ<-1.11951){this.section_id+=1}
break;case 2:if(PZ<-1.2){rotation=10.0*Math.PI/180;this.section_id+=1}
break;case 3:if(PZ<-1.74){this.section_id+=1}
break;case 4:if(PZ<-1.78986){rotation=15.0*Math.PI/180;this.section_id+=1}
break;case 5:if(PZ<-2.32986){this.section_id+=1}
break;case 6:if(PZ<-2.3697199999999996){rotation=20.0*Math.PI/180;this.section_id+=1}
break;case 7:if(PZ<-2.9097199999999996){this.section_id+=1}
break;case 8:if(PZ<-2.9795800000000003){rotation=25.0*Math.PI/180;this.section_id+=1}
break;case 9:if(PZ<-3.5195800000000004){this.section_id+=1}
break;case 10:if(PZ<-6.419790000000001){rotation=15.0*Math.PI/180;this.section_id+=1}
break;case 11:if(PZ<-6.95979){this.section_id+=1}
break;case 12:if(PZ<-5.839650000000001){rotation=20.0*Math.PI/180;this.section_id+=1}
break;case 13:if(PZ<-6.37965){this.section_id+=1}
break;case 14:if(PZ<-6.999930000000001){rotation=10.0*Math.PI/180;this.section_id+=1}
break;case 15:if(PZ<-7.53993){this.section_id+=1}
break;case 16:if(PZ<-7.619999999999999){rotation=5.0*Math.PI/180;this.section_id+=1}
break;case 17:if(PZ<-8.16){this.section_id+=1}
break;case 18:if(PZ<-8.299650000000002){rotation=0.0*Math.PI/180;this.section_id+=1}
break;case 19:if(PZ<-8.83965){this.section_id+=1}
break;case 20:if(PZ<-9.57){rotation=-10.0*Math.PI/180;this.section_id+=1}
break;case 21:if(PZ<-10.11){this.section_id+=1}
break;case 22:if(PZ<-8.949860000000001){rotation=-5.0*Math.PI/180;this.section_id+=1}
break;case 23:if(PZ<-9.48986){this.section_id+=1}
break;case 24:if(PZ<-10.149790000000001){rotation=-5.0*Math.PI/180;this.section_id+=1}
break;case 25:if(PZ<-10.68979){this.section_id+=1}
break;case 26:if(PZ<-10.869580000000001){rotation=0.0*Math.PI/180;this.section_id+=1}
break;case 27:if(PZ<-11.40958){this.section_id+=1}
break;case 28:if(PZ<-29.13993){rotation=-45.0*Math.PI/180;this.section_id+=1}
break;case 29:if(PZ<-29.67993){this.section_id+=1}
break;case 30:if(PZ<-31.529510000000002){rotation=0.0*Math.PI/180;this.section_id+=1}
break;case 31:if(PZ<-32.06951){this.section_id+=1}
break;case 32:if(PZ<-53.22971999999999){rotation=-87.5*Math.PI/180;this.section_id+=1}
break;case 33:if(PZ<-53.76972){this.section_id+=1}
break;case 34:if(PZ<-53.779579999999996){rotation=-0.0*Math.PI/180;this.section_id+=1}
break;case 35:if(PZ<-54.31958){this.section_id+=1}
break;case 36:if(PZ<-64.27993000000001){rotation=85.0*Math.PI/180;this.section_id+=1}
break;case 37:if(PZ<-64.81993){this.section_id+=1}
break;case 38:if(PZ<-64.82951){rotation=-0.0*Math.PI/180;this.section_id+=1}
break;case 39:if(PZ<-65.36950999999999){this.section_id+=1}
break;case 40:if(PZ<-74.41993){a.g(null,-0.05,1.0);this.section_id+=1}
break;case 41:if(PZ<-165.93993){a.g(null,null,null);this.section_id+=1}
break;case 42:if(PZ<-166.92979){steer=default_steer*1.0;this.section_id+=1}
break;case 43:if(PZ<-220.46979000000002){steer=cc.get("steer",null);this.section_id+=1}
break;case 44:if(PZ<-220.58972000000003){steer=default_steer*4.0;this.section_id+=1}
break;case 45:if(PZ<-270.16972000000004){steer=cc.get("steer",null);this.section_id+=1}
break;}},reset:function(){this.section_id=0;a.re('P0',[-3.58986,12.400139999999999,-163.88986],[0,0,0],[1.26,23.42,6.22]);a.re('P1',[3.52021,12.40021,-163.88979],[0,0,0],[1.26,23.42,6.22]);a.re('C0',[0.43028,0.24027999999999994,-176.55972000000003],[0,0,0],[2,2,2]);a.re('C1',[-0.27965,0.24034999999999995,-176.55965],[0,0,0],[2,2,2]);a.re('C2',[0.00035000000000000005,0.24034999999999995,-7.049650000000001],[0,0,0],[2,2,2]);a.re('C3',[-0.27958,0.24041999999999997,-7.04958],[0,0,0],[2,2,2]);a.re('C4',[0.43049,0.24048999999999998,-7.049510000000001],[0,0,0],[2,2,2]);a.re('C5',[0.98,0.24,-7.05],[0,0,0],[2,2,2]);a.re('C6',[-0.7799299999999999,0.24006999999999995,-7.049930000000001],[0,0,0],[2,2,2]);a.re('C7',[-0.77986,0.24014000000000002,-176.55986000000001],[0,0,0],[2,2,2]);a.re('C8',[0.98021,0.24020999999999998,-176.55979],[0,0,0],[2,2,2]);a.re('C9',[0.00028000000000000003,0.24027999999999994,-176.55972000000003],[0,0,0],[2,2,2]);a.re('P2',[0.00035000000000000005,-0.36965000000000003,-8.38965],[0,0,0],[6.42,0.44,18.26]);a.re('P3',[-2.46958,-0.36957999999999996,-21.94958],[0,0,0],[1.44,0.44,8.92]);a.re('P4',[2.52049,-0.36951,-21.94951],[0,0,0],[1.44,0.44,8.92]);a.re('P5',[0,-0.37,-29.77],[0,0,0],[6.42,0.44,7.16]);a.re('P6',[0.00007000000000000001,-0.36993000000000004,-37.64993],[0,0,0],[0.44,0.44,8.92]);a.re('P7',[-0.40985999999999995,-0.36985999999999997,-44.87986],[0,0,-0.79],[6.42,0.44,7.16]);a.re('P8',[0.00021,-1.3197900000000002,-51.62979],[0,0,0],[6.42,0.44,7.16]);a.re('P9',[6.600280000000001,-1.31972,-53.079719999999995],[-1.57,0,0],[4.14,0.44,7.16]);a.re('P10',[8.08035,-1.31965,-58.71965],[0,0,0],[4.14,0.44,7.16]);a.re('P11',[6.600420000000001,-1.31958,-64.33958],[-1.57,0,0],[4.14,0.44,7.16]);a.re('P12',[0.00049,-1.31951,-70.17951],[0,0,0],[6.42,0.44,15.96]);a.re('P13',[0,12.4,-167.98],[0,0,0],[6.42,23.42,2.58]);a.re('P14',[-2.4699299999999997,-0.36993000000000004,-191.45992999999999],[0,0,0],[1.44,0.44,8.92]);a.re('P15',[0.00014000000000000001,-0.36985999999999997,-174.51986],[0,0,0],[6.42,0.44,25.46]);a.re('P16',[0.00021,-0.36979,-199.26979],[0,0,0],[6.42,0.44,7.16]);a.re('P17',[2.52028,-0.36972,-191.45972],[0,0,0],[1.44,0.44,8.92]);a.re('P18',[0.00035000000000000005,-0.36965000000000003,-206.94965],[0,0,0],[0.44,0.44,8.92]);a.re('P19',[-0.40958,-0.36957999999999996,-214.37957999999998],[0,0,-0.79],[6.42,0.44,7.16]);a.re('P20',[0.00049,-1.31951,-221.12951],[0,0,0],[6.42,0.44,7.16]);a.re('P21',[6.6,-1.32,-222.59],[-1.57,0,0],[4.14,0.44,7.16]);a.re('P22',[8.08007,-1.31993,-228.21992999999998],[0,0,0],[4.14,0.44,7.16]);a.re('P23',[0.00014000000000000001,-1.3198599999999998,-239.68986],[0,0,0],[6.42,0.44,15.96]);a.re('P24',[6.60021,-1.3197900000000002,-233.83979],[-1.57,0,0],[4.14,0.44,7.16]);a.re('E0',[0.00028000000000000003,-0.9397199999999999,-245.78972000000002],[0,0,0],[1,1,1]);},physics_update:function(){},render_update:function(){}}