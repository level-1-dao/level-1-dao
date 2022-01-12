import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function token(req, res) {	
  const { idToken, accessToken } = await getSession(req, res);
  res.status(200).json({ idToken, accessToken });	
});	
