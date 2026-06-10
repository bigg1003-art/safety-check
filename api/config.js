module.exports = function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  var key = process.env.ANTHROPIC_API_KEY;
  if (!key) return res.status(500).json({ error: 'ANTHROPIC_API_KEY 미설정' });

  return res.status(200).json({
    anthropicKey: key,
    firebase: {
      apiKey:            process.env.FB_API_KEY            || '',
      authDomain:        process.env.FB_AUTH_DOMAIN        || '',
      projectId:         process.env.FB_PROJECT_ID         || '',
      storageBucket:     process.env.FB_STORAGE_BUCKET     || '',
      messagingSenderId: process.env.FB_MESSAGING_SENDER_ID|| '',
      appId:             process.env.FB_APP_ID             || ''
    }
  });
};
