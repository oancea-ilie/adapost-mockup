

export default class Charts{
    constructor(where){
        this.where = where;
        this.lineChart();
    }

    lineChart(){
        let trafficChart = new Chart(this.where,{
            type:"doughnut",
            data: this.lineChartData(),
            options: this.lineChartOptions()
        });
    }

    lineChartOptions(){
        let lineOptions={
            responsive:true,
            plugins:{
                legend:{
                    position: 'top',
                    labels:{
                        usePointStyle:true,
                    },
                },
            }
        };

        return lineOptions;
    }

    lineChartData(){
        let trafficData={

            labels:[
                "alka",
                '23-29',
                '30-5',
                '6-12',
                '13-19',
                '20-26',
                '27-3',
                '4-10',
                '11-17',
                '18-24',
                '25-31'
            ],
            datasets:[
                {
                    data:[800, 1300, 1000, 2000, 1500, 1700,1300,1800,2200,1500,2500],
                    backgroundColor:['red','blue','purple']
                },
            ],
        
        };
        return trafficData;
    }
    
}

