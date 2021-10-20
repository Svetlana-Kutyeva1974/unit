export default function person(object) {
  let result = 0;
  /* for (const item of items) {
    result += item;
  } */
  if (object.health > 50) {
    result = 'healthy';
  } else if (object.health < 50 && object.health > 15) {
    result = 'wounded';
  } else if (object.health < 15) {
    result = 'critical';
  }
  return result;
}
