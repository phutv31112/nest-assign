import { Request } from 'express';
import User from '../entities/user.entity/user.entity';

interface RequestWithUser extends Request {
  user: User;
}

export default RequestWithUser;
