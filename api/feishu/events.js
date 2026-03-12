export default function handler(req, res) {
const body = req.body || {};
if (body && body.challenge) return res.status(200).json({ challenge: body.challenge });
const token = body?.header?.token;
const expect = process.env.FEISHU_VERIFICATION_TOKEN;
if (expect && token && token !== expect) return res.status(403).json({ error: "invalid token" });
return res.status(200).json({ code: 0, msg: "ok" });
}
