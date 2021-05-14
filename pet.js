/*
 * @Author: haiifeng
 * @Date: 2020-12-11 18:20:08
 * @LastEditors: haiifeng
 * @LastEditTime: 2021-01-05 15:16:17
 * @FilePath: \code\mailBot\pet.js
 */

const {
    default: Axios
} = require("axios");

// Axios.post('http://pets-bm.neea.edu.cn/Candidate/SaveSubject', {
//         "sid": "45E007CF57D2449DBD7A4C2DB5855DF5",
//         "passportsid": "2662F3E9F03240DDB5F84DACAE9D00EA",
//         "idnumber": "341226199307075029",
//         "province": "11",
//         "writtenregtestcenter": "1100110001",
//         "spokenregtestcenter": "1100110001",
//         "t_sStr": "1100110001_30",
//         "__RequestVerificationToken": "mkgJD98ms5N0CQIUczAs1dqEP-CXpibPJfFVcOkPpEdP-wDHEQWz8aQFfSp_IHMLTQh4r_FwNaYDSONcHiziC2MLNEUu9AEWDPmcYfnodVw1"
//     })
//     .then(function (response) {
//         console.log('res', response);
//     })
//     .catch(function (error) {
//         console.log('err', error);
//     });


// Axios({
//         method: 'POST',
//         url: 'http://pets-bm.neea.edu.cn/Candidate/SaveSubject',
//         timeout: 8000,
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//             'Accept': 'application/json, text/javascript, */*; q=0.01',
//             'Accept-Encoding': 'gzip, deflate',
//             'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
//             'Content-Length': '341',
//             'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//             'Cookie': 'Hm_lvt_dc1d69ab90346d48ee02f18510292577=1609751734,1609751988; __RequestVerificationToken=T7PPvT9G1PI_Yo6mOBmOz8GulDCs-wV0z63iF_zqGnxK1YOKxz1fiS6z3KS3n3YR_9lyTZEVfLHhTEG8QeEHzWgkbHCIdWXymQy_bd9AFfg1; Hm_lvt_d019656476642d28dade13fc6c5e50ee=1609752490; Hm_lpvt_dc1d69ab90346d48ee02f18510292577=1609810504; ASP.NET_SessionId=z2kvlssclcpfiffirj4ec2l5; .ASPXAUTH=1B3C554A3A1ED2A555D12120063B8AC61E71512320237EE1A9DBD035C271A1C40673A75666CA155D241FFEF27FE5FAA08AD4EAD7F33937530A5BD9F99E0809FC01F6481B3BD90468B06FE57F58DCD73B044BEC3EDB921925C4D5383F879DE82A; BIGipServerpets-bm.neea-internal_pool=981321738.28167.0000; Hm_lpvt_d019656476642d28dade13fc6c5e50ee=1609829294',
//             'Host': 'pets-bm.neea.edu.cn',
//             'Origin': 'http://pets-bm.neea.edu.cn',
//             'Proxy-Connection': 'keep - alive ',
//             'Referer': 'http://pets-bm.neea.edu.cn/Candidate/DetailsSubject?r=0.10686212955506269',
//             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
//             'X-Requested-With': 'XMLHttpRequest',
//         },
//         data: {
//             "sid": "45E007CF57D2449DBD7A4C2DB5855DF5",
//             "passportsid": "2662F3E9F03240DDB5F84DACAE9D00EA",
//             "idnumber": "341226199307075029",
//             "province": "11",
//             "writtenregtestcenter": "1100110001",
//             "spokenregtestcenter": "1100110001",
//             "t_sStr": "1100110001_30",
//             "__RequestVerificationToken": "mkgJD98ms5N0CQIUczAs1dqEP-CXpibPJfFVcOkPpEdP-wDHEQWz8aQFfSp_IHMLTQh4r_FwNaYDSONcHiziC2MLNEUu9AEWDPmcYfnodVw1"
//         }
//     }).then(function (response) {
//         console.log('res', response);
//     })
//     .catch(function (error) {
//         console.log('err', error);
//     });


Axios({
        method: 'POST',
        url: 'http://pets-bm.neea.edu.cn/Candidate/GetTestCenterByProvince',
        timeout: 8000,
        headers: {
            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',},
        data: {
            "code": 11,
            "__RequestVerificationToken": "LRAyVs3nQrJbkT311GZnQtsK4ox1I1evjgD354p2u7izIuASzwZGMejddLn7Hvzrnr2e-ImUL1-oTZwRxj0MAWNW1Pe8Sd1UIAU8zOl3k1E1"
        }
    }).then(function (response) {
        console.log('res', response);
    })
    .catch(function (error) {
        console.log('err', error);
    });