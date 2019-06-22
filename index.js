function Password(len) {
  if (typeof len !== 'number' || len < 1) {
    return null;
  }

  const length = Math.round(len);

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/*-+.!@#$%^&_=';
  try {
    const password = new Array(length);
    for (let i = 0; i < len; i += 1) {
      password[i] = chars[Math.floor(Math.random() * chars.length)];
    }
    return password.join('');
  } catch {
    return null;
  }
}

module.exports = Password;
