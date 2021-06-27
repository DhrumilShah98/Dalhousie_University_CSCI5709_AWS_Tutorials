import { users } from '../data/users.js';

export const getUsers = async (req, res) => {
    try {
        if (users.length === 0) {
            return res.status(404).json({
                message: 'No users found',
                success: false
            });
        } else {
            return res.status(200).json({
                message: 'Users received',
                success: true,
                users: users
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};

export const getUser = async (req, res) => {
    const userId = req.params.id;
    try {
        if (users.length === 0) {
            return res.status(404).json({
                message: 'No user found',
                success: false
            });
        } else {
            const user = users.find((user) => user["id"] === userId);
            if (user === undefined || user === null) {
                return res.status(404).json({
                    message: 'No user found',
                    success: false
                });
            } else {
                return res.status(200).json({
                    message: 'User received',
                    success: true,
                    user: user
                });
            }
        }
    } catch (err) {
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};

export const addUser = async (req, res) => {
    const newUser = req.body;
    try {
        const emailExists = "email" in newUser;
        const firstNameExists = "firstName" in newUser;
        const userFieldsExistInResponse = emailExists && firstNameExists;
        if (userFieldsExistInResponse && newUser["email"].length > 0 && newUser["firstName"].length > 0) {
            if (users.length === 0) {
                newUser["id"] = "" + (users.length + 1);
                users.push(newUser);
                return res.status(200).json({
                    message: 'User added',
                    success: true
                });
            } else {
                const oldUser = users.find((user) => user["email"] === newUser["email"]);
                if (oldUser === undefined || oldUser === null) {
                    newUser["id"] = "" + (users.length + 1);
                    users.push(newUser);
                    return res.status(200).json({
                        message: 'User added',
                        success: true
                    });
                } else {
                    return res.status(409).json({
                        message: 'User exists',
                        success: false
                    });
                }
            }
        } else {
            return res.status(404).json({
                message: 'Bad request',
                success: false
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
};

export const updateUser = async (req, res) => {
    const userId = req.params.id;
    const userToUpdate = req.body;
    try {
        const emailExists = "email" in userToUpdate;
        const firstNameExists = "firstName" in userToUpdate;
        const userFieldsExistInResponse = emailExists && firstNameExists;
        if (userFieldsExistInResponse && userToUpdate["email"].length > 0 && userToUpdate["firstName"].length > 0) {
            if (users.length === 0) {
                return res.status(404).json({
                    message: 'User not found',
                    success: false
                });
            } else {
                const userFoundIndex = users.findIndex((user) => user["id"] === userId);
                if (userFoundIndex >= 0) {
                    userToUpdate["id"] = userId;
                    users[userFoundIndex] = userToUpdate;
                    return res.status(200).json({
                        message: 'User updated',
                        success: true
                    });
                } else {
                    return res.status(404).json({
                        message: 'User not found',
                        success: false
                    });
                }
            }
        } else {
            return res.status(404).json({
                message: 'Bad request',
                success: false
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: 'Internal server error.',
            success: false
        });
    }
}