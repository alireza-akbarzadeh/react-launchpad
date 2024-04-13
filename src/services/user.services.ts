import { User } from 'interfaces';
import APICLient from './api-client';

export default new APICLient<User[]>('/users');
