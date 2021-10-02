# **GENIUS TRIVIA QUIZ**

You can see the live site [here](https://amartins87.github.io/Genius_Trivia_Quiz/).

The purpose of Genius Trivia Quiz is to test user's general knowledge through a variety of questions. 

I kept the site simple containing only a background image with a back up background color of black in case the image doesn't load up for a good contrast. 

![Mock up image](assets/wireframes/Mock_up_MS2.JPG)

*Please press **Ctrl** in Windows or **Command** on Mac button and click for any links which you would like to open in a new tab when in the README.md file*

## **FEATURES**

- ### **NAVIGATION**
    - Navigation links are on top of each page on every screen size to take the user to a different page of the website.
          - It allows the user to easily navigate from page to page across all devices as the navbar is in a fixed position, so it stays put if you scroll through any page.
    - Sections of the navigation bar are: Home, About, ABC, and Sign Up.
        - Each page has a title:
            -   Home page - World of Makaton
            -   About - About Makaton
            -   ABC - ABC ... Alphabet
            -   Sign Up - Sign Up
    - Fonts and colors compliment the overall look of the website and are consistent throughout.
    - Active page will be highlighted in crimson color. The same color was used for a hover function. 

![Navigation bar image](assets/wireframes/navbar.PNG)

- ### **HOME PAGE IMAGE**
    - The header shows the name of the website, using a chosen color of purple shade (#894ac5). 
    - The header's tagline gives the user clear information about the website's topic.

![Home page image](assets/wireframes/home_image.JPG)

- ### **FOOTER**
    - Contains social media links leading to Facebook, Twitter, and YouTube and a link to an email in form of icons at the bottom of each page. The links will open in a new tab to allow easy navigation and avoid using the 'back' button to return to the page. The email link will open the user's choice of email software, i.e. desktop mail app/Outlook.
    - It also contains copyright information, including a year of creation and my name.

![Footer image](assets/wireframes/footer.PNG)

- ### **ABOUT PAGE**
    - This section gives a user information about what Makaton (topic of the website) is, how it is used, and the best tips on how to start learning it.
    - Image shows the character of Mr Tumbles from CBeebies shows 'Something Special' to which I included an external link for users to click on and be redirected into a new window.

![About page image](assets/wireframes/about_page_nv.JPG)

- ### **ABC PAGE**
    - This page contains images of the Makaton finger alphabet. Every single picture has a thin border to separate each image from each other and again allow a better user experience on all screen sizes. 

![ABC page image](assets/wireframes/abc_page.PNG)


- ### **SIGN UP PAGE**
    - Sign up page has a form to collect user's details if they would like to receive news & updates
    - Form collects name, email, and selection of newsletter type the user would like to receive
    - Users will be able to choose if they would like to get email updates and video tutorials, information about any running workshops, or they can select to subscribe to all.

![Sign Up page image](assets/wireframes/sign_up_page.PNG)
   
- ### **THANK YOU PAGE:**
    - After the user fills in the sign up form and clicks on 'Send' button, it will take the user to a page with a confirmation of their successful registration.     

![Thank You page image](assets/wireframes/thank_you_page.PNG)

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
    -   [Home page](assets/wireframes/W3C_HTML_Validator_Results.JPG)

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

- When I resized images with TinyJPG, the Lighthouse report came back with low Best Practices, so I reverted to old sizes. All images uploaded well apart from a letter F. I deleted and uploaded the image again and retyped the link path to a letter F and the issue got fixed. 

    ![Letter F](assets/wireframes/letter_f_error.JPG)

- Got an error on my Lighthouse report about my external links in a footer and 'About' page, stating the links to cross-origin destinations are unsafe. The error was resolved by adding rel="noreferrer".

- When I ran the lighthouse report for final check, the Performance category has changed its score several times, ranging from 83 to 98 even though I didn't change or add html or css code. I feel like this had to be highlighted.

## **UNFIXED BUGS**

-   Yellow warning showed up on the ABC page due to the whole page section not having a heading element. There is no need to use a heading element within the section as the page contains only images of the finger alphabet. 


## **DEPLOYMENT**

The site was deployed to GitHub pages. The steps to deploy are as follows:
1.  In the GitHub repository, navigate to the **Settings** tab, then **Pages** section
2.  From the **Source** section drop-down menu, select the **Branch:main**
3.  Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
4.  Now this site is live and published on https://amartins87.github.io/world-of-makaton/.


## **CREDITS**

- **CONTENT**
    - My main point of reference for the written content was [Makaton website](https://makaton.org) to double-check that I wasn't going to write incorrect data and information.  

    - The icons in the footer and a sign up form were taken from [Font Awesome](https://fontawesome.com/)

- **CODE**
    - I searched on [W3Schools](https://www.w3schools.com) when I looked for the best way to incorporate images on About and Alphabet pages. Even though I didn't use any of the code in my final version, I have learnt a great deal from trying out new ways of displaying images like a responsive grid layout. 

    - Code for the form page was taken from the Love Running project and only minor changes were made, like a change of font, image position, height, color scheme, and adding a code for cursor.

    - The select option code was advised to use by my mentor Maria Hynes as I couldn't implement a 'required' attribute to my previous checkbox option without using a javascript. 

- **MEDIA**

    - Home page image was obtained via [Shutterstock](https://www.shutterstock.com/image-photo/brother-sister-learn-sign-language-home-450847297). 
    - About page image was obtained via official [Something Special magazine Twitter account](https://twitter.com/MyMrTumbleMag/status/980490147996360705?s=20). 
    - Abc page images were obtained via [Makaton website](https://makaton.org/TMC/Free_resources_.aspx) in their library which contains free resources for anyone who creates an account with the organization's website.
    - Sign Up page image inspiration came from our local children's centre where they have hanged images of kids' handprints in rainbow colors. The image was obtained via [Clip Art Best website](http://www.clipartbest.com/clipart-9i4ogx4GT) which are free to download and use in my designs. 
    - Image on the hidden Thank You page was obtained via [Makaton website](https://makaton.org/TMC/Free_resources_.aspx) from their library of free resources.

*This project is for educational purposes only.*