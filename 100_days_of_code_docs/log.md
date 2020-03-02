# 100 Days Of Code - Log

### Day 1: Feb 16th, 2020

#### Today's Progress
- Figured out how to switch between test environment and production for my twilio app
- Reorganized my folder structure/files for the new web scrape

#### Thoughts:
ANOTHER ROUND! Super pumped. Finding that once I hit a milestone, it is hard to push through, so that is good to know.
But I am diving in to my side project and got a lot to unravel.

### Day 2: Feb 23rd, 2020

#### Today's Progress
- Learned the differences between session storage, local storage and cookies
- Began setting up session storage with text convo so I can have a conversation with the user

#### Thoughts:
So cool! Local/session/cookie storage always intimidated me, but turns out it isn't all that crazy after all.

### Day 3: Feb 24rd, 2020

#### Today's Progress
- Refactored code to take out conversation back and forth into its own module

#### Thoughts:
Stuck, stuck, stuck. Can't get the text to send from another linked module even though the same code executes within the root app.js file. But man am I having fun!

### Day 4: Feb 25th, 2020

#### Today's Progress
- Built out the text conversation back and forth to take in parameters
- Store parameters in a separate file to be referenced
- Fixed bug with Twilio, needed to have the headers and stuff set at the bottom of each message

#### Thoughts:
So fun! It's amazing to see tangible results like having a text conversation that responds back to you according to what you tell it.

### Day 5: Feb 26th, 2020

#### Today's Progress
- Project Planning

#### Thoughts:
Didn't do any coding, but sat down and sudo coded out the project. First time sudo coding! Interesting. Used a gsheet.

### Day 6: Feb 29th, 2020

#### Today's Progress
- Refactored code to split text converstion into 5 different search pages
- Set up express-sessions to have custom session id's for the different searches
- Completed the text conversation back and forth for search 1

#### Thoughts:
Lots of good progress tonight! Programmed for 2.5 hours like it was nuthin'. Really am enjoying express-sessions so far.

### Day 7: Mar 1, 2020

#### Today's Progress
- Duplicated search 1 logic into search 2 and 3 files
- Changed it so that instead of setting a value from text req body, it is now pushing to an array as the value so that
it can hold all the other results of like kind.

#### Thoughts:
When you think ahead of how to best write your code to be able to be replicated and scaled, once you do try and scale it, it makes things SO much faster.