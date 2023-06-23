import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minLength: [6, 'Must be at least 6'],
      maxLength: [30, 'Max 30 characters'],
      validate: {
        validator: function (value) {
          return /^[A-Za-z ]+$/.test(value)
        },
        message: 'Name should only contain alphabets'
      }
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
      minLength: [6, 'Must be at least 6'],
      maxLength: [20, 'Max 20 characters'] // {VALUE} to get the input
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, 'Email is required'],
      validate: {
        validator: function (value) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) // Regular expression for email validation
        },
        message: 'Please enter a valid email address'
      }
    },
    password: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true
  }
)

/* Unique email validation */
UserSchema.path('email').validate(async (email) => {
  const emailCount = await mongoose.models.User.countDocuments({ email })
  return !emailCount
}, 'Email already exists')

/* Unique username validation */
UserSchema.path('username').validate(async (username) => {
  const usernameCount = await mongoose.models.User.countDocuments({ username })
  return !usernameCount
}, 'Username already exists')

const User = mongoose.model('User', UserSchema)
export default User
