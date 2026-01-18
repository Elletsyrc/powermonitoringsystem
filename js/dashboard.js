$(function(){
    (async function() {
        window.totalPowerChart = new Chart(
            document.getElementById('total-power'),
            {
                type: 'line',
                data: {
                    labels: hourlyConsumption.map(row => new Date(row.timestamp * 1000).getHours() + ":00"),
                    datasets: [
                    {
                        label: 'Consumption (kWh)',
                        data: hourlyConsumption.map(row => row.consumption)
                    }
                    ]
                },
                options: {
                    maintainAspectRatio: false
                }
            }
        );
    })();
    (async function() {
        let data = powerDistributionRatio.hourly.sort((a, b) => a.value - b.value);
        window.powerDistribChart = new Chart(
            document.getElementById('power-distribution'),
            {
                type: 'doughnut',
                data: {
                    labels: data.map(row => {
                        return window.meters[row.id];
                    }),
                    datasets: [
                    {
                        label: 'Consumption (kWh)',
                        data: data.map(row => hourlyConsumption.map(row => row.consumption).reduce((a, b) => a + b) * row.value)
                    }
                    ]
                },
                options: {
                    maintainAspectRatio: false
                }
            }
        );
    })();
    (async function() {
        let data = [
            { "segment": "Used", "color" : "#C0C04B", "value": 38836 },
            { "segment": "Projected", "color" : "#7F7F7F", "value": 22484 }
        ];
        window.powerDistribChart = new Chart(
            document.getElementById('power-projected'),
            {
                type: 'doughnut',
                data: {
                    labels: data.map(row => {
                        return row.segment;
                    }),
                    datasets: [
                    {
                        label: 'Consumption (kWh)',
                        data: data.map(row => row.value),
                        backgroundColor: data.map(row => row.color)
                    }
                    ]
                },
                options: {
                    cutout: 75,
                    maintainAspectRatio: false,
                    circumference: 270,
                    rotation: 225
                }
            }
        );
    })();
    (async function() {
        let total = hourlyConsumption.map(row => row.consumption).reduce((a, b) => a + b);
        let data = [
            { "segment": "Used", "color" : "#4BC04B", "value": total },
            { "segment": "Remaining Allotted", "color" : "#7F7F7F", "value": total / 0.5275 - total}
        ];
        window.powerDistribChart = new Chart(
            document.getElementById('power-allotted'),
            {
                type: 'doughnut',
                data: {
                    labels: data.map(row => {
                        return row.segment;
                    }),
                    datasets: [
                    {
                        label: 'Consumption (kWh)',
                        data: data.map(row => row.value),
                        backgroundColor: data.map(row => row.color)
                    }
                    ]
                },
                options: {
                    cutout: 75,
                    maintainAspectRatio: false
                }
            }
        );
    })();
});