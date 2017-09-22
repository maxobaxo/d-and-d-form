# Free Form React-Redux Project
by Max Scher

## Planning
* I've chosen to attempt to create an app that allows users to create their own Dungeons & Dragons character.

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
