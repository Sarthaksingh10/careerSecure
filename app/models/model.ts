import mongoose, { Schema, model } from "mongoose";

const MessageSchema = new Schema(
  {
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const Message =
  mongoose.models.chatboxinput || model("chatboxinput", MessageSchema);

export default Message;
