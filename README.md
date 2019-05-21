# Dicsőítés kották
Magyar dicséretek kottái ChordPro (Planning Center féle) formátumban.

## ChordPro
A ChordPro formátumról és eszközről [itt lehet bővebben tájékozódni](https://www.chordpro.org/chordpro/). Telepítése nem kötelező.
- [Telepítés](https://www.chordpro.org/chordpro/ChordPro-Installation.html)

## Planning Center
Biztosan sok eszköz és szolgáltatás használja a ChordPro formátumot. Tapasztalataink szerint az egyik legjobb és legteljesebb gyülekezet szervező szolgáltatás a Planning Center. Ez is ChordPro (szerű) formátumot ajánl a dalok tárolásához.

Mivel a Planning Center nem ajánl import funkciót (csak export-ot), egyesével kell bevinni a dalokat. Többek között ezért is jött létre ez a repository, hogy elég legyen egy copy-paste (másolás-beillesztés).

A Planning Center sok dirktívát nem dolgoz fel a standard ChordPro formátummal ellentétben, így ezek használatát csak a fejlécben ajánljuk (title, author, tempo, stb.).

## Részvétel a dalok hozzáadásában
Ha szeretnél hozzáadni egy dalt, megtehet magad is: hozz létre egy új branch-et `new/az-uj-dalom` névvel, hozd létre az új ChordPro kottát a gyökér könyvtárban levő sablon alapján, töltsd fel és kérj egy pull requestet.
Köszönet mindenkinek, aki segíti a közösséget!

Csináltam egy import eszközt is PCO-hoz (converter/converter-pco.js). Aki tudja, használhatja!

Az is teljesen rendben van, ha a dalokat egy CSV fájlban megkapom, és akkor magam intézem az importjukat.

### Elvárások

- Ha a dal fordítás, a címében legyen ott az eredeti címe is (pl. "Fényeddel (My Lighthouse)")
- Ha az akkordok a szöveg fölé írva vannak megadva, nem pedig inline (Az [E]Úr irgalma...), akkor legyenek pontos helyen, ahol játszani kell.

### Kérve kérlek, hacsak lehet

- fordítás esetén add meg az eredeti dal CCLI számát is
- add meg a tempót
- add meg a lüktetést (3/4 6/8 4/4 stb.)
- add meg a hosszt (jó 3:30 alakban is (olvasható), vagy 210-ként is (másodperc))
- az akkordokat inline add meg (Az [E]Úr irgalma...)

## Víziónk
Van egy álmunk, hogy legyen egy mindenki számára elérhető, könnyen használható oldal, ahol a mindenféle fordítások és szerzemények megtalálhatóak, összehasonlíthatóak. Erről bővebben [itt olvashatsz](http://dicsoitesmagyarul.doxasoft.hu/).

## Contribution
If you want to contribute, just create a new branch named `new/my-new-song` add your new song in ChordPro format using the template in the root folder, push it and create a pull request to `master`.
Thank you for anyone who help the community!

I've created an import tool (converter/converter-pco.js). Feel free to use it if you can!

It's also perfect if you send your songs to me in a CSV file so I will be able to import them.

## Copyrights
We are not intended to break any copyrights but want to help God's people to sing the songs His people wrote to worship Him. If you are the right owner of any of the songs in this repository and want it to be deleted just send us an email and we will remove the song.
