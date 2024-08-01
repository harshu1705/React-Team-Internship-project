import { asyncHandler } from '../utils/asynchandler.js';
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.model.js';
import { ApiResponse } from '../utils/ApiResponse.js';


const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    
    if ([username, email, password].some(field => field.trim() === "")) {
        console.log("Validation error: All fields are required");
        throw new ApiError(400, "All fields are required");
    }

    console.log("User data received for registration:", { username, email, password });

    
    const existingUser = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (existingUser) {
        console.log("User already exists:", existingUser);
        throw new ApiError(409, "User with email or username already exists");
    }

   
    const user = await User.create({
        username,
        email,
        password,
    });

    console.log("User created successfully:", user);

    return res.status(201).json(
        new ApiResponse(200, user, "User registered successfully")
    );
});


const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        console.log("Validation error: Email and password are required");
        throw new ApiError(400, "Email and password are required");
    }

    console.log("User data received for login:", { email, password });

   
    const user = await User.findOne({ email });

    if (!user) {
        console.log("Login error: Invalid email or password");
        throw new ApiError(401, "Invalid email or password");
    }

    
    if (password !== user.password) {
        console.log("Login error: Invalid email or password");
        throw new ApiError(401, "Invalid email or password");
    }

    console.log("User logged in successfully:", user);

    return res.status(200).json(
        new ApiResponse(200, user, "User logged in successfully")
    );
});

export { registerUser, loginUser };
