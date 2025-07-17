document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map
    const map = L.map('map').setView([-22.5, 17.0], 7);
    
    // Add base tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add satellite imagery layer
    const satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });
    
    // Add geological layer (would need actual GeoJSON data)
    // This is a placeholder - in a real implementation you would load actual GeoJSON data
    const geologyLayer = L.layerGroup();
    
    // Add layer control
    const baseLayers = {
        "Street Map": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }),
        "Satellite Imagery": satellite
    };
    
    const overlays = {
        "Geological Features": geologyLayer
    };
    
    L.control.layers(baseLayers, overlays).addTo(map);
    
    // Define custom icons
    const activeMineIcon = L.icon({
        iconUrl: 'images/mine-active.png',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
    
    const depositIcon = L.icon({
        iconUrl: 'images/deposit.png',
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -28]
    });
    
    const explorationIcon = L.icon({
        iconUrl: 'images/exploration.png',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25]
    });
    
    const calcreteIcon = L.icon({
        iconUrl: 'images/calcrete.png',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25]
    });
    
    const alaskiteIcon = L.icon({
        iconUrl: 'images/alaskite.png',
        iconSize: [25, 25],
        iconAnchor: [12, 25],
        popupAnchor: [0, -25]
    });
    
    // Sample data for uranium mines and deposits in Namibia
    const uraniumSites = [
        {
            name: "Rössing Uranium Mine",
            type: "active",
            coords: [-22.485, 15.035],
            description: "Rössing Uranium Mine is one of the longest-running open-pit uranium mines in the world. It's located in the Namib Desert near Arandis.",
            geology: "The Rössing deposit is hosted in alaskite, a light-colored, granitic rock that forms part of the Damara Belt. Mineralization consists of uraninite and betafite.",
            depositType: "Alaskite-hosted",
            oreGrade: "0.03% U3O8",
            mineralization: "Uraninite, Betafite",
            hostRock: "Alaskite granite",
            annualProduction: "1,850 tU (2023)",
            reserves: "84,000 tU",
            miningMethod: "Open-pit",
            processing: "Crushing, grinding, sulfuric acid leaching",
            operator: "Rössing Uranium Ltd (CNNC 68.3%, Iran 15%, South Africa 10%, Namibia 3%, other 3.7%)",
            images: [
                "rossing-1.jpg",
                "rossing-2.jpg",
                "rossing-3.jpg"
            ],
            productionData: {
                labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
                data: [1901, 1865, 1750, 1820, 1880, 1850]
            }
        },
        {
            name: "Husab Uranium Mine",
            type: "active",
            coords: [-22.633, 15.033],
            description: "Husab Uranium Mine is one of the largest uranium mines in the world, located approximately 30 km southwest of Rössing.",
            geology: "The Husab deposit is hosted in alaskite within the Damara Belt. The ore body is larger but lower grade than Rössing, with uraninite as the primary mineral.",
            depositType: "Alaskite-hosted",
            oreGrade: "0.04% U3O8",
            mineralization: "Uraninite",
            hostRock: "Alaskite granite",
            annualProduction: "5,500 tU (2023)",
            reserves: "152,000 tU",
            miningMethod: "Open-pit",
            processing: "Crushing, grinding, sulfuric acid leaching",
            operator: "Swakop Uranium (CGNPC 90%, Namibia 10%)",
            images: [
                "husab-1.jpg",
                "husab-2.jpg",
                "husab-3.jpg"
            ],
            productionData: {
                labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
                data: [1200, 2800, 3800, 4500, 4800, 5100, 5300, 5500]
            }
        },
        {
            name: "Langer Heinrich Mine",
            type: "deposit",
            coords: [-23.533, 15.300],
            description: "Langer Heinrich is a calcrete-hosted uranium deposit located in the Namib Desert, about 80 km east of Walvis Bay.",
            geology: "The deposit occurs in calcrete-filled paleochannels in the Namib Desert. Uranium mineralization is associated with carnotite and tyuyamunite.",
            depositType: "Calcrete paleochannel",
            oreGrade: "0.06% U3O8",
            mineralization: "Carnotite, Tyuyamunite",
            hostRock: "Calcrete",
            annualProduction: "Currently in care and maintenance",
            reserves: "52,000 tU",
            miningMethod: "Open-pit (proposed in-situ recovery)",
            processing: "Alkaline heap leaching",
            operator: "Paladin Energy (75%, Namibia 25%)",
            images: [
                "langer-1.jpg",
                "langer-2.jpg"
            ],
            productionData: {
                labels: ["2014", "2015", "2016", "2017", "2018"],
                data: [1080, 1080, 1050, 980, 0]
            }
        },
        {
            name: "Trekkopje Uranium Project",
            type: "deposit",
            coords: [-23.417, 15.783],
            description: "Trekkopje is a large, low-grade calcrete-hosted uranium deposit located northeast of Swakopmund.",
            geology: "The deposit occurs in calcrete-filled paleodrainage channels. Mineralization consists of uranyl vanadates (carnotite and tyuyamunite).",
            depositType: "Calcrete paleochannel",
            oreGrade: "0.013% U3O8",
            mineralization: "Carnotite, Tyuyamunite",
            hostRock: "Calcrete",
            annualProduction: "Not currently producing",
            reserves: "36,000 tU",
            miningMethod: "Proposed: heap leaching",
            processing: "Planned: alkaline heap leaching",
            operator: "Orano Mining (formerly Areva)",
            images: [
                "trekkopje-1.jpg"
            ],
            productionData: {
                labels: ["Future Project"],
                data: [0]
            }
        },
        {
            name: "Valencia Uranium Deposit",
            type: "deposit",
            coords: [-22.300, 15.917],
            description: "The Valencia deposit is located about 35 km northeast of Rössing and represents a significant uranium resource.",
            geology: "The deposit is hosted in alaskite within the Damara Belt, similar to Rössing and Husab. Mineralization consists of uraninite.",
            depositType: "Alaskite-hosted",
            oreGrade: "0.046% U3O8",
            mineralization: "Uraninite",
            hostRock: "Alaskite granite",
            annualProduction: "Not currently producing",
            reserves: "42,000 tU",
            miningMethod: "Proposed: open-pit",
            processing: "Planned: conventional milling",
            operator: "Forsys Metals",
            images: [],
            productionData: {
                labels: ["Future Project"],
                data: [0]
            }
        },
        {
            name: "Erongo Uranium Project",
            type: "exploration",
            coords: [-22.150, 15.650],
            description: "The Erongo Uranium Project comprises several exploration targets in the Erongo Region.",
            geology: "Targets include both alaskite-hosted and surficial calcrete-type uranium mineralization.",
            depositType: "Mixed (Alaskite & Calcrete)",
            oreGrade: "0.02-0.05% U3O8",
            mineralization: "Uraninite, Carnotite",
            hostRock: "Alaskite granite & Calcrete",
            annualProduction: "Exploration stage",
            reserves: "Under evaluation",
            miningMethod: "To be determined",
            processing: "To be determined",
            operator: "Various",
            images: [],
            productionData: {
                labels: ["Exploration"],
                data: [0]
            }
        }
    ];
    
    // Create marker clusters
    const markers = L.markerClusterGroup();
    
    // Add markers for each uranium site
    uraniumSites.forEach(site => {
        let icon;
        let color;
        
        switch(site.type) {
            case "active":
                icon = activeMineIcon;
                color = "#e74c3c";
                break;
            case "deposit":
                icon = depositIcon;
                color = "#3498db";
                break;
            case "exploration":
                icon = explorationIcon;
                color = "#f39c12";
                break;
            case "calcrete":
                icon = calcreteIcon;
                color = "#2ecc71";
                break;
            case "alaskite":
                icon = alaskiteIcon;
                color = "#9b59b6";
                break;
            default:
                icon = depositIcon;
                color = "#3498db";
        }
        
        const marker = L.marker(site.coords, { icon: icon });
        
        marker.bindPopup(`
            <div style="min-width: 200px;">
                <h5 style="margin: 0 0 5px; color: ${color}">${site.name}</h5>
                <p style="margin: 0 0 5px; font-size: 0.9em;">${site.description.substring(0, 100)}...</p>
                <button class="btn btn-sm btn-primary mt-2" onclick="showMineDetails('${site.name.replace("'", "\\'")}')">View Details</button>
            </div>
        `);
        
        marker.siteData = site;
        markers.addLayer(marker);
    });
    
    map.addLayer(markers);
    
    // Add geological features (simplified for demo)
    const damaraBelt = L.polygon([
        [-22.0, 14.5],
        [-22.5, 15.0],
        [-23.0, 15.5],
        [-23.5, 16.0],
        [-23.0, 16.5],
        [-22.5, 16.0],
        [-22.0, 15.5]
    ], {
        color: "#9b59b6",
        fillColor: "#9b59b6",
        fillOpacity: 0.2,
        weight: 2
    }).bindPopup("Damara Belt - Alaskite-hosted uranium deposits");
    
    const namibDesert = L.polygon([
        [-23.0, 14.0],
        [-23.5, 14.5],
        [-24.0, 15.0],
        [-24.0, 15.5],
        [-23.5, 16.0],
        [-23.0, 15.5],
        [-22.5, 15.0]
    ], {
        color: "#2ecc71",
        fillColor: "#2ecc71",
        fillOpacity: 0.2,
        weight: 2
    }).bindPopup("Namib Desert - Calcrete-hosted uranium deposits");
    
    geologyLayer.addLayer(damaraBelt);
    geologyLayer.addLayer(namibDesert);
    
    // Fit map to markers
    map.fitBounds(markers.getBounds(), { padding: [50, 50] });
    
    // Make showMineDetails function available globally
    window.showMineDetails = function(mineName) {
        const mine = uraniumSites.find(site => site.name === mineName);
        if (!mine) return;
        
        // Show details container
        const detailsContainer = document.getElementById('mineDetails');
        detailsContainer.classList.add('active');
        
        // Scroll to details
        detailsContainer.scrollIntoView({ behavior: 'smooth' });
        
        // Update overview tab
        document.getElementById('mineName').textContent = mine.name;
        document.getElementById('mineOverview').textContent = mine.description;
        
        // Update geology tab
        document.getElementById('mineGeology').textContent = mine.geology;
        document.getElementById('depositType').textContent = mine.depositType;
        document.getElementById('oreGrade').textContent = mine.oreGrade;
        document.getElementById('mineralization').textContent = mine.mineralization;
        document.getElementById('hostRock').textContent = mine.hostRock;
        
        // Update production tab
        document.getElementById('annualProduction').textContent = mine.annualProduction;
        document.getElementById('reserves').textContent = mine.reserves;
        document.getElementById('miningMethod').textContent = mine.miningMethod;
        document.getElementById('processing').textContent = mine.processing;
        document.getElementById('operator').textContent = mine.operator;
        
        // Update gallery
        const gallery = document.getElementById('mineGallery');
        gallery.innerHTML = '';
        
        if (mine.images.length > 0) {
            mine.images.forEach(image => {
                const imgPath = `images/mines/${image}`;
                gallery.innerHTML += `
                    <div class="gallery-item">
                        <img src="${imgPath}" alt="${mine.name}" data-bs-toggle="modal" data-bs-target="#imageModal" onclick="showImageModal('${imgPath}', '${mine.name}')">
                    </div>
                `;
            });
        } else {
            gallery.innerHTML = '<p>No images available for this site.</p>';
        }
        
        // Initialize production chart
        const ctx = document.getElementById('mineProductionChart').getContext('2d');
        
        if (window.mineProductionChart) {
            window.mineProductionChart.destroy();
        }
        
        window.mineProductionChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: mine.productionData.labels,
                datasets: [{
                    label: 'Production (tU)',
                    data: mine.productionData.data,
                    backgroundColor: '#3498db',
                    borderColor: '#2980b9',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: `${mine.name} Production`,
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Tons of Uranium (tU)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    }
                }
            }
        });
    };
    
    // Tab switching functionality
    document.querySelectorAll('.mine-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Update active tab
            document.querySelectorAll('.mine-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update active content
            document.querySelectorAll('.mine-content').forEach(content => {
                content.classList.remove('active');
                if (content.getAttribute('data-content') === tabName) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Close details when clicking outside
    document.addEventListener('click', function(e) {
        const detailsContainer = document.getElementById('mineDetails');
        if (detailsContainer.classList.contains('active') && 
            !detailsContainer.contains(e.target) && 
            !Array.from(document.querySelectorAll('.leaflet-popup-content button')).includes(e.target)) {
            detailsContainer.classList.remove('active');
        }
    });
});

// Function to show image modal (would need modal HTML)
function showImageModal(src, alt) {
    // In a complete implementation, this would show a modal with the full-size image
    console.log(`Showing image: ${src} (${alt})`);
}