// [String] -> [*] -> {String: *}
function zipObj(arrString, arrAny) {
  const o = {};
  let i = 0;

  while (arrString[i] !== undefined && arrAny[i] !== undefined) {
    o[arrString[i]] = arrAny[i];
    i += 1;
  }

  return o;
}

module.exports = zipObj;
