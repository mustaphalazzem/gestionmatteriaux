import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { MatButtonModule } from '@angular/material/button';
import { MaterielInformatiqueService } from 'app/service/materiel-informatique.service';
import { InventaireDTO, InventairefDTO, InventairesDTO, InventairetDTO } from 'app/service/regres';
import { FournitureService } from 'app/service/fourniture-service.service';

@Component({
  selector: 'app-acceuille',
  templateUrl: './acceuille.component.html',
  styleUrls: ['./acceuille.component.scss']
})
export class AcceuilleComponent implements OnInit {
  materielCount: number; // Propriété pour stocker le résultat
  //updatedMateriel: MaterielInformatique | null = null;
  //deletedMaterielId: string | null = null;
  inventaireParModel: InventaireDTO[] = [];
  inventaireParTypeMateriel: InventairetDTO[] = [];
  inventaireParFormeAchat: InventairefDTO[] = [];
  materielInformatiqueCount: number | null = null;
  materielCountt: number ;
  inventaireParSituation: InventairesDTO[] = [];
  constructor(private materiel:MaterielInformatiqueService,private forr:FournitureService) { }
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  ngOnInit() {
    this.count();
    this.count1();
    this.getInventaireParModel();
    this.getInventaireParSituation();
    this.getInventaireParFormeAchat();
    this.getInventaireParTypeMateriel();
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      const dataDailySalesChart: any = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);



      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var datawebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);
  }
  count(): void {
   
    
    this.materiel.getMaterielInformatiqueCount().subscribe(
        data => {
          this.materielCount=data
          
        },
        (error) => {
          console.error('There was an error!', error);
        }
    );
  }
  count1(): void {
   
    
    this.forr.getSumOfPrix().subscribe(
        data => {
          this.materielCountt=data
          
        },
        (error) => {
          console.error('There was an error!', error);
        }
    );
  }
  getInventaireParModel(): void {
    this.materiel.getInventaireParModel().subscribe(inventaire => {
      this.inventaireParModel = inventaire;
      console.log('Inventaire par Model: ', this.inventaireParModel);
    });
  }

  // Fonction pour obtenir l'inventaire par type de matériel
  getInventaireParTypeMateriel(): void {
    this.materiel.getInventaireParTypeMateriel().subscribe(inventaire => {
      this.inventaireParTypeMateriel = inventaire;
      console.log('Inventaire par Type Materiel: ', this.inventaireParTypeMateriel);
    });
  } 
   getInventaireParSituation(): void {
    this.materiel.getInventaireParSituation().subscribe(inventaire => {
      this.inventaireParSituation = inventaire;
      console.log('Inventaire par Situation: ', this.inventaireParSituation);
    });
  }getInventaireParFormeAchat(): void {
    this.forr.getInventaireParFormeAchat().subscribe(inventaire => {
      this.inventaireParFormeAchat = inventaire;
      console.log('Inventaire par Situation: ', this.inventaireParSituation);
    });
  }}

