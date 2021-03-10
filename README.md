# Test assignment
Project took 5 pomodoros/2,5 hour of my life, with a structure of: 1 hour of reading up and gathering knowledge, half an hour of fighting the geobox due to dependencies, 1 hour of google and nasa implementation. Disclaimer - I was familiar with google infrastructure and already had API keys for the job.
Couldnt use Nominatim due to usage policy - not available for autocompletion.



![image](https://user-images.githubusercontent.com/16391549/110681265-f13b1700-81d9-11eb-9c68-2c2039cce294.png)



Apart from that, decided to go with out-of-the box solution of react-geocoder-autocomplete, which has given me a few obstacles due depreciated solutions 
[react REFs]. As time was of the essence, I've just lowered react dependency to 16.2, right before the issue was introduced.

As far as code goes, further improvements should be made - all ACCESS_TOKENS should be moved to configuration file, preferably encrypted in a way.
Can't offer any user-friendlier and RWDier interface due to self-imposed time limitations, but my ability to do so is shown at this very github within fuhdesign.
As it stands, geobox keeps all components together and there's a flat component hierarchy structure. Within my standard way of working I've got a page as a main component to display, and component-sections structured accordingly.

Looking forward to some heavy-ass feedback.
Yours truly, 
Daniel Chwesiuk ;]
