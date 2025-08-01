# biodiversity-dashboard or belly-button-challenge

## Instructions

Complete the following steps:

- Use the D3 library to read in `samples.json` from the URL:  
  `https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json`

- Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

  - Use `sample_values` as the values for the bar chart.
  - Use `otu_ids` as the labels for the bar chart.
  - Use `otu_labels` as the hovertext for the chart.

### Bar Chart

- Create a bubble chart that displays each sample.

  - Use `otu_ids` for the x values.
  - Use `sample_values` for the y values.
  - Use `sample_values` for the marker size.
  - Use `otu_ids` for the marker colors.
  - Use `otu_labels` for the text values.

### Bubble Chart

- Display the sample's metadata, i.e., an individual's demographic information.

  - Loop through each key-value pair from the metadata JSON object and create a text string.
  - Append an HTML tag with that text to the `#sample-metadata` panel.

### Homework (hw)

- Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

- Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file.

---

## Complete Work Cited

- `git remote set-url origin https://github.com/sultanraheem/belly-button-challenge`
- https://stackoverflow.com/questions/25927914/git-error-please-make-sure-you-have-the-correct-access-rights-and-the-reposito
- https://www.cloudbees.com/blog/remote-origin-already-exists-error
- Xpert learning tool and Open AI
