const User = require('../../models/User');

module.exports = async function authenticate(strategy, email, displayName, done) {
  const user = User.findOne({email: email});
  if (user) done(null, user);
  else {
    const newUser = await User.create({email: email, displayName: displayName});
    done(null, newUser);
  }
};
