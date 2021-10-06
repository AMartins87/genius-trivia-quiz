# **GENIUS TRIVIA QUIZ**

You can see the live site [here](https://amartins87.github.io/genius-trivia-quiz/).

The purpose of Genius Trivia Quiz is to test user's general knowledge through a variety of advanced questions. The quiz is suitable for all those who would like to learn new interesting facts. 

The objective of this project is to create a simple and easy to navigate quiz without a need to register.

![Mock up image](assets/wireframes/Mock_up_MS2.JPG)

*Please press **Ctrl** in Windows or **Command** on Mac button and click for any links which you would like to open in a new tab when in the README.md file*

## **FEATURES**

- ### **START GAME PAGE IMAGE**
    - The main page has a box with rules of the game and a play button which will turn dark blue with text to bold white when you hover over it.

![Home page image](assets/wireframes/wireframe_main_page.JPG)

- ### **FOOTER**
    - Contains copyright information, including a year of creation and my name.

![Footer image](assets/wireframes/wireframe_footer.JPG)

- ### **QUIZ PAGE - START**

    - Shows questions with three possible options on display
    - Next Questions button is not visible before you select your answer

![Quiz game page](assets/wireframes/wireframe_game.JPG)

- ### **QUIZ PAGE - HOVER**
    - When a user hovers over the options, the buttons will change their background color to a shade of dark blue color and the text will become bold white. 

![Hover function](assets/wireframes/wireframe_game_hover.JPG)

- ### **QUIZ PAGE - CORRECT/INCORRECT OPTION**
    - When an answer is selected, the background of the buttons will turn light green/light red according to being correct/incorrect.
    - User can see which answer he selected as the font will change to italic and the border will increase to 5px.
    - Next Question button will appear and again it will turn dark blue with text to bold white when you hover over it.

![Quiz game page with correct/incorrect answer](assets/wireframes/wireframe_game_correct_incorrect.JPG)

- ### **QUIZ PAGE - END SCREEN**
    - The screen shows the text 'Finished!' and 'Play Again' button which will turn dark blue with text to bold white when you hover over it.

![End of game page](assets/wireframes/wireframe_end_screen_w_hover.JPG)

## **FUTURE DEVELOPMENT**

I would like to add pop-up modals with interesting facts about correct answers. I would also like to add a question counter, score, and timer.
I will also add new questions to keep the content interesting and educational for users. 

## **TESTING**

Here are my [Balsamiq wireframes](assets/wireframes/Balsamiq_wireframe.JPG). 

I kept the styling of the quiz to a minimum to make it accessible and easy to navigate through on every device without the need for media queries. I set a simple background image with a backup background color of black for a good contrast in case the image doesn't load up. The site consists of only one page and is responsive.

I tested the quiz in Chrome Developer Tools using responsive design as well as all of the available device types listed. 

I tested the quiz on an iPad and iPhone 8, in Chrome and Microsoft Edge on my desktop PC with a screen resolution of 1920px by 1080px. I also tested the quiz on a laptop in Chrome, Mozilla, and Microsoft Edge. The site is responsive, looks good, content is readable on all standard screen sizes and I found it easy to click on all buttons after the padding got increased.

### **VALIDATOR TESTING**

-   **HTML** (No errors were returned when passing through the official W3C validator) 
    ![W3C Validator](assets/wireframes/W3C_HTML_Validator_Results.JPG)

-   **CSS** (No errors were found when passing through the official Jigsaw validator)
    
    ![Jigsaw Validator](assets/wireframes/Jigsaw_CSS_Validator_Results.JPG)

-   **JSHINT** (1 warning and 1 unused variable found)
 - I had to select 'New JavaScript features (ES6)' in JShint.com in 'Configure' as I am using const and let variables and arrow function syntax which are available in ES6 or Mozilla JS extension.
 - Function hideRules(), line 26 is marked as *unused variable* in jshint report, however this function is called in index.html.
 - Jshint warning: *Expected an assignment or function call and instead saw an expression*, line 41 >> this applies to calling a function nextQuestion() where I am calling for a new question - this warning is not valid as I'm simply calling a function nextQuestion() in my startQuiz() function.
    
    ![JShint Tool](assets/wireframes/JShint_report.JPG)

### **ACCESSIBILITY**

I checked that the chosen colors and fonts are easy to read. The quiz page has passed through the Lighthouse reporting tool in Chrome developer tools on both mobile and desktop.
- [Contrast checker - body and header text](assets/wireframes/accessibility/Body_text_contrast_checker.JPG)
- [Contrast checker - correct class](assets/wireframes/accessibility/Correct_class_contrast_checker.JPG)
- [Contrast checker - incorrect class](assets/wireframes/accessibility/Incorrect_class_contrast_checker.JPG)
- [Contrast checker - active class and hover selector](assets/wireframes/accessibility/Hover_selector_contrast_checker.JPG)

***
- [Lighthouse report - mobile](assets/wireframes/accessibility/Lighthouse_mobile_report.JPG)

***
- [Lighthouse report - desktop](assets/wireframes/accessibility/Lighthouse_desktop_report.JPG)


## **BUGS**
-   I created a function for users to be taken to an end screen after they answer the last question. However once they clicked on the answer, it would take them straight to the end screen without the possibility of seeing if they answered correctly or not. This bug got fixed once I added the setTimeout() method so it delays the screen by a couple of seconds as per my mentor's advice. 

## **UNFIXED BUGS**
-   There is a bug in the option selection process as users can click on all three options. Although it counts only the first selection as valid, it is a feature I would like to fix in the future as I want to add a score counter. I just haven't figured out how to fix this right now. 

![Unfixed bug](assets/wireframes/unfixed_bug_selection.JPG)

## **DEPLOYMENT**

The site was deployed to GitHub pages. The steps to deploy are as follows:
1.  In the GitHub repository, navigate to the **Settings** tab, then **Pages** section
2.  From the **Source** section drop-down menu, select the **Branch:main**
3.  Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
4.  Now this site is live and published on https://amartins87.github.io/genius-trivia-quiz/.


## **CREDITS**

- **CONTENT**
    - My source for questions and correct answers was [Best Life](https://bestlifeonline.com/genius-trivia-questions/).
    - The icons in the rules' container and at the end of the game were taken from [Font Awesome](https://fontawesome.com/)
    - Font is sourced from [Google Fonts](https://fonts.google.com/). I chose IM Fell Double Pica SC specifically to attract users and grab their attention. It also compliments the overall look of the quiz styling.  

- **CODE**
    - As mentioned in comments in my script.js, I have used the walk-through Love Maths project as my anchor point, and [Site Point](https://www.sitepoint.com/simple-javascript-quiz/) to guide me through the project.
    - I took an inspiration from [CodingNepal - JS](https://youtu.be/WUBhpSRS_fk)/[CodingNepal - HTML/CSS](https://www.codingnepalweb.com/quiz-app-with-timer-javascript/) for the look and from [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k&t=979s) for the functionality.

- **MEDIA**
    - Background image was sourced from Pexels and it belongs to [Felix Mittermeier](https://www.pexels.com/photo/galaxy-1146134/).
