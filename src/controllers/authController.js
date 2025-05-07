const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registro de usuario
const register = async (req, res) => {
  const { username, lastName, email, password, role } = req.body;

  try {
    // Verifica si el email ya está registrado
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Este email ya se encuentra registrado.' });
    }

    // Hashea la contraseña
    const hash = await bcrypt.hash(password, 10);

    // Crea el nuevo usuario
    const user = await User.create({
      username,
      lastName,
      email,
      password: hash,
      // Ignorar role si se registra desde frontend público
    });
    

    // Devuelve solo el id
    res.status(201).json({ id: user.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar el usuario.' });
  }
};

// Login de usuario
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Busca el usuario por email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    // Compara la contraseña
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Genera el token
    const token = jwt.sign(
      { id: user.id, role: user.role, username: user.username },
      'secreto123',
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al iniciar sesión.' });
  }
};

module.exports = { register, login };
