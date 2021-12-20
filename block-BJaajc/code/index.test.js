const functions = require('./index');

// getFullName

test('Get full name to be Peter Parker', () => {
  expect(functions.getFullName('Peter', 'Parker')).toBe('Peter Parker');
});

test('Get full name to be Gwen Stacy', () => {
  expect(functions.getFullName('Gwen', 'Stacy')).toBe('Gwen Stacy');
});

test('Get full name to not be Otto Octavius', () => {
  expect(functions.getFullName('Otto', 'Octavius')).not.toBe('Otto Ock');
});
test('Get full name to not be empty', () => {
  expect(functions.getFullName('Jonah', 'Jameson')).not.toBe('');
});
test('Get full name to not be undefined', () => {
  expect(functions.getFullName('Harry', 'Osborne')).not.toBe(undefined);
});

// isPalindrome

test('Mom is a palindrome', () => {
  expect(functions.isPalindrome('mom')).toBe(true);
});

test('Kayak is a palindrome', () => {
  expect(functions.isPalindrome('kayak')).toBe(true);
});

test('Racecar is a palindrome', () => {
  expect(functions.isPalindrome('racecar')).toBe(true);
});

test('ReactJS is not a palindrome', () => {
  expect(functions.isPalindrome('reactjs')).not.toBe(true);
});

test('Database is not a palindrome', () => {
  expect(functions.isPalindrome('database')).not.toBe(true);
});

test('webdeveloper is not a palindrome', () => {
  expect(functions.isPalindrome('webdeveloper')).not.toBe(true);
});

// getCircumference

test('Circumference of circle for radius 7 is 43', () => {
  expect(functions.getCircumference(7)).toBe('The circumference is 43');
});

test('Circumference of circle for radius 14 is 87', () => {
  expect(functions.getCircumference(14)).toBe('The circumference is 87');
});

test('Circumference of circle for radius 45 is 282', () => {
  expect(functions.getCircumference(45)).toBe('The circumference is 282');
});

test('Area of circle for radius 7 is 154', () => {
  expect(functions.getArea(7)).toBe('The area is 153');
});
