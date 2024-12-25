const { Role, User } = require('../models'); // Import đúng mô hình Role và User

const getAllUserWithRole = async (req, res) => {
  try {
    const roles = await Role.findAll({
      include: [
        {
          model: User,
          attributes: ['UserID', 'UserName'], // Đảm bảo các tên cột khớp với định nghĩa trong cơ sở dữ liệu
        },
      ],
    });
    
    res.status(200).json(roles);  // Thêm phần trả kết quả
  } catch (err) {
    res.status(500).json({ message: 'Lỗi khi lấy dữ liệu', error: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi khi lấy dữ liệu', error: err.message });
  }
};

const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();

    res.status(200).json(roles);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi khi lấy dữ liệu', error: err.message });
  }
};


module.exports = { getAllUserWithRole ,getAllUsers, getAllRoles};