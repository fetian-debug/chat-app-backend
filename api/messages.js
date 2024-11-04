// api/messages.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, message } = req.body;
    // Logic to handle the message (e.g., save to a database or send via Pusher)
    res.status(200).json({ success: true, username, message });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}