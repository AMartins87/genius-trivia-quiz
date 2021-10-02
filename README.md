# **GENIUS TRIVIA QUIZ**

You can see the live site [here](https://amartins87.github.io/Genius_Trivia_Quiz/).

The purpose of Genius Trivia Quiz is to test user's general knowledge through a variety of questions. 

I kept the site simple containing only a background image with a back up background color of black in case the image doesn't load up for a good contrast. 

![Mock up image](assets/wireframes/Mock_up_MS2.JPG)

*Please press **Ctrl** in Windows or **Command** on Mac button and click for any links which you would like to open in a new tab when in the README.md file*

## **FEATURES**

- ### **START GAME PAGE IMAGE**
    - The main page a box with rules of game and a play button. 

![Home page image](assets/wireframes/wireframe_game.JPG)

- ### **FOOTER**
    - Contains copyright information, including a year of creation and my name.

![Footer image](assets/wireframes/wireframe_footer.JPG)

- ### **QUIZ PAGE**
    - 

![About page image](assets/wireframes/about_page_nv.JPG)


## **FUTURE DEVELOPMENT**

I would like to add a thin side-bar on mobile devices and screens with width of 577px and down on the ABC page with links to each of the letters for easier navigation. 
Also, I would like to set up a proper collection site to receive subscribers' data once I learn how to do it. It will allow me to distribute all relevant information as per their sign up entries. 

## **TESTING**

As you can see in my [wireframes](assets/wireframes/Makaton_wireframe_all.png), the layout was originally planned slightly differently, including the position and display of a navbar. 

To improve user's experience and ease of navigation on smaller screens, I changed the navbar to be in a fixed position top of the page on every screen which then eliminated problems on mobile phone touchscreens as the padding area increased with this change and users are able to press the page links without any issues. 

I tested every page in Chrome Developer Tools using responsive design as well as all of the available device types listed. 

I tested every page on iPad and iPhone 8, and I asked my friends and family to test the site on their mobile devices (Huawei, Xiaomi Redmi, and Samsung). They confirmed functionality of all pages and links, and they understood the objective of the website.

I tested the website in Chrome and Microsoft Edge on my desktop PC with widescreen (screen resolution of 1920px by 1080px), and tested it on a laptop in Chrome, Mozilla, and Microsoft Edge. The site is responsive, looks good, content is readable on all standard screen sizes and all external links open in a new window. 

### **VALIDATOR TESTING**

-   **HTML** (No errors were returned when passing through the official W3C validator 
    ![W3C Validator](assets/wireframes/W3C_HTML_Validator_Results.JPG)

-   **CSS** (No errors were found when passing through the official Jigsaw validator
    
    ![Jigsaw Validator](assets/wireframes/W3C_CSS_Validator_Results.JPG)


### **ACCESSIBILITY**

I checked that the chosen colors and fonts are easy to read. All pages have passed through  the Lighthouse reporting tool in Chrome developer tools on both mobile and desktop.
- [Contrast checker - body and header text](assets/wireframes/accessibility/Body_text_contrast_checker.JPG)
- [Contrast checker - correct class](assets/wireframes/accessibility/Correct_class_contrast_checker.JPG)
- [Contrast checker - incorrect class](assets/wireframes/accessibility/Incorrect_class_contrast_checker.JPG)
- [Contrast checker - active class and hover selector](assets/wireframes/accessibility/Hover_selector_contrast_checker.JPG)

***
- [Lighthouse report - mobile](assets/wireframes/accessibility/Lighthouse_mobile_report.JPG)

***
- [Lighthouse report - desktop](assets/wireframes/accessibility/Lighthouse_desktop_report.JPG)


## **BUGS**

-   Right at the beginning, my page wasn't loading none of the style changes. I realized I forgot to link the style.css file with the index.html file. Once I linked it, all was fixed.

-   When I ran the code through a validator, an error popped up on my sign_up.html page in my '.form-section'. I have had set the target="_blanket" and it had strangely worked - a new page opened up in a new window. The correct value is target="_blank". However the target value was taken out as there is no need for an internal link to open in a new tab or window. 

- Got an error on my Lighthouse report about my external links in a footer and 'About' page, stating the links to cross-origin destinations are unsafe. The error was resolved by adding rel="noreferrer".

- When I ran the lighthouse report for final check, the Performance category has changed its score several times, ranging from 83 to 98 even though I didn't change or add html or css code. I feel like this had to be highlighted.

## **UNFIXED BUGS**

-   


## **DEPLOYMENT**

The site was deployed to GitHub pages. The steps to deploy are as follows:
1.  In the GitHub repository, navigate to the **Settings** tab, then **Pages** section
2.  From the **Source** section drop-down menu, select the **Branch:main**
3.  Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
4.  Now this site is live and published on https://amartins87.github.io/Genius_Trivia_Quiz/.


## **CREDITS**

- **CONTENT**
    - My source for questions and correct answers was [Best Life](https://bestlifeonline.com/genius-trivia-questions/).

    - The icons in the footer and a sign up form were taken from [Font Awesome](https://fontawesome.com/)

- **CODE**
   

- **MEDIA**

    - Background image was sourced from Pexels and it belongs to [Felix Mittermeier](https://www.pexels.com/photo/galaxy-1146134/).
