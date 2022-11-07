function displayCheckedOrWrongIcon(rowData) {
  const result = JSON.parse(rowData);
  let image;
  let tooltip;
  console.log(result.fir_deviationstatus);
  if (result.fir_deviationstatus === "Error") {
    image = "fir_wrongicon";
    tooltip =
      "There is a deviation between this customer and the one stored in Account";
    console.log("first", image, tooltip);
  } else if (result.fir_deviationstatus === "Correct") {
    image = "fir_checkicon";
    tooltip = "This customer has the same data as the on stored in Account";
    console.log("second", image, tooltip);
  }
  return [image, tooltip];
}
