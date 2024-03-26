import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
import {getRecieverSocketId} from "../socket/socket.js"
import { io } from "../socket/socket.js";
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: recieverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });

    if (!conversation) {
       conversation = await Conversation.create({
        participants: [senderId, recieverId],
      });
    }

    const newMessage = new Message({
      senderId,
      recieverId,
      message,
    });

    if (newMessage) conversation.messages.push(newMessage._id);

    //THIS WILL RUN IN PARALLEL AND EXECUTE SYNCRONOUS PROGRAMMING
    await Promise.all([conversation.save(), newMessage.save()]);

     //SOCKET IO FUNCTIONALITY
     const recieverSocketId = getRecieverSocketId(recieverId)
     if(recieverSocketId){
       //Sending event to the reciever 
       io.to(recieverSocketId).emit("newMessage",newMessage)
     }
 
    res.status(200).json(newMessage);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if(!conversation){
      res.json([])
      return;
    }
  
    res.status(200).json(conversation.messages);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
