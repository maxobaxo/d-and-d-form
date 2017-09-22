# D&D Character Creator
by Max Scher

## Process
* Spent a great deal of time pouring over concepts from the last two weeks: react components, passing props, lifting state, flux architecture, redux and all its moving pieces (actions, reducers, and store), jest testing, and react-bootstrap.
* I chose a project that would provide opportunities to demonstrate my knowledge of and versatility with the concepts and tools introduced over the last two weeks.

## Specifications
* It can allow player to submit their name and select their alignment.
* It can allow player to choose a race and class for their character, separately from submitting their name and alignment.
* It can simulate the rolling of 6 dice (4-sided, 6-sided, 8-sided, 10-sided, 12-sided, and 20-sided) and randomly assign the resulting numbers to the character's attributes (i.e. strength, intelligence, etc.)


* MVP: a single page that involves the following....
  * player rolls for ability scores.
    * player rolls 6 dice (each with varying number of sides). Each die determines score for specific ability (Strength, Dexterity, Constitution, Intellect, Wisdom, Charisma).
    * scores are saved to player profile.
  * user selects character's race from dropdown list.
    * the race selection updates the player profile with new ability scores.
  * user selects class from dropdown list
    * the class selection adds values for player profile stats: primary stat, hit die, saving throw proficiencies, armor & weapon proficiencies.
    * the class selection adds values to player profile for level one features and proficiency bonus.
  * user decides on a background from drop-down list
    * the bg selection adds value to player-profile for background
    * user then must select from list for each of the following:
      * traits
      * ideal
      * bond
      * flay
      * proficiencies
      * feature
  * User clicks a submit button and the final results of their player profile are revealed to them, perhaps with a picture of a potential avatar.

* Wish List:
  * Additional page for Armor choices
  * Additional page for classes.
