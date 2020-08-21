class StoreSession {
  get rules() {
    return {
      email: 'required|email',
      password: 'required|min:6',
    };
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return {
      'email.required': 'Você deve fornecer um endereço de e-mail.',
      'email.email': 'Você deve fornecer um endereço de e-mail válido.',
      'email.unique': 'Este e-mail já está registado.',
      'password.required': 'Você deve fornecer uma senha',
      'password.min': 'Senha não deve ser menor que 6 caracters',
    };
  }
}

module.exports = StoreSession;
