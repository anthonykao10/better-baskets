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

export const successMessages = function() {
  const messages = [
    "Great Shot!",
    "OOOOOoooo that was cleannnnnnn",
    "WIINNER WINNER CHICKEN DINNER",
    "SWISH!",
    "NICE SHOT!!",
    "Acceptable shot",
    "NICE ARC"
  ];
  const min = 0;
  const max = messages.length - 1;
  const idx =  Math.floor(Math.random() * (max - min + 1)) + min;
  return messages[idx];
}

export const failureMessages = function() {
  const messages = [
    "Better luck next time!",
    "Nice Try!",
    "Nice Brick",
    "Keep Using Better Baskets"
  ];
  const min = 0;
  const max = messages.length - 1;
  const idx =  Math.floor(Math.random() * (max - min + 1)) + min;
  return messages[idx];
}