const superagent = require("superagent");
const cheerio = require("cheerio");
const axios = require("axios");

// const movieDownloadlink = async (name, year) => {
//     // console.log(name, year)
//     const movieName = name.toLowerCase().replace(/[^A-Z0-9]+/ig, "-");
//     const url = `https://piratelk.com/${movieName}-${year}-sinhala-subtitles/`

//     console.log('uuuuuuuuuuuu', url)
//     // const url = "https://piratelk.com/saw-x-2023-sinhala-subtitles/";
//     const config = {
//         headers: {
//           'Accept-Encoding': 'gzip, deflate, br'
//         }
//       };

//     // const response = await axios.get(url,config);
//     const response = await fetch(url)

// console.log('aaaaaaaaaaaaaaaaa', response)
//     const html = response.data;
//     const $ = cheerio.load(html);

//     const links = [];
//     const descriptions = []
//     const movieLinks = []
//     $(".su-button").each((_idx, el) => links.push($(el).attr('href')));
//     $(".su-button").each((_idx, el) => descriptions.push($(el).text()));

//     console.log('lllllllllllllllllll', links)
//     console.log('dddddddddddddd',descriptions)

//     links.map((link, index) => {
//         const splitLink = link.split('/')
//         const splitDes = descriptions[index].split(' ')
//         if (splitLink[2] === 'usersdrive.com') {
//             const data = {
//                 link: link,
//                 details: `${splitDes[2]} | ${splitDes[3]} | ${splitDes[1]}`
//             }
//             movieLinks.push(data)
//         }
//     })

//     return movieLinks;
// }

const movieDownloadlink = async (name, year) => {
    // console.log(name, year)
    const movieName = name.toLowerCase().replace(/[^A-Z0-9]+/ig, "-");
    const url = `https://piratelk.com/${movieName}-${year}-sinhala-subtitles/`

    const res = await superagent.get(url)
    const $ = cheerio.load(res.text);
    // Replace the following selectors with the actual HTML elements you want to scrape
    const movieLinks = []
    const links = $(".su-button")
        .map((i, el) => $(el).attr('href'))
        .get();
    const descriptions = $(".su-button")
        .map((i, el) => $(el).text())
        .get();
    links.map((link, index) => {
        const splitLink = link.split('/')
        const splitDes = descriptions[index].split(' ')
        if (splitLink[2] === 'usersdrive.com') {
            const data = {
                link: link,
                details: `${splitDes[2]} | ${splitDes[3]} | ${splitDes[1]}`
            }
            movieLinks.push(data)
        }
    })

    return movieLinks;

    //     const html = response.data;
    //     const $ = cheerio.load(html);

    //     const links = [];
    //     const descriptions = []
    //     const movieLinks = []
    //     $(".su-button").each((_idx, el) => links.push($(el).attr('href')));
    //     $(".su-button").each((_idx, el) => descriptions.push($(el).text()));

    //     console.log('lllllllllllllllllll', links)
    //     console.log('dddddddddddddd',descriptions)

    //     links.map((link, index) => {
    //         const splitLink = link.split('/')
    //         const splitDes = descriptions[index].split(' ')
    //         if (splitLink[2] === 'usersdrive.com') {
    //             const data = {
    //                 link: link,
    //                 details: `${splitDes[2]} | ${splitDes[3]} | ${splitDes[1]}`
    //             }
    //             movieLinks.push(data)
    //         }
    //     })

    //     return movieLinks;
}


module.exports = movieDownloadlink


