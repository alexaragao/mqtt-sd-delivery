function createTable(headers, body) {
  let res = "";
  const lengths = body.reduce((prev, curr) => {
    if (curr) {
      for (let idx = 0; idx < curr.length; idx++) {
        if (curr[idx].length > prev[idx]) {
          prev[idx] = curr[idx].length;
        }
      }
    }
    return prev;
  }, headers.map(h => h.length));

  const hline = "|" + lengths.map(l => "-".repeat(2 + l)).join('|') + "|\n";

  res += hline;
  res += "| " + headers.map((h, i) => h + " ".repeat(lengths[i] - h.length)).join(' | ') + " |\n";
  res += hline;
  body.forEach((row) => {
    res += "| " + row.map((c, i) => c + " ".repeat(lengths[i] - c.length)).join(' | ') + " |\n";
  });
  res += hline;
  return res;
}

module.exports = createTable;