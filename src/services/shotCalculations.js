
export const shotArcDetermination = function(arcHeight) {
  if (arcHeight < 560) {
    return "Low"
  }
  else if (arcHeight > 620) {
    return "High"
  }
  else {
    return "Medium"
  }
};