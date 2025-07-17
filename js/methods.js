document.addEventListener('DOMContentLoaded', function() {
    // Simulation variables
    let simulationInterval;
    let simulationSpeed = 5;
    let currentMethod = 'open-pit';
    let isPlaying = false;
    
    // DOM elements
    const methodSelect = document.getElementById('methodSelect');
    const speedControl = document.getElementById('speedControl');
    const viewSelect = document.getElementById('viewSelect');
    const playButton = document.getElementById('playButton');
    const resetButton = document.getElementById('resetButton');
    const simulationArea = document.getElementById('simulationArea');
    const simulationDescription = document.getElementById('simulationDescription');
    
    // Method descriptions
    const methodDescriptions = {
        'open-pit': {
            overview: 'Open-pit mining involves removing surface vegetation and overburden to expose the uranium ore. The ore is then drilled, blasted, and transported to a processing plant where it is crushed and treated with sulfuric acid to extract uranium.',
            detailed: 'The open-pit mining process begins with site preparation, including clearing vegetation and removing overburden. Drill holes are then made in the rock and filled with explosives. After blasting, large loaders transfer the broken ore to haul trucks which transport it to the primary crusher. The crushed ore is then ground into a fine powder and mixed with sulfuric acid in leaching tanks to dissolve the uranium. The uranium-rich solution is then processed through solvent extraction to produce yellowcake (U3O8).'
        },
        'heap-leach': {
            overview: 'Heap leaching involves crushing low-grade uranium ore and stacking it on an impermeable liner. A leaching solution (typically alkaline for calcrete deposits) is then sprayed over the heap to dissolve uranium, with the pregnant solution collected at the bottom for further processing.',
            detailed: 'In heap leaching, mined ore is first crushed to optimize leaching efficiency. The crushed ore is then stacked on an engineered pad with an impermeable liner. A leaching solution (sodium carbonate/bicarbonate for calcrete deposits) is sprayed over the heap using drip irrigation. The solution percolates through the ore, dissolving uranium, and is collected at the bottom. The pregnant solution is then pumped to a processing plant where uranium is recovered through ion exchange or solvent extraction. The barren solution is then recycled back to the heap.'
        },
        'isl': {
            overview: 'In-situ leaching (ISL) involves injecting a leaching solution directly into the ore-bearing aquifer through wells. The solution dissolves uranium in place, and the pregnant solution is pumped to the surface for processing, with minimal surface disturbance.',
            detailed: 'ISL begins with drilling injection and recovery wells into the ore-bearing aquifer. A leaching solution (typically oxygenated groundwater with possible additives) is injected through the injection wells. As the solution moves through the ore zone, it dissolves uranium. The pregnant solution is then extracted through recovery wells and pumped to the surface. At the processing plant, uranium is recovered from the solution using ion exchange or solvent extraction. The processed solution is then re-oxygenated and re-injected, creating a closed loop system.'
        }
    };
    
    // Initialize simulation
    function initSimulation() {
        clearSimulation();
        createSimulationElements();
        updateDescription();
    }
    
    // Create simulation elements based on selected method
    function createSimulationElements() {
        if (currentMethod === 'open-pit') {
            createOpenPitSimulation();
        } else if (currentMethod === 'heap-leach') {
            createHeapLeachSimulation();
        } else if (currentMethod === 'isl') {
            createISLSimulation();
        }
    }
    
    // Create open-pit simulation elements
    function createOpenPitSimulation() {
        // Add pit
        const pit = document.createElement('div');
        pit.className = 'mine-object open-pit';
        simulationArea.appendChild(pit);
        
        // Add trucks
        for (let i = 0; i < 3; i++) {
            const truck = document.createElement('div');
            truck.className = 'mine-object truck';
            truck.style.bottom = '20px';
            truck.style.left = `${20 + (i * 60)}px`;
            truck.style.transform = 'scaleX(-1)';
            simulationArea.appendChild(truck);
        }
        
        // Add drills
        const drill1 = document.createElement('div');
        drill1.className = 'mine-object drill';
        drill1.style.bottom = '180px';
        drill1.style.left = '150px';
        simulationArea.appendChild(drill1);
        
        const drill2 = document.createElement('div');
        drill2.className = 'mine-object drill';
        drill2.style.bottom = '220px';
        drill2.style.left = '250px';
        simulationArea.appendChild(drill2);
    }
    
    // Create heap leach simulation elements
    function createHeapLeachSimulation() {
        // Add heap leach pad
        const heap = document.createElement('div');
        heap.className = 'mine-object heap-leach';
        simulationArea.appendChild(heap);
        
        // Add processing plant
        const plant = document.createElement('div');
        plant.className = 'mine-object processing-plant';
        simulationArea.appendChild(plant);
        
        // Add solution sprinklers
        const sprinkler = document.createElement('div');
        sprinkler.className = 'mine-object';
        sprinkler.style.width = '100px';
        sprinkler.style.height = '20px';
        sprinkler.style.top = '50px';
        sprinkler.style.left = '50%';
        sprinkler.style.transform = 'translateX(-50%)';
        sprinkler.style.backgroundColor = '#3498db';
        sprinkler.style.borderRadius = '10px';
        simulationArea.appendChild(sprinkler);
    }
    
    // Create ISL simulation elements
    function createISLSimulation() {
        // Add injection wells
        for (let i = 0; i < 3; i++) {
            const well = document.createElement('div');
            well.className = 'mine-object';
            well.style.width = '10px';
            well.style.height = '200px';
            well.style.bottom = '20px';
            well.style.left = `${150 + (i * 100)}px`;
            well.style.backgroundColor = '#9b59b6';
            simulationArea.appendChild(well);
            
            const wellHead = document.createElement('div');
            wellHead.className = 'mine-object';
            wellHead.style.width = '30px';
            wellHead.style.height = '30px';
            wellHead.style.bottom = '220px';
            wellHead.style.left = `${140 + (i * 100)}px`;
            wellHead.style.backgroundColor = '#9b59b6';
            wellHead.style.borderRadius = '50%';
            simulationArea.appendChild(wellHead);
        }
        
        // Add processing plant
        const plant = document.createElement('div');
        plant.className = 'mine-object processing-plant';
        plant.style.right = '20px';
        plant.style.bottom = '20px';
        simulationArea.appendChild(plant);
    }
    
    // Clear simulation area
    function clearSimulation() {
        simulationArea.innerHTML = '';
    }
    
    // Update description based on selected method and view
    function updateDescription() {
        const view = viewSelect.value;
        simulationDescription.innerHTML = `
            <h5>${methodSelect.options[methodSelect.selectedIndex].text}</h5>
            <p>${methodDescriptions[currentMethod][view]}</p>
        `;
    }
    
    // Start simulation
    function startSimulation() {
        if (isPlaying) return;
        isPlaying = true;
        playButton.innerHTML = '<i class="fas fa-pause me-2"></i> Pause';
        
        // Simple animation - in a full implementation this would be more sophisticated
        const trucks = document.querySelectorAll('.truck');
        let positions = Array.from(trucks).map(t => parseInt(t.style.left));
        
        simulationInterval = setInterval(() => {
            positions = positions.map(pos => {
                const newPos = pos + simulationSpeed;
                return newPos > simulationArea.offsetWidth ? 0 : newPos;
            });
            
            trucks.forEach((truck, i) => {
                truck.style.left = `${positions[i]}px`;
            });
        }, 100);
    }
    
    // Pause simulation
    function pauseSimulation() {
        if (!isPlaying) return;
        isPlaying = false;
        clearInterval(simulationInterval);
        playButton.innerHTML = '<i class="fas fa-play me-2"></i> Play';
    }
    
    // Reset simulation
    function resetSimulation() {
        pauseSimulation();
        initSimulation();
    }
    
    // Event listeners
    methodSelect.addEventListener('change', function() {
        currentMethod = this.value;
        resetSimulation();
    });
    
    speedControl.addEventListener('input', function() {
        simulationSpeed = parseInt(this.value);
    });
    
    viewSelect.addEventListener('change', function() {
        updateDescription();
    });
    
    playButton.addEventListener('click', function() {
        if (isPlaying) {
            pauseSimulation();
        } else {
            startSimulation();
        }
    });
    
    resetButton.addEventListener('click', resetSimulation);
    
    // Initialize
    initSimulation();
});