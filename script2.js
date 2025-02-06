
let graphData = []; 
let graphLabels = []; 
let chart; 

function calculateFootprint() {
  const distance = parseFloat(document.getElementById("distance").value);
  const vehicleType = document.getElementById("vehicleType").value;
  let emissionFactor;

  if (isNaN(distance) || distance <= 0) {
    document.getElementById("result").innerHTML =
      "Please enter a valid distance.";
    return;
  }

  
  switch (vehicleType) {
    case "petrol":
      emissionFactor = 0.21;
      break;
    case "diesel":
      emissionFactor = 0.26;
      break;
    case "electric":
      emissionFactor = 0.05;
      break;
    default:
      emissionFactor = 0;
  }

  const carbonFootprint = (distance * emissionFactor).toFixed(2);

  
  let impact;
  if (carbonFootprint > 50) {
    impact = "High impact on nature.";
  } else if (carbonFootprint > 20) {
    impact = "Moderate impact on nature.";
  } else {
    impact = "Low impact on nature.";
  }

  
  document.getElementById(
    "result"
  ).innerHTML = `Carbon Footprint: ${carbonFootprint} kg CO₂<br>${impact}`;

  
  graphData.push(carbonFootprint);
  graphLabels.push(vehicleType + " (" + distance + " km)");

  
  updateGraph();
}

function updateGraph() {
  const canvas = document.getElementById("carbonGraph").getContext("2d");

  if (chart) chart.destroy(); 

  chart = new Chart(canvas, {
    type: "line",
    data: {
      labels: graphLabels,
      datasets: [
        {
          label: "Carbon Footprint (kg CO₂)",
          data: graphData,
          backgroundColor: "rgba(76, 175, 80, 0.2)",
          borderColor: "#4CAF50",
          borderWidth: 2,
          tension: 0.3, 
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Carbon Footprint (kg CO₂)",
          },
        },
        x: {
          title: {
            display: true,
            text: "Vehicle Type and Distance",
          },
        },
      },
    },
  });
}
