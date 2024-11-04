// functions/messages.js

exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    const { username, message } = JSON.parse(event.body);
    // Logic to handle the message (e.g., save to a database or send via Pusher)
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, username, message }),
    };
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }
};