var recipes = {
  blahblah: 'yoyo'
}
 function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
 }

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
