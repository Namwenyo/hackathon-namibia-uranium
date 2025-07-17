document.addEventListener('DOMContentLoaded', function() {
    // Water Usage Chart
    const waterCtx = document.getElementById('waterChart').getContext('2d');
    const waterChart = new Chart(waterCtx, {
        type: 'doughnut',
        data: {
            labels: ['Rössing Mine', 'Husab Mine', 'Other Uses'],
            datasets: [{
                data: [3, 4, 2],
                backgroundColor: [
                    '#3498db',
                    '#2980b9',
                    '#ecf0f1'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Water Usage (million m³/year)',
                    font: {
                        size: 14
                    }
                }
            },
            cutout: '70%'
        }
    });
    
    // Radiation Levels Chart
    const radiationCtx = document.getElementById('radiationChart').getContext('2d');
    const radiationChart = new Chart(radiationCtx, {
        type: 'bar',
        data: {
            labels: ['Workers', 'Public', 'Natural Background'],
            datasets: [{
                label: 'Radiation Exposure (mSv/year)',
                data: [5, 0.1, 2.4],
                backgroundColor: [
                    'rgba(52, 152, 219, 0.7)',
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(155, 89, 182, 0.7)'
                ],
                borderColor: [
                    'rgba(52, 152, 219, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(155, 89, 182, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'mSv/year'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Radiation Exposure Comparison',
                    font: {
                        size: 14
                    }
                }
            }
        }
    });
    
    // Waste Management Chart
    const wasteCtx = document.getElementById('wasteChart').getContext('2d');
    const wasteChart = new Chart(wasteCtx, {
        type: 'pie',
        data: {
            labels: ['Tailings', 'Waste Rock', 'Recycled', 'Other Waste'],
            datasets: [{
                data: [60, 25, 10, 5],
                backgroundColor: [
                    '#e67e22',
                    '#d35400',
                    '#2ecc71',
                    '#bdc3c7'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Waste Composition (%)',
                    font: {
                        size: 14
                    }
                }
            }
        }
    });
    
    // Environmental Trends Chart
    const trendsCtx = document.getElementById('trendsChart').getContext('2d');
    const trendsChart = new Chart(trendsCtx, {
        type: 'line',
        data: {
            labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [
                {
                    label: 'Water Usage Efficiency (m³/tU)',
                    data: [12, 11.5, 11, 10.5, 10, 9.8, 9.5, 9.3, 9],
                    borderColor: '#3498db',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    borderWidth: 3,
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Worker Radiation Exposure (mSv)',
                    data: [7.5, 7.2, 6.8, 6.5, 6.2, 6, 5.8, 5.5, 5],
                    borderColor: '#27ae60',
                    backgroundColor: 'rgba(39, 174, 96, 0.1)',
                    borderWidth: 3,
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Tailings Recycling (%)',
                    data: [60, 62, 65, 68, 70, 72, 74, 76, 78],
                    borderColor: '#e67e22',
                    backgroundColor: 'rgba(230, 126, 34, 0.1)',
                    borderWidth: 3,
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Environmental Performance Trends (2015-2023)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 20
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    });
    
    // Regional Impacts Chart
    const regionalCtx = document.getElementById('regionalChart').getContext('2d');
    const regionalChart = new Chart(regionalCtx, {
        type: 'radar',
        data: {
            labels: ['Water Use', 'Land Impact', 'Biodiversity', 'Air Quality', 'Radiation', 'Community'],
            datasets: [
                {
                    label: 'Rössing Mine',
                    data: [65, 70, 60, 80, 75, 85],
                    backgroundColor: 'rgba(52, 152, 219, 0.2)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(52, 152, 219, 1)'
                },
                {
                    label: 'Husab Mine',
                    data: [60, 75, 65, 85, 80, 75],
                    backgroundColor: 'rgba(46, 204, 113, 0.2)',
                    borderColor: 'rgba(46, 204, 113, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(46, 204, 113, 1)'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Regional Impact Assessment (0-100 scale)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'bottom',
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
    
    // Water Simulation
    const productionSlider = document.getElementById('productionSlider');
    const productionValue = document.getElementById('productionValue');
    const waterDrops = document.getElementById('waterDrops');
    const simulationResult = document.getElementById('simulationResult');
    const simWater = document.getElementById('simWater');
    const simEnergy = document.getElementById('simEnergy');
    const simWaste = document.getElementById('simWaste');
    const simCO2 = document.getElementById('simCO2');
    
    let dropInterval;
    let activeDrops = [];
    
    productionSlider.addEventListener('input', function() {
        const value = parseInt(this.value);
        productionValue.textContent = value.toLocaleString();
        
        // Update simulation results
        const water = (value * 0.7).toFixed(1);
        const energy = (value * 24).toFixed(0);
        const waste = (value * 3.6).toFixed(1);
        const co2 = (value * 17).toFixed(0);
        
        simWater.textContent = water;
        simEnergy.textContent = energy;
        simWaste.textContent = waste;
        simCO2.textContent = co2;
        
        simulationResult.classList.add('active');
        
        // Adjust drop frequency based on production level
        clearInterval(dropInterval);
        const intervalTime = Math.max(100, 1000 - (value / 10));
        
        dropInterval = setInterval(() => {
            createWaterDrop();
        }, intervalTime);
    });
    
    function createWaterDrop() {
        const drop = document.createElement('div');
        drop.className = 'water-drop';
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.top = '0';
        waterDrops.appendChild(drop);
        
        activeDrops.push(drop);
        
        // Animate drop falling
        let pos = 0;
        const fallInterval = setInterval(() => {
            pos += 2;
            drop.style.top = `${pos}px`;
            
            if (pos >= 200) {
                clearInterval(fallInterval);
                drop.remove();
                activeDrops = activeDrops.filter(d => d !== drop);
            }
        }, 20);
    }
    
    // Initialize with medium production
    productionSlider.dispatchEvent(new Event('input'));
    
    // Clean up intervals when leaving page
    window.addEventListener('beforeunload', function() {
        clearInterval(dropInterval);
    });
});