const regexUrl = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/;

const allowedCors = [
  'https://praktikum.tk',
  'https://praktikum.tk',
  'https://localhost:3000',
  'https://localhost:3000',
  'https://158.160.32.56:3000',
  'https://B0risov.nomoredomains.work',
  'https://api.B0risov.students.nomoredomains.monster',
  'localhost:3000',
];

module.exports = {
  regexUrl, allowedCors,
};
