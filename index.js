async function mosipan() {
  let count = 100 // 반복 횟수
  for (let i = 0; i < count; i++) {
      await fetch("url", {
          "credentials": "include",
          "headers": {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:99.0) Gecko/20100101 Firefox/99.0",
              "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
              "Accept-Language": "ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3",
              "Content-Type": "application/x-www-form-urlencoded",
              "Upgrade-Insecure-Requests": "1",
              "Sec-Fetch-Dest": "document",
              "Sec-Fetch-Mode": "navigate",
              "Sec-Fetch-Site": "same-origin",
              "Sec-Fetch-User": "?1"
          },
          "referrer": "https://mosipan.gbsw.hs.kr/php/write.php",
          "body": "headLine=" +"제목" + "&username="+ "유저네임" + "&content=" + "내용",
          "method": "POST",
          "mode": "cors"
      });
    }
}
