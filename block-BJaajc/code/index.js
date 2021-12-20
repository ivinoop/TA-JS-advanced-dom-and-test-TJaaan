function getFullName(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  return fullName;
}

function isPalindrome(str) {
  const reverseString = str.split('').reverse().join('');
  return str === reverseString;
}

function getCircumference(radius) {
  return `The circumference is ${Math.floor(2 * Math.PI * radius)}`;
}

function getArea(radius) {
  return `The area is ${Math.floor(Math.PI * (radius * radius))}`;
}

module.exports = {
  getFullName,
  isPalindrome,
  getCircumference,
  getArea,
};
