const { Role, User } = require('../models'); // Import đúng mô hình Role và User
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      where: {
        UserName: username  // Sửa lại tên trường cho đúng
      },
      include: [{
        model: Role,
        attributes: ["RoleID", "RoleName"]
      }]
    });

    if (!user) {
      return res.status(401).json({
        message: "Tên đăng nhập hoặc mật khẩu không đúng"
      });
    }

    res.status(200).json({
      message: "Đăng nhập thành công",
      user: {
        UserID: user.UserID,
        UserName: user.UserName,
        Role: {
          RoleID: user.Role.RoleID,
          RoleName: user.Role.RoleName
        }
      }
      // token: token
    });
  } catch (err) {
    res.status(500).json({
      message: "Lỗi server",
      error: err.message
    });
  }
};

module.exports = {
  login,
};
