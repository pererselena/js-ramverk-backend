'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const data = {
        data: {
            title: "Min me-sida i kursen jsramverk",
            msg: `![Bild på mig class=me](https://elenaperers.me/img/profileImg.jpg) { width=500}

Mitt namn är Elena Perers. Född och uppvuxen i Barnaul, en stad som ligger Sydvästra Sibirien i Ryssland. Där växte jag upp, gick i skolan och universitetet.

Jag läste sociologi och juridik på Altai State University i Barnaul, Ryssland.

Mitt första möte med programmering fick jag i högstadiet då vi fick lära oss basic. Det kändes för komplicerat för mig på den tiden och bestämde mig för att inte bli utvecklare. Men nu sitter jag här och studerar webbprogramering. Intresset väcktes för inte så länge sedan när jag flyttade till Sverige bestämde jag mig för att byta yrke helt. Jag började bli nyfiken på hur fungerar webbsidor och började titta på video kurser om HTML, CSS och JS och blev förvånad att det är inte så komplicerat och det är inte omöjligt att lära sig.

Vill du läsa mer om vad jag jobbat med så kan du kika på min [Linkedin-profil](https://www.linkedin.com/in/elena-perers/)Linkedin-profil.

/Elena Perers`
        }
    };

    res.json(data);
});

module.exports = router;
