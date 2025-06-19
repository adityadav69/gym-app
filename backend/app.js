
import mongoose from "mongoose"
import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";
import authRoutes from "./routes/authroutes.js";
const app = express();
const router = express.Router();


config({ path: "./config.env" });

main()
.then(()=>{
  console.log("DB connected Successfully");
})
.catch((err)=>{
  console.log("Connection failed")
})

async function main() {
  mongoose.connect(process.env.MONGO_URI)
}

// Configure CORS
app.use(
  cors({
    origin: "https://gym-app-tawny-delta.vercel.app", // No trailing slash
    methods: ["POST", "GET", "PUT", "DELETE"], // Include all necessary methods
    credentials: true, // Allow credentials
  })
);

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Explicitly handle preflight requests
app.options('*', cors());

router.post("/send/mail", async (req, res, next) => {
  const { name, email, message, contact } = req.body;
  if (!name || !email || !message || !contact) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }
  try {
    await sendEmail({
      email: "ssy81462@gmail.com",
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
      contact,
    });
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// Use the router
app.use(router);
app.use("/api/auth", authRoutes);


// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
