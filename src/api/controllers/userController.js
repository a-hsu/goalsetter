const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const asyncHandler = require("express-async-handler")
const User = require("../models/User")
// @desc    Authenticate user
// @route   POST /api/users/login
// @access  Public

const loginUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    if (!(email || username) || !password) {
        res.status(400)
        throw new Error("Invalid Credentials")
    }

    let user
    if (email) user = await User.findOne({ email })
    else if (username) {
        const lowerCaseUsername = username.toLowerCase()
        user = await User.findOne({ lowerCaseUsername })
    }

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error("Invalid Credentials")
    }
})

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    // Validate if all information is submitted
    if (!username || !email || !password) {
        res.status(400)
        throw new Error("Please add all fields")
    }

    //Check if user exists
    const userExists = await User.findOne({
        email,
    })
    //If user already exists, throw error - note: do not say that user exists
    if (userExists) {
        res.status(400)
        throw new Error("User Exists")
    }

    // Hash password
    const salt = await bcrypt.genSalt()

    const hashedPassword = await bcrypt.hash(password, salt)

    const lowerCaseUsername = username.toLowerCase()
    const user = await User.create({
        username: lowerCaseUsername,
        email,
        password: hashedPassword,
    })
    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})

const generateToken = id => {
    return jwt.sign(
        {
            id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "900000",
        }
    )
}

module.exports = {
    registerUser,
    getMe,
    loginUser,
}
