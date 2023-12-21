Aplikacja jako zadanie potwierdzająca umiejętności do firmy Confilongi na stanowisko Junior Frontend Developera

Wykorzystane technologie

1. React (wraz z Next.js),
2. SASS jako preprocesor CSS (w tym zadaniu moduły),
3. MUI - Wystylowany komponent w FAQ,
4. Formik - walidacja formularza wraz z obsługą błędów,

O projekcie:
Projekt jest odwzorowaniem landingpage'u z wysłanego designu (przesłanego we dwóch wielkościach: 375px, 1440px).

Komponenty zostały podzielone na dwie sekcje:

- /shared (dzielone): które mogą być wielokrotnie używane lub występują na wielu stronach
- /home: czyli, te które występują jedynie na stronie głównej (np. sekcje strony)

Wszystkie komponenty podzielone są na foldery a w tych na dwa pliki: .tsx oraz .module.css

Elementy reużywalne przyjmują propsy i są możliwe do rozwinięcia dla dalszej części projektu.

Formularz kontaktowy wyświetla dwa błędy:

- gdy użytkownik próbuje przesłać pusty formularz,
- gdy użytkownik próbuje podać błędny email (np. bez "@").

Licznik "... already joined" odlicza od 35.000 do 0 w ciągu 20s.

Niebieskie kształty zaokrąglone z prawej/lewej strony zostały wykonane przy pomocy kodu.

Ikony w footerze (Facebook oraz Twitter) zmieniają kolor przy pomocy CSS (fill).

Modal (pop-up) wyświetla się raz w zależności od działań użytkownika (aby wyświetlić ponownie odśwież stronę):

1. Po 30s na stronie
2. Po najechaniu kursorem na górną część strony (100px od samej góry)

Osobiście z wykonania zadania jestem zadowolony, jednocześnie świadom, że zadanie można zrobić dokładniej, jednakże ograniczał mnie czas po obecnej pracy.
