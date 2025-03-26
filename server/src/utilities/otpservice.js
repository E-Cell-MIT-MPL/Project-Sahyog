import twilio from "twilio";

// Replace with your Twilio Account SID, Auth Token, and Phone Number
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const fromPhoneNumber = process.env.TWILIO_PHONE_NUMBER

const client = twilio(accountSid, authToken);

// OTP generator
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// Function to send OTP via SMS
const sendOTP = async (phoneNumber, otp) => {
  try {
    await client.messages.create({
      body: `Your OTP is: ${otp}`,
      from: +13025084590,
      to: phoneNumber
    });
    console.log(`OTP sent to ${phoneNumber}`);
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw new Error("Failed to send OTP. Please try again.");
  }
};

export {generateOTP,sendOTP};