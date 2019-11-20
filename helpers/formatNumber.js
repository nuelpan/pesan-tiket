function formatNumber(num) {
  // return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return (
      num.toString().split("").reverse()
      .map((digit, index) =>
        index != 0 && index % 3 === 0 ? `${digit}.` : digit
      )
      .reverse() // reverse back the array so that the digits are sorted in correctly display order
      .join("")
      )
}

module.exports = formatNumber