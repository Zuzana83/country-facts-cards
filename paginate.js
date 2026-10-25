const paginate = (info)=> {
    const oldArray = info.countries;
    const itemsPerPage = 6;
    const numberOfPages = Math.ceil(oldArray.length / itemsPerPage);
    const newInfo = Array.from({length: numberOfPages}, (_,index) => {
        const start = index * itemsPerPage;
        return info.countries.slice(start, start + itemsPerPage);
    });
    return newInfo;
}

export default paginate;