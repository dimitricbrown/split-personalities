const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"

const disorders = originalDisorderFormat.split("|$|")

const listItems = disorders.join("</div><div>")

console.log(`<div>${listItems}</div>`)