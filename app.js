// Temperature Reduction Chart
const ctx = document.getElementById('tempReductionChart').getContext('2d');
const tempReductionChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Temperature Reduction (°C)',
            data: [5.2, 5.5, 5.8, 6.0, 6.1, 6.3, 6.0],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Temperature Reduction (°C)'
                },
                beginAtZero: true
            }
        }
    }
});

// CO₂ Capture Progress Chart
const co2Ctx = document.getElementById('co2CaptureChart').getContext('2d');
const co2CaptureChart = new Chart(co2Ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'CO₂ Captured (kg)',
            data: [800, 950, 1100, 1245, 1300, 1400, 1500],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'CO₂ Captured (kg)'
                },
                beginAtZero: true
            }
        }
    }
});

// Global CO₂ Levels Chart
const globalCO2Ctx = document.getElementById('globalCO2Chart').getContext('2d');
const globalCO2Chart = new Chart(globalCO2Ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Global CO₂ Levels (ppm)',
            data: [417, 416, 415.5, 415, 414.8, 414.5, 414.2],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'CO₂ Levels (ppm)'
                },
                beginAtZero: false
            }
        }
    }
});

// Hybrid Cooling Breakthrough Pie Chart
const hybridCoolingCtx = document.getElementById('hybridCoolingChart').getContext('2d');
const hybridCoolingChart = new Chart(hybridCoolingCtx, {
    type: 'pie',
    data: {
        labels: ['Urban Cooling', 'Energy Savings', 'CO₂ Reduction'],
        datasets: [{
            label: 'Hybrid Cooling Benefits',
            data: [40, 35, 25], // Example percentages
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            }
        }
    }
});