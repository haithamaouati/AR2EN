function convertText() {
  var inputText = document.getElementById("input-text").value;
  var outputText = inputText.replace(/أ/g, "a").replace(/إ/g, "i").replace(/آ/g, "aa").replace(/ب/g, "b").replace(/ت/g, "t").replace(/ث/g, "th").replace(/ج/g, "j").replace(/ح/g, "7").replace(/خ/g, "kh").replace(/د/g, "d").replace(/ذ/g, "th").replace(/ر/g, "r").replace(/ز/g, "z").replace(/س/g, "s").replace(/ش/g, "sh").replace(/ص/g, "s").replace(/ض/g, "d").replace(/ط/g, "t").replace(/ظ/g, "th").replace(/ع/g, "3").replace(/غ/g, "gh").replace(/ف/g, "f").replace(/ق/g, "q").replace(/ك/g, "k").replace(/ل/g, "l").replace(/م/g, "m").replace(/ن/g, "n").replace(/ه/g, "h").replace(/و/g, "w").replace(/ي/g, "y");
  document.getElementById("output-text").value = outputText;
}

function copyText() {
  var outputText = document.getElementById("output-text");
  outputText.select();
  document.execCommand("copy");
}
