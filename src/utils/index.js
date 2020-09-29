const utils = {
    deviceIsWeb: window.innerWidth >= 680,

    checkAPIfailure: res => {
        res = res.hasOwnProperty('data') ? res.data : res;
        if (!!res && res.hasOwnProperty('status') && res.status !== 200) {
            return res.data;
        } else {
            return res.data;
        }
    },

    sortBy: (arr, sortByKey) => {
        return arr.sort((a, b) => {
            return a[sortByKey] < b[sortByKey] ? -1 : a[sortByKey] > b[sortByKey] ? 1 : 0;
        });
    },

    uniqueData: (arr) => {
        return Array.isArray(arr) &&
            arr.reduce((unique, o) => {
                if (!unique.some(obj => obj._id === o._id)) {
                    unique.push(o);
                }
                return unique;
            }, []);
    },

    limitText: (title, limit) => {
        const newTitle = [];

        if (limit === -1) {
            return title;
        }

        const length = title ? title.length : 0;

        if (length >= limit) {
            title.split('').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    newTitle.push(cur);
                }
                return acc + cur.length;
            }, 0);
            return `${newTitle.join('') + '...'}`;
        }
        return title;
    },

    getDateFormatted : (date) => {
        const newDate = new Date(date);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(newDate);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(newDate);
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate);
        const createDate = mo + ' ' + da + ', ' + ye;
        return createDate;
    },

    getTimeFormatDate : (newDate) =>{
        const date = new Date(newDate);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
    } 
};
export default utils;
