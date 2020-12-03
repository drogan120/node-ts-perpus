import bcrypt from 'bcrypt';

class PasswordHash {
  public static hash = (password:string): Promise<string> => bcrypt.hash(password, 12)
}

export default PasswordHash;
