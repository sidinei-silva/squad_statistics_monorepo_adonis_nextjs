class StoreUser {
  get rules() {
    return {
      username: 'required|unique:users,username',
      email: 'required|email|unique:users,email',
      password: 'required|min:6',
    };
  }

  get messages() {
    return {
      'username.unique': 'Este username já está registado.',
      'username.required': 'Você deve fornecer um username.',
      'email.required': 'Você deve fornecer um endereço de e-mail.',
      'email.email': 'Você deve fornecer um endereço de e-mail válido.',
      'email.unique': 'Este e-mail já está registado.',
      'password.required': 'Você deve fornecer uma senha',
      'password.min': 'Senha não deve ser menor que 6 caracters',
    };
  }

  get validateAll() {
    return true;
  }
}

module.exports = StoreUser;
