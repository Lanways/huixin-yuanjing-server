export function getEnvVariable(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Environment variable ${name} is not set`);
  }
  return value;
}

type Environment = 'development' | 'test' | 'production'

export function getNODE_ENV(name: string): Environment {

  const value = process.env.NODE_ENV
  if (value === 'development' || value === 'test' || value === 'production') {
    return value
  }
  throw new Error(`Invalid or missing environment variable NODE_ENV: ${value}. Expected 'development', 'test', or 'production'.`);

}
