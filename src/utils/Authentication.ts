import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class Authentication {
  public static hash = (password: string): Promise<string> => bcrypt.hash(password, 12)

  public static compare = async (password: string, encrypted: string): Promise<boolean> => {
    const result = await bcrypt.compare(password, encrypted);
    return result;
  }

  public static generateToken = (id: number, username: string, password: string): string => {
    const secretKey: string = process.env.JWT_SECRET_KEY || 'drogan120';
    const token: string = jwt.sign({ id, username, password }, secretKey);
    return token;
  }
}

export default Authentication;
