/* eslint-disable default-case */
//export function getTwoDayDate(separator=' '){

    export function getTomorrowDate() {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1); 
        var year = tomorrow.getFullYear();
        var month = tomorrow.getMonth() + 1;
        var day = tomorrow.getDate();
    
        switch(month) {
            case 1:
                month = 'January'
                break;
            case 2:
                month = 'Febuary'
                break;
            case 3:
                month = 'March'
                break;
            case 4:
                month = 'April'
                break;
            case 5: 
                month = 'May'
                break;
            case 6:
                month = 'June'
                break;
            case 7:
                month = 'July'
                break;
            case 8:
                month = 'August'
                break;
            case 9:
                month = 'September'
                break;
            case 10: 
                month = 'October'
                break;
            case 11:
                month = 'November'
                break;
            case 12:
                month = 'December'
                break;
            }
    
            return `${year} ${month} ${day}`;
        }
        