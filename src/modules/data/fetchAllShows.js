const getShowData = async () => {
    let arr = [];
    await fetch('https://api.tvmaze.com/shows').then((response) => response.json()).then((response) => {
        arr = response;
    });
    return arr;
};

export default getShowData;