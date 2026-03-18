const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
export const getTheNearestLocation = (locations, [x, y]) => {
  if (locations.length === 0) {
    return null;
  }
  
  let nearestLocation = null;
  let shortestDistance = Infinity;
  
  for (const [name, [locationX, locationY]] of locations) {
    const distance = getDistance([x, y], [locationX, locationY]);
    
    if (distance < shortestDistance) {
      nearestLocation = [name, [locationX, locationY]];
      shortestDistance = distance;
    }
  }
  
  return nearestLocation;
};
// END
