export default async function handler(req, res) {
try {
const code = req.query?.code || req.body?.code;
if (!code) return res.status(400).send("Missing code");
return res.status(200).send("OAuth callback received. code=" + code);
} catch (e) {
console.error(e);
return res.status(500).send("Internal error");
}
}
