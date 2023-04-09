const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const path = require("path");

router.post("/orders", async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000"); // Replace with your frontend domain
    res.set("Access-Control-Allow-Credentials", "true");
    const instance = new Razorpay({
      key_id: process.env.KEY_ID,
      key_secret: process.env.KEY_SECRET,
    });

    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    console.log(options.amount);

    instance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Something Went Wrong!" });
      }
      res.status(200).json({ data: order });
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log(error);
  }
});

function myFunction() {
  let text = "Payment Sucessfull !!\nBack to Site OK or Cancel.";
  if (confirm(text) == true) {
    window.location.href = "http://www.w3schools.com";
  } else {
    window.location.href = "";
  }
}

router.post("/verify", async (req, res) => {
  try {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000"); // Replace with your frontend domain
    res.set("Access-Control-Allow-Credentials", "true");
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSign = crypto
      .createHmac("sha256", process.env.KEY_SECRET)
      .update(sign.toString())
      .digest("hex");
    if (razorpay_signature === expectedSign) {
      // return myFunction();
      return res.status(200).json({ message: "Payment verified successfully" });
    } else {
      return res.status(400).json({ message: "Invalid signature sent!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log(error);
  }
});

module.exports = router;
