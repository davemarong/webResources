function displayCheckedOrWrongIcon(rowData) {
  // Get the current row in the loop
  const result = JSON.parse(rowData);

  // Set the image and tooltip variables, which will be returned
  let image;
  let tooltip;

  // Check if the DeviationStatus on the current row is "Error" or "Correct"
  if (result.fir_deviationstatus === "Error") {
    image = "fir_wrongicon";
    tooltip =
      "There is a deviation between this customer and the one stored in Account";
  } else if (result.fir_deviationstatus === "Correct") {
    image = "fir_checkicon";
    tooltip = "This customer has the same data as the on stored in Account";
  }
  return [image, tooltip];
}
