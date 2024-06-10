<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OTU Analysis Dashboard</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    h1, h2 {
      text-align: center;
    }
    #dropdown-container {
      text-align: center;
      margin-bottom: 20px;
    }
    #chart-container {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }
    #bar-chart, #bubble-chart {
      width: 45%;
      margin-right: 20px;
    }
    #metadata-container {
      text-align: center;
    }
    #sample-metadata {
      margin: 0 auto;
      width: 50%;
      border: 1px solid #ccc;
      padding: 10px;
    }
  </style>
</head>
<body>

  <h1>OTU Analysis Dashboard</h1>

  <div id="dropdown-container">
    <label for="sample-dropdown">Select Sample:</label>
    <select id="sample-dropdown"></select>
  </div>

  <div id="chart-container">
    <div id="bar-chart"></div>
    <div id="bubble-chart"></div>
  </div>

  <div id="metadata-container">
    <h2>Sample Metadata</h2>
    <div id="sample-metadata"></div>
  </div>

  <script src="https://d3js.org/d3.v7.min.js"></script>
  <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
  <script>
    // Code to fetch data, create charts, update metadata, and handle dropdown changes
    d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then(data => {
      // Process data and create charts
      const samples = data.samples;
      const metadata = data.metadata;
      const sampleDropdown = document.getElementById("sample-dropdown");
      const barChart = document.getElementById("bar-chart");
      const bubbleChart = document.getElementById("bubble-chart");
      const sampleMetadata = document.getElementById("sample-metadata");

      // Populate dropdown
      samples.forEach(sample => {
        const option = document.createElement("option");
        option.textContent = sample.id;
        sampleDropdown.appendChild(option);
      });

      // Function to update charts and metadata
      function updateCharts(sampleId) {
        const selectedSample = samples.find(sample => sample.id === sampleId);
        const selectedMetadata = metadata.find(meta => meta.id === sampleId);

        // Update bar chart
        const barData = {
          x: selectedSample.sample_values.slice(0, 10).reverse(),
          y: selectedSample.otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse(),
          text: selectedSample.otu_labels.slice(0, 10).reverse(),
          type: 'bar',
          orientation: 'h'
        };
        Plotly.newPlot('bar-chart', [barData]);

        // Update bubble chart
        const bubbleData = {
          x: selectedSample.otu_ids,
          y: selectedSample.sample_values,
          text: selectedSample.otu_labels,
          mode: 'markers',
          marker: {
            size: selectedSample.sample_values,
            color: selectedSample.otu_ids,
            colorscale: 'Earth'
          }
        };
        Plotly.newPlot('bubble-chart', [bubbleData]);

        // Update metadata
        sampleMetadata.innerHTML = "";
        Object.entries(selectedMetadata).forEach(([key, value]) => {
          const p = document.createElement("p");
          p.textContent = `${key}: ${value}`;
          sampleMetadata.appendChild(p);
        });
      }

      // Initial update with first sample
      updateCharts(samples[0].id);

      // Event listener for dropdown change
      sampleDropdown.addEventListener("change", function() {
        updateCharts(this.value);
      });
    });
  </script>
</body>
</html>
