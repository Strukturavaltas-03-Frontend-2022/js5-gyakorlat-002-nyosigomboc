# Feladatok

1. Írj egy függvényt `validateVisaCardNumber` néven, ami paraméterként egy visa kártyaszámot vár stringként, szóközök nélkül!   
A függvény egy `Boolean` értékben visszaadja, hogy a paraméterként megadott kártyaszám megfelelő formátumú e, vagy sem.

2. Írj egy függvényt `validateIPAddress`, ami paraméterként egy IPv4 címet vár stringként!   
A függvény egy `Boolean` értékben visszaadja, hogy a paraméterként megadott IP cím megfelelő formátumú e, vagy sem.

3. Írj  egy függvényt `validateMACAddress`, ami paraméterként egy MAC címet vár stringként!   
A függvény egy `bollean` értékben visszaadja, hogy a paraméterként megadott MAC cím megfelelő formátumú e, vagy sem.

4. Hozz létre egy Object-et `roles` névvel!
   Ebben legyen letárolva 3 reguláris kifejezés. Ezek az alábbiak:
   - `visa`: reguláris kifejezés Visa kártyaszámra 
   - `ip`: reguláris kifejezés IP címre
   - `mac`: reguláris kifejezés MAC címre   

   Írj egy `validate` nevű függvényt, ami paraméterként két paraméter vár. 
   Az első egy string, ami egy validálandó érték, a második pedig szintén egy string az alábbiak közül: 
   - `visa` 
   - `ip`
   - `mac` 
   Ez az érték az, hogy milyen adatot akarunk validálni. 
   A függvény visszatérési értéke egye `Boolean`. 