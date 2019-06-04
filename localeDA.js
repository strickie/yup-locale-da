export let mixed = {
  default: '${path} er ugyldig',
  required: '${path} er et påkrævet felt',
  oneOf: '${path} skal være en af følgende værdier: ${values}',
  notOneOf: '${path} må ikke være en af følgende værdier: ${values}',
};

export let string = {
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

export let number = {
  min: '${path} skal være større eller lig med ${min}',
  max: '${path} skal være mindre eller lig med ${max}',
  lessThan: '${path} skal være mindre end ${less}',
  moreThan: '${path} skal være større end ${more}',
  notEqual: '${path} må ikke være lig med "${notEqual}"',
  positive: '${path} skal være et positivt tal',
  negative: '${path} skal være et nagativt tal',
  integer: '${path} skal være et tal',
};

export let date = {
  min: '${path} skal være senere end ${min}',
  max: '${path} skal være før end ${max}',
};

export let boolean = {};

export let object = {
  noUnknown: '${path}-feltet må ikke have nøgler, der ikke er defineret i "Objekt-Shape"',
};

export let array = {
  min: '${path}-feltet skal indeholde mindst ${min} elementer',
  max: '${path}-feltet skal have færre end eller lig med ${max} elementer',
};

export default {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean,
};
