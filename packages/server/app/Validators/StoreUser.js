class StoreUser {
  get rules() {
    return {
      username: 'required|unique:users,username',
      email: 'required|email|unique:users,email',
      password: 'required|min:6',
    };
  }

  get validateAll() {
    return true;
  }
}

module.exports = StoreUser;
