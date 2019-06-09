// [String] -> [*] -> {String: *}
function zipObj(arrString, arrAny) {
  let o = {};
  let i = 0;

  while (arrString[i] !== undefined && arrAny[i] !== undefined) {
    o[arrString[i]] = arrAny[i];
    i++;
  }

  return o;
}

module.exports = zipObj;
