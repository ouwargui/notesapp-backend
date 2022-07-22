const {JWT_SECRET} = process.env;

export function checkEnvs() {
  if (!JWT_SECRET) throw new Error('JWT_SECRET is required');
}

export {JWT_SECRET};
