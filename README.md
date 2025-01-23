# Bread and Butter Website

![Bread and Butter](https://github.com/user-attachments/assets/026f4940-9f18-4f51-a219-054bc690ceec)


## Beschrijving
Bread and butter is een event dat is gehouden in November 2024 waarbij kennis wordt gedeeld met klanten en gastsprekers. Het gaat over goede toegankelijkheid van websites. Er komt een one-pager waar overzichtelijk staat over het event dat heeft plaatsgevonden. 

## Kenmerken
De webiste is een one-pager wat betekent dat alle informatie alleen maar op een pagina staat. De pagina is opgedeeld in een header, body (met secties erin) en footer.

<h3>Header</h3>
Op de header staat het JUST logo met aan de rechterkant een switch waar je van dark naar lightmode en andersom kan gaan.

![image](https://github.com/user-attachments/assets/a9681cc8-c96a-4269-83b3-bf72345736fd)

<h3>Banner</h3>
De banner bestaat uit een slideshow dat wordt getoond van de herinneringen van het event. Hier draait het logo van bread butter.

![image](https://github.com/user-attachments/assets/ac004f6c-b774-472e-b4a5-7b997b249c9a)

<h3>Info over het event</h3>
De rest van de website wordt informatie over het event omschreven dit is met scroll animation toegepast zodat het er flexibel uitziet. Hier is ook een quote met een foto bijgeplaats zodat je echt ziet wie het heeft gezegd.

![image](https://github.com/user-attachments/assets/17951c0e-41e0-4803-8d5d-a72e375cead5)

<h3>Fotocarrousel</h3>
Er is ook een fotocarrousel waar je foto's kan zien van het event. Dit is toegankelijk gemaakt met alt teksten.

![image](https://github.com/user-attachments/assets/c52b3a95-92a9-4cea-864c-2dfc9bef9ace)


<h3>Contact</h3>
Ook is er een email input gezet in het ontwerp hier kunnen eventuele toekomstige klanten contact opnemen bij het bedrijf.

![image](https://github.com/user-attachments/assets/92747c3b-a353-45df-9fc3-7ae84e97e031)

<h2>Conventie</h2>

<h3>Ademruimte en Inspringen</h3>
<p>In de HTML is er conventie toegepast. Dit voor een overzichtelijke HTML wat helpt met makkelijk coderen. Alle elementen worden per enter in een rij gezet zodat je ziet welke elementen in wat staan. Zo zijn de hoofdelementen: body en head en hier vallen header, sections en footer in </p>

![image](https://github.com/user-attachments/assets/89bd66d0-2ba4-43f6-bf9f-b26f364dd064)

<h3>Volgorde en Nesten van CSS</h3>
<p>De volgorde van de CSS staan op volgorde hoe de HTML is opgebouwd. Hierbij staan de grote elementen bovenaan zoals de body en *. Ook staan de keyframes helemaal onderaan zodat deze altijd worden uitgevoerd wanneer ze worden benoemd in een class. Alle classes in een specifieke class zijn genest in het hoofdelement zo wordt de h1 van een sectie benoemd in de body class.</p>

![image](https://github.com/user-attachments/assets/74a6229e-1641-4a46-a1b6-741f5cef0d5e)

<h3>Media Queries</h3>
<p>Media Queries worden genest in de class zelf</p>

![image](https://github.com/user-attachments/assets/e2f20438-8c29-43f6-ab82-7ccffdf31cd8)


<h3>Naamgeving</h3>
<p>De naamgeving wordt als kebabcase gebruikt. In de custom CSS properties zie je dat dit is opgesteld per element.</p>

![image](https://github.com/user-attachments/assets/d4426005-b9c7-41c6-bd11-de6f22e072ff)


<h2>Accesibility test</h2>
<p>Aangezien het belangrijk is dat de website toegankelijk is voor iedereen wordt er een Lighthouse test uitgevoerd op de website maar niet voordat we door de eisen gaan van de briefing.</p>

<h3>Tabben door Content</h3>
<p>Door de functie "tabindex" is het mogelijk om door de content te navigeren met alleen toetsenbord.</p>

![image](https://github.com/user-attachments/assets/41c95fb7-5d54-4e46-8346-7ee0bc7b6f71)

<h3>Kleurblindheid test</h3>
<p>Ook is er rekening gehouden met de kleurblindheid. In de test staat dat groen niet goed samengaat met een donkere achtergrond dus het groen is uit de color-palette gehaald op de stickers na. Er zijn veel verschillende soorten kleurenblindheid. Hier gebruik ik de bron AcessCSS. Hier kan ik dan drie filters toepassen op de website CSS zones, Greyscale en Colorblindfilter. Dit moet gedaan worden met een speciale variant ".scss". Dit is wat om later uit te zoeken echter ga ik gebruik maken avn de CSS zones en de greyscale. Op de header staan buttons om dit in te schakelen.</p>

![image](https://github.com/user-attachments/assets/d385f338-3b71-4250-a345-51b2d0ab4487)

<h3>Lighthousetest</h3>
<p>Voor de lighthouse test scoort de website 80%. Enkele goede punten zijn dat de language Engels is van de pagina, ARIA roles en alle elementen hebben een toegankelijke naam. Echter ontbreken er een aantal alt teksten bij de image. Ook is de 'tabindex' niet volledig in order omdat deze optelt 1..2...3 terwijl het 1 moet blijven.</p>

![image](https://github.com/user-attachments/assets/71d51d94-e81b-4b1f-8b32-127195a5abd9)



## Bronnen

- AcesCSS https://lukyvj.github.io/accecss/


