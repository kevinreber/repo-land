/** Dependencies */
import moment from 'moment';

function convertDate(date) {
	return moment(date).calendar();
}

export default convertDate;
