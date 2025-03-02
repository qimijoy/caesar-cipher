import paths from '../paths.js';
import { deleteAsync } from 'del';

export default () => {
	return deleteAsync(paths.clean);
};
