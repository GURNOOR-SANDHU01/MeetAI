import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  databaseUrl: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/meetai?schema=public',
  redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
  jwtSecret: process.env.JWT_SECRET || 'meetai_jwt_secret_key_32_bytes_long_change_in_prod',
  sessionSecret: process.env.SESSION_SECRET || 'meetai_session_secret_key_32_bytes_long',
  encryptionKey: process.env.ENCRYPTION_KEY || '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef',
  allowedOrigins: (process.env.ALLOWED_ORIGINS || 'http://localhost:5173,http://localhost:3000').split(','),
  oauth: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || 'placeholder',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'placeholder',
    },
    microsoft: {
      clientId: process.env.MICROSOFT_CLIENT_ID || 'placeholder',
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET || 'placeholder',
    },
    zoom: {
      clientId: process.env.ZOOM_CLIENT_ID || 'placeholder',
      clientSecret: process.env.ZOOM_CLIENT_SECRET || 'placeholder',
    }
  }
};
