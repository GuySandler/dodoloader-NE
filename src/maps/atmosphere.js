var map={title:"Atmosphere",song:"env2",maker:"Rionte",spawn:[0,0.5,0],init:function(){a.e([-7.3,16.3603,-399.43]);a.p([0,-4.10994,0.99],[0,0,0],[10.4,2.12,22.5],1,0);a.p([-0.54,-2.63988,-298.45],[0,0,0],[4.08,2.12,22.5],1,0);a.p([-4.74,-2.7998200000000004,-314.08],[0.64,0,0],[5.04,2.12,13.82],1,0);a.p([-8.96,-2.95976,-326.47],[0.1,0,0],[5.3,2.12,16.8],1,0);a.p([-8.96,-2.9997000000000003,-342.12],[-0.09,0,0],[5.28,2.12,16.8],1,0);a.y([-1.9,-82.87,-273.62],[0,0,0],[11.26,166.44,11.26],1.0,0);a.y([-7.29,-78.96994,-228.68],[0,0,0],[11.26,166.44,11.26],1.0,0);a.y([6.42,-82.86988,-240.8],[0,0,0],[11.26,166.44,11.26],2.0,0);a.y([-4.81,-80.58982,-256.27],[0,0,0],[11.26,166.44,11.26],2.0,0);a.y([-7.15,-11.38976,-387.85],[0,0,0],[27.18,54.64,27.18],2.0,0);a.y([3.4,-3.2297000000000002,-173.95],[0,0,-0.3],[23.3,200.7,23.3],3.0,0);a.y([-0.74,-2.94,-34.14],[0,0,0],[23.3,200.7,23.3],3.0,0);a.y([-6.85,-63.86994,-383.62],[0,0,0],[11.26,166.44,11.26],3.0,0);a.p([-0.23,-2.54988,-208.59],[0,0,0],[28.42,2,3.36],1,0);a.p([-0.93,12.09018,-70.81],[0,0,0],[3.74,0.7,11.1],3.0,0);a.p([1.73,12.11024,-81.46],[-0.44,0,0],[3.68,0.78,13.36],3.0,0);a.p([2.16,12.1503,-92.02],[0.38,0,0],[3.8,0.86,13.08],3.0,0);a.c([-0.79,2.97006,-56.46],true);a.c([-4.88,2.97012,-56.46],true);a.c([3.23,2.97018,-56.46],true);a.c([6.38,1.01024,-240.78],true);a.c([-7.23,4.910299999999999,-228.8],true);a.c([-4.87,3.29,-256.37],true);a.c([-1.92,1.01006,-273.54],true);a.c([-1.09,-1.14988,-302.28],true);a.c([0.16,-1.14982,-294.02],true);a.c([-3.99,-1.3097599999999998,-310.83],true);a.c([-4.77,-1.3096999999999999,-316.28],true);a.c([-7.71,-1.4699999999999998,-323.35],true);a.c([-10.61,-1.51994,-329.1],true);a.c([-9.44,-1.5798799999999997,-340.92],true);a.c([-7.36,-1.5798199999999998,-347.42],true);a.p([13.12,-3.30976,-34.11],[0,0.33,0],[2,2,17.36],1,0);a.p([8.88,-0.5597,-45.65],[0,0,0],[10.04,2,7.3],1,0);a.p([-11.76,-0.56,-45.89],[0,0,0],[10.04,2,7.3],1,0);a.p([-15.74,-3.30994,-34.37],[0,0.33,0],[2,2,17.36],1,0);a.p([-1.36,-0.55988,-45.89],[0,0,0],[11.66,2,7.3],1,0);a.p([-0.82,1.29018,-55.96],[0,0.33,0],[11.76,2,17.36],1,0);a.p([6.33,18.87024,-108.93],[0,0,0],[0.44,11.48,17.6],1,0);a.p([6.33,21.340300000000003,-126.19],[0,0,0],[0.5,11.48,17.6],1,0);a.p([-0.23,-5.13,-199.48],[0,0.33,0],[5.44,1.98,16.46],1,0);a.y([-0.74,179.44006000000002,-34.14],[0,0,0],[38.52,184.9,38.52],1,0);a.y([-20.26,-96.43987999999999,-173.95],[0,0,-0.25],[38.52,184.9,38.52],2.0,0);a.y([-0.74,-97.56981999999999,-31.47],[0,0,0],[38.52,184.9,38.52],2.0,0);a.y([10.58,179.44024000000002,-173.95],[0,0,0],[38.52,184.9,38.52],1,0);},post:function(){a.m('Y5').unfreezeWorldMatrix();a.m('Y6').unfreezeWorldMatrix();a.m('P5').unfreezeWorldMatrix();},section_id:0,section_update:function(){let PZ=player.position.z;switch(this.section_id){case 0:if(PZ<-0.33000000000000185){steer=default_steer*1.5;a.g(0,0.2,0);this.section_id+=1}
break;case 1:a.rot('Y5','y',1.5);a.rot('Y6','y',2.0);if(PZ<-60.269999999999996){steer=default_steer;a.g(0,1,0);this.section_id+=1}
break;case 2:if(PZ<-60.56){steer=default_steer*1.5;a.g(0,-0.5,0);this.section_id+=1}
break;case 3:a.rot('Y5','y',1.5);a.rot('Y6','y',2.0);if(PZ<-104.5){steer=default_steer;a.g(0,1,0);this.section_id+=1}
break;case 4:if(PZ<-105.05){steer=default_steer*1.5;a.g(-0.5,0.0,0);this.section_id+=1}
break;case 5:a.rot('Y5','y',1.5);a.rot('Y6','y',2.0);if(PZ<-132.67){steer=default_steer;a.g(0,1,0);this.section_id+=1}
break;case 6:if(PZ<-134.12){steer=default_steer*1.5;a.g(0,0.2,0);this.section_id+=1}
break;case 7:a.rot('Y5','y',1.5);a.rot('Y6','y',2.0);if(PZ<-207.64){steer=default_steer;a.g(0,1,0);this.section_id+=1}
break;case 8:if(PZ<-209.04999999999998){speed=default_speed*0.85;steer=default_steer*1.5;a.g(0,3.0,0);this.section_id+=1}
break;case 9:a.mov('P5','z',-0.85);if(PZ<-287.59){speed=default_speed;steer=default_steer;a.g(0,1,0);this.section_id+=1}
break;case 10:if(PZ<-288.41){steer=default_steer*-1.5;speed=default_speed*0.5;a.g(0,2.0,0);this.section_id+=1}
break;case 11:a.rot('Y5','y',1.5);a.rot('Y6','y',2.0);if(PZ<-346.19){steer=default_steer;speed=default_speed;a.g(0,1,0);this.section_id+=1}
break;case 12:if(PZ<-346.74){a.g(0,-0.5,0);this.section_id+=1}
break;case 13:a.rot('Y5','y',1.5);a.rot('Y6','y',2.0);if(PZ<-362.14){a.g(0,1,0);this.section_id+=1}
break;}},reset:function(){this.section_id=0;a.re('P0',[0,-4.10994,0.99],[0,0,0],[10.4,2.12,22.5]);a.re('P1',[-0.54,-2.63988,-298.45],[0,0,0],[4.08,2.12,22.5]);a.re('P2',[-4.74,-2.7998200000000004,-314.08],[0.64,0,0],[5.04,2.12,13.82]);a.re('P3',[-8.96,-2.95976,-326.47],[0.1,0,0],[5.3,2.12,16.8]);a.re('P4',[-8.96,-2.9997000000000003,-342.12],[-0.09,0,0],[5.28,2.12,16.8]);a.re('Y0',[-1.9,-82.87,-273.62],[0,0,0],[11.26,166.44,11.26]);a.re('Y1',[-7.29,-78.96994,-228.68],[0,0,0],[11.26,166.44,11.26]);a.re('Y2',[6.42,-82.86988,-240.8],[0,0,0],[11.26,166.44,11.26]);a.re('Y3',[-4.81,-80.58982,-256.27],[0,0,0],[11.26,166.44,11.26]);a.re('Y4',[-7.15,-11.38976,-387.85],[0,0,0],[27.18,54.64,27.18]);a.re('Y5',[3.4,-3.2297000000000002,-173.95],[0,0,-0.3],[23.3,200.7,23.3]);a.re('Y6',[-0.74,-2.94,-34.14],[0,0,0],[23.3,200.7,23.3]);a.re('Y7',[-6.85,-63.86994,-383.62],[0,0,0],[11.26,166.44,11.26]);a.re('P5',[-0.23,-2.54988,-208.59],[0,0,0],[28.42,2,3.36]);a.re('P6',[-0.93,12.09018,-70.81],[0,0,0],[3.74,0.7,11.1]);a.re('P7',[1.73,12.11024,-81.46],[-0.44,0,0],[3.68,0.78,13.36]);a.re('P8',[2.16,12.1503,-92.02],[0.38,0,0],[3.8,0.86,13.08]);a.re('C0',[-0.79,2.97006,-56.46],[0,0,0],[2,2,2]);a.re('C1',[-4.88,2.97012,-56.46],[0,0,0],[2,2,2]);a.re('C2',[3.23,2.97018,-56.46],[0,0,0],[2,2,2]);a.re('C3',[6.38,1.01024,-240.78],[0,0,0],[2,2,2]);a.re('C4',[-7.23,4.910299999999999,-228.8],[0,0,0],[2,2,2]);a.re('C5',[-4.87,3.29,-256.37],[0,0,0],[2,2,2]);a.re('C6',[-1.92,1.01006,-273.54],[0,0,0],[2,2,2]);a.re('C7',[-1.09,-1.14988,-302.28],[0,0,0],[2,2,2]);a.re('C8',[0.16,-1.14982,-294.02],[0,0,0],[2,2,2]);a.re('C9',[-3.99,-1.3097599999999998,-310.83],[0,0,0],[2,2,2]);a.re('C10',[-4.77,-1.3096999999999999,-316.28],[0,0,0],[2,2,2]);a.re('C11',[-7.71,-1.4699999999999998,-323.35],[0,0,0],[2,2,2]);a.re('C12',[-10.61,-1.51994,-329.1],[0,0,0],[2,2,2]);a.re('C13',[-9.44,-1.5798799999999997,-340.92],[0,0,0],[2,2,2]);a.re('C14',[-7.36,-1.5798199999999998,-347.42],[0,0,0],[2,2,2]);a.re('P9',[13.12,-3.30976,-34.11],[0,0.33,0],[2,2,17.36]);a.re('P10',[8.88,-0.5597,-45.65],[0,0,0],[10.04,2,7.3]);a.re('P11',[-11.76,-0.56,-45.89],[0,0,0],[10.04,2,7.3]);a.re('P12',[-15.74,-3.30994,-34.37],[0,0.33,0],[2,2,17.36]);a.re('P13',[-1.36,-0.55988,-45.89],[0,0,0],[11.66,2,7.3]);a.re('P14',[-0.82,1.29018,-55.96],[0,0.33,0],[11.76,2,17.36]);a.re('P15',[6.33,18.87024,-108.93],[0,0,0],[0.44,11.48,17.6]);a.re('P16',[6.33,21.340300000000003,-126.19],[0,0,0],[0.5,11.48,17.6]);a.re('P17',[-0.23,-5.13,-199.48],[0,0.33,0],[5.44,1.98,16.46]);a.re('Y8',[-0.74,179.44006000000002,-34.14],[0,0,0],[38.52,184.9,38.52]);a.re('Y9',[-20.26,-96.43987999999999,-173.95],[0,0,-0.25],[38.52,184.9,38.52]);a.re('Y10',[-0.74,-97.56981999999999,-31.47],[0,0,0],[38.52,184.9,38.52]);a.re('Y11',[10.58,179.44024000000002,-173.95],[0,0,0],[38.52,184.9,38.52]);},physics_update:function(){},render_update:function(){}}