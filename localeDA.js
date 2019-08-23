module.exports.mixed = {
  default: '${path} er ugyldig',
  required: '${path} er et påkrævet felt',
  oneOf: '${path} skal være en af følgende værdier: ${values}',
  notOneOf: '${path} må ikke være en af følgende værdier: ${values}',
};

module.exports.string = {
  length: '${path} skal være præcist ${length} tegn lang',
  min: '${path} skal være mindst ${min} tegn lang',
  max: '${path} må højst være  ${max} tegn lang',
  matches: '${path} skal matche følgende: "${regex}"',
  email: '${path} skal være en gyldig email adresse',
  url: '${path} skal være en gyldig URL',
  trim: '${path} må ikke indeholde mellemrum, hverken i begyndelsen eller enden',
  lowercase: '${path} må kun indeholde af små bogstaver',
  uppercase: '${path} må kun indeholde af stove bogstaver',
};

module.exports.number = {
  min: '${path} skal være større eller lig med ${min}',
  max: '${path} skal være mindre eller lig med ${max}',
  lessThan: '${path} skal være mindre end ${less}',
  moreThan: '${path} skal være større end ${more}',
  notEqual: '${path} må ikke være lig med "${notEqual}"',
  positive: '${path} skal være et positivt tal',
  negative: '${path} skal være et nagativt tal',
  integer: '${path} skal være et tal',
};

module.exports.date = {
  min: '${path} skal være senere end ${min}',
  max: '${path} skal være før end ${max}',
};

module.exports.boolean = {};

module.exports.object = {
  noUnknown: '${path}-feltet må ikke have nøgler, der ikke er defineret i "Objekt-Shape"',
};

module.exports.array = {
  min: '${path}-feltet skal indeholde mindst ${min} elementer',
  max: '${path}-feltet skal have færre end eller lig med ${max} elementer',
};

module.exports = {
  mixed: module.exports.mixed,
  string: module.exports.string,
  number: module.exports.number,
  date: module.exports.date,
  object: module.exports.object,
  array: module.exports.array,
  boolean: module.exports.boolean,
};
